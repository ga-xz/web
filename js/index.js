// 创建Cesium Viewer
var viewer = new Cesium.Viewer('cesiumContainer', {
  //添加地形
  terrain: Cesium.Terrain.fromWorldTerrain({
    // requestWaterMask: true,
    // requestVertexNormals: true
  }),
  navigationHelpButton: false, // 隐藏帮助按钮
  fullscreenButton: false, // 隐藏全屏按钮
  homeButton: false, // 隐藏主页按钮
  geocoder: false, // 隐藏地理编码器
  sceneModePicker: false, // 隐藏场景模式选择器
  baseLayerPicker: false, // 隐藏底图选择器
  timeline: false, // 隐藏时间轴
  animation: false, // 隐藏动画控件
  //skyAtmosphere: false, //隐藏大气层
  shouldAnimate: true, //
  infoBox:false,
});

// 3D地形左右旋转
viewer.scene.screenSpaceCameraController.enableTilt = false;
// 左右上下移动
//viewer.scene.screenSpaceCameraController.enableRotate = false;

// 抗锯齿
viewer.scene.postProcessStages.fxaa.enabled = true;
// 优化性能
viewer.resolutionScale = window.devicePixelRatio;
// 水雾特效
viewer.scene.globe.showGroundAtmosphere = false;
// 设置最大俯仰角，[-90,0]区间内，默认为-30，单位弧度
viewer.scene.screenSpaceCameraController.constrainedPitch = Cesium.Math.toRadians(-10);
//隐藏底部文字和logo
viewer.cesiumWidget.creditContainer.style.display = "none";
//移除当前图层
viewer.imageryLayers.removeAll();

// 自定义一个图层
var gog = new Cesium.UrlTemplateImageryProvider({
  url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s,%40781&x={x}&y={y}&z={z}&src=app&scale=2&from=app'
  //url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s,m&gl=&x={x}&y={y}&z={z}&src=app&scale=8&from=app'

});

//限制地球放大范围
viewer.scene.screenSpaceCameraController.minimumZoomDistance = 25;
//限制地球缩小范围
viewer.scene.screenSpaceCameraController.maximumZoomDistance = 22000000;

var title = new Cesium.UrlTemplateImageryProvider({
  //url: 'https://tiles1.geovisearth.com/base/v1/cia/{z}/{x}/{y}?format=png&tmsIds=w&token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f',
  url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=h,&x={x}&y={y}&z={z}&scale=2&from=app',

});

viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(106.8599, 25.6488, 10000000)
});
// //自定义函数名
var gog = viewer.imageryLayers.addImageryProvider(gog);
var title = viewer.imageryLayers.addImageryProvider(title);
//var titlee = viewer.imageryLayers.addImageryProvider(title2);
//初始状况下路网不可见
title.show = false;
//titlee.show = false;
//复选框控制
var che = document.getElementById('checkbox');
che.addEventListener('change', () => {
  title.show = che.checked;
  //titlee.show = che.checked;
});

// //ArcGis地形服务
// var ArcGisTerrainProvider = new Cesium.ArcGISTiledElevationTerrainProvider({
//     url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
// });
//         viewer.terrain = ArcGisTerrainProvider;

var compassContainer = document.getElementById('compassContainer');

// 设置初始指南针样式和事件监听器
updateCompass();
compassContainer.addEventListener('click', resetCameraPosition);

viewer.scene.postRender.addEventListener(updateCompass);

function updateCompass() {
  var cameraHeading = viewer.camera.heading;

  compassContainer.style.transform = 'rotate(' + (-cameraHeading) + 'rad)';
}

function resetCameraPosition() {
  var currentHeading = viewer.camera.heading;
  // 添加延时动画效果
  setTimeout(function () {
    viewer.camera.flyTo({
      destination: viewer.camera.position,
      orientation: {
        // heading: currentHeading,
        // pitch: Cesium.Math.toRadians(-90),
        // roll: Cesium.Math.toRadians(0)
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-90),
        roll: Cesium.Math.toRadians(0)
      },
      duration: 2.0
    });
  }, 200);
}

//放大缩小
var zoomInButton = document.getElementById('zoomIn');
var zoomOutButton = document.getElementById('zoomOut');

var zoomSpeed = 0.1; // 调整放大/缩小速度
var minimumZoomDistance = 25; // 最小高度
var maximumZoomDistance = 22000000; // 最大高度

function zoomIn() {
  var currentHeight = viewer.camera.positionCartographic.height;
  if (currentHeight / zoomSpeed > minimumZoomDistance) {
    viewer.camera.zoomIn(currentHeight * zoomSpeed);
  }
}

function zoomOut() {
  var currentHeight = viewer.camera.positionCartographic.height;
  if (currentHeight * zoomSpeed < maximumZoomDistance) {
    viewer.camera.zoomOut(currentHeight * zoomSpeed);
  }
}

zoomInButton.addEventListener('click', function() {
  zoomIn(); // 单击时触发放大
});

zoomOutButton.addEventListener('click', function() {
  zoomOut(); // 单击时触发缩小
});

// 点击地图事件
viewer.canvas.addEventListener('click', function(e) {
    // 获取鼠标点击的屏幕坐标
    var mousePosition = new Cesium.Cartesian2(e.clientX, e.clientY);
    
    // 将屏幕坐标转换为地理坐标
    var ellipsoid = viewer.scene.globe.ellipsoid;
    var cartesian = viewer.camera.pickEllipsoid(mousePosition, ellipsoid);
    if (cartesian) {
        var cartographic = ellipsoid.cartesianToCartographic(cartesian);
        
        // 将弧度转换为度数
        var longitude = Cesium.Math.toDegrees(cartographic.longitude);
        var latitude = Cesium.Math.toDegrees(cartographic.latitude);
        
        console.log('经度：' + longitude.toFixed(8) + '，纬度：' + latitude.toFixed(8));
    }
}, false);