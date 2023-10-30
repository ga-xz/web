/*var a = document.querySelector('#a');
var b = document.querySelector('.duo');
var c = document.querySelector('.duo1');
var d = document.querySelector('.dq');
// 多球显示
var ee = document.querySelector('.ifdq');
var t = 0;
a.addEventListener('click', function() {
    t++;
    if (t % 2==1){
    b.style.setProperty("--border-color", "#057cdd");
    b.style.setProperty("--backgroud-color", "#057cdd");
    c.style.setProperty("--border-color", "#057cdd");
    c.style.setProperty("--backgroud-color", "#057cdd");

    ee.style.transform = 'translateX(200vh)';
    }else{
        b.style.setProperty("--border-color", "#ffffff");
        b.style.setProperty("--backgroud-color", "#ffffff");
        c.style.setProperty("--border-color", "#ffffff");
        c.style.setProperty("--backgroud-color", "#ffffff");

        ee.style.transform = 'translateX(-200vh)';
    }
    

});

var abou = document.getElementById('abou');
abou.addEventListener('click', function(){
    ee.style.transform = 'translateX(-200vh)';
    setTimeout(function(){
        b.style.setProperty("--border-color", "#ffffff");
        b.style.setProperty("--backgroud-color", "#ffffff");
        c.style.setProperty("--border-color", "#ffffff");
        c.style.setProperty("--backgroud-color", "#ffffff");
    },200);

   t--;
});*/

var b1 = document.getElementById("zuoze");
var wi = document.querySelector(".wi");
b1.addEventListener('click', function(){
    var ti = document.querySelector(".tishi");
    wi.src = "img/Wi1.svg";
    setTimeout(function(){
        $(ti).fadeIn(160);
        $(tiok).fadeIn(160);
        
      },200);
});

//弹窗确定
var ti = document.querySelector(".tishi");
var tiok = document.querySelector(".tiook");
var ok = document.getElementById("ok1");
ok.addEventListener("click", function(){
    setTimeout(function(){
        $(ti).fadeOut(160); 
        $(tiok).fadeOut(160);
        pen.style.filter = "brightness(0) invert(100%)";
        wi.src = "img/Wi.svg";
        m3.src = "img/M3.svg";
      },200);
});

var pean = document.getElementById("pegman"); 
var pen = document.getElementById("svgxr");
pean.addEventListener("click", function(){
    pen.style.filter = "none";
    var ti = document.querySelector(".tishi");
    setTimeout(function(){
        $(ti).fadeIn(160);
        $(tiok).fadeIn(160);
      },200);
      
});

var ban = document.getElementById("banben");
var babe = document.querySelector('.babe');
var a = 0;
ban.addEventListener("click", function(){
    a++;
    setTimeout(function(){
        if(a % 2 == 1){
      $(babe).fadeIn(160);
        $(baben).fadeIn(160);
        }else{
         $(babe).fadeOut(160); 
        $(baben).fadeOut(160);
        }
      },200);
});
var baben = document.getElementById('babe2');
baben.addEventListener('click',function(){
     setTimeout(function(){
        $(babe).fadeOut(160); 
        $(baben).fadeOut(160);
     },200)
     a--;
     w--;
});

//定位
var m3 = document.querySelector(".m3");
var m3gps = document.getElementById("m3gps");
var w = 0;
m3gps.addEventListener("click", function(){
    m3.src = "img/S1.svg";
    
   /*setTimeout(function(){
        ti.style.display = "block";
        tiok.style.display = "block";
      },200);*/
      w++;
  if(w % 2 == 1){
       // 获取当前位置
navigator.geolocation.getCurrentPosition(function(position) {
  var longitude = position.coords.longitude;
  var latitude = position.coords.latitude;
  
  // 设置摄像机位置
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, 1500)
  });
});
// 创建billboard并将其添加到实体上

entity.billboard = new Cesium.BillboardGraphics({

    
  });
// 将相机定位到实体位置
viewer.zoomTo(entity);
// 设置视图位置
viewer.zoomTo(Cesium.Rectangle.fromDegrees(west, south, east, north,));
} else {
  m3.src = 'img/M3.svg';
  // 关闭定位
function disableLocation() {
  // 获取相机对象
  var camera = viewer.camera;

  // 将相机飞行回初始位置，并在 1 秒内完成动画
  //camera.flyHome(1);
}

// 调用关闭定位函数
disableLocation();
}
      
});