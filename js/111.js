// 创建Cesium Viewer
var viewer = new Cesium.Viewer('cesiumContainer',{
  //添加地形
  terrain: Cesium.Terrain.fromWorldTerrain({
     //requestWaterMask: true,//太阳光影(夜景)
     //requestVertexNormals: true//水波
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
  shouldAnimate: true, 
  infoBox:false,
});
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
//限制地球放大范围
viewer.scene.screenSpaceCameraController.minimumZoomDistance = 25;
//限制地球缩小范围
viewer.scene.screenSpaceCameraController.maximumZoomDistance = 22000000;
// 禁用3D
viewer.scene.screenSpaceCameraController.enableTilt = false;
//禁用放大和缩小
//viewer.scene.screenSpaceCameraController.enableZoom = false;
//显示白天太阳光影      
//viewer.scene.globe.enableLighting = true;

//大气层
viewer.scene.skyAtmosphere.show = true;

var gas = document.getElementById('gas');
gas.addEventListener('change', function(){
   if (gas.checked){
     viewer.scene.skyAtmosphere.show = false;
   }else{
     viewer.scene.skyAtmosphere.show = true;
   }
  
});
    

// 自定义一个图层
var stare1 = new Cesium.UrlTemplateImageryProvider({
   // url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s,%40781&x={x}&y={y}&z={z}&src=app&scale=2&from=app'
  //url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s,m&gl=&x={x}&y={y}&z={z}&src=app&scale=8&from=app'
  url: 'https://tiles1.geovisearth.com/base/v1/img/{z}/{x}/{y}?format=webp&tmsIds=w&token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f'
});
var stareq = viewer.imageryLayers.addImageryProvider(stare1);
  stareq.show = true;
//mapbox图层
  /*var map = new Cesium.UrlTemplateImageryProvider({
         url: 'http://ggmap01.bosim.top:8880/mapbox/{x}/{y}/{z}/'
      });*/

// 创建Mapbox卫星图瓦片服务提供程序
var map = new Cesium.UrlTemplateImageryProvider({
  url: 'http://mb.wuyeguo.net/earthdq/mb/{x}/{y}/{z}'
});
 var map1 =  viewer.imageryLayers.addImageryProvider(map);
map1.show = false;
 //Google卫星图
//var googlee = new Cesium.TileMapServiceImageryProvider({
        // url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s,%40781&x={x}&y={y}&z={z}&src=app&scale=2&from=app'
      //});
   //var goog = viewer.imageryLayers.addImageryProvider(googlee);
  //goog.show = false;
//arcgis图层
    var arc = new Cesium.UrlTemplateImageryProvider({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}?blankTile=false'
      });
  var arcgis1 =  viewer.imageryLayers.addImageryProvider(arc);
  arcgis1.show = false;


/*var title = new Cesium.UrlTemplateImageryProvider({
  url: 'https://tiles1.geovisearth.com/base/v1/cia/{z}/{x}/{y}?format=png&tmsIds=w&token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f'
});*/

//Google路网
var googleroad = new Cesium.UrlTemplateImageryProvider({
    url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=h&x={x}&y={y}&z={z}&scale=2&from=app',
    
});

//第一个按钮
star.addEventListener('click', function(){
   stareq.show = true;
   map1.show = false;
   //goog.show = false;
   arcgis1.show = false;
});

//显示区域
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(106.8599, 25.6488, 10000000)
});

// //自定义函数名
var googleroad = viewer.imageryLayers.addImageryProvider(googleroad);
//初始状况下路网不可见
googleroad.show = false;
//复选框控制
var che = document.getElementById('checkbox');
che.addEventListener('change', function() {
   googleroad.show = che.checked;
});

//图层切换

//google.addEventListener('click', function(){
  //stareq.show = false;
   //map1.show = false;
  // goog.show = true;
  // arcgis1.show = false;
//});

arcgis.addEventListener('click', function(){
   stareq.show = false;
   map1.show = false;
   //goog.show = false;
   arcgis1.show = true;

});

/*bing.addEventListener('click', function(){

});*/

mapbox.addEventListener('click', function(){
   stareq.show = false;
   map1.show = true;
   //goog.show = false;
   arcgis1.show = false;
});

/*long.addEventListener('click', function(){
   
});*/

//指南针
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
            heading: Cesium.Math.toRadians(0), // 旋转回北方
            pitch: viewer.camera.pitch,
            roll: viewer.camera.roll
          },
        duration: 1.5
      });
    }, 200);
}


//放大缩小
var zoomInButton = document.getElementById('zoomIn');
var zoomOutButton = document.getElementById('zoomOut');

var zoomSpeed = 0.2; // 调整放大/缩小速度
var minimumZoomDistance = 1000; // 最小高度
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




