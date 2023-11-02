
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
  
    setTimeout(function(){
        $('.Dodo').fadeIn(160);
        //$(tiok).fadeIn(160);
        
      },200);
});
$('#m3h3').click(function(){
    setTimeout(function(){
      $('.Dodo').fadeOut(200);
    });
});

//弹窗确定
var ti = document.querySelector(".tishi");
var tiok = document.querySelector(".tiook");
var ok = document.getElementById("ok1");
ok.addEventListener("click", function(){
  var co = document.querySelector('.cops1');
    setTimeout(function(){
        $(ti).fadeOut(160); 
        $(tiok).fadeOut(160);
        pen.style.filter = "brightness(0) invert(100%)";
        
        kxW.style.border = 'none';
        //wi.src = "img/Wi.svg";
        //m3.src = "img/M3.svg";
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
       // 获取用户地理位置
/*navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // 创建用户位置的实体
    var entity = viewer.entities.add({
        name: 'User Location',
        position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
        point: {
            pixelSize: 10,
            color: Cesium.Color.RED
        }
    });
  });

    // 将相机定位到用户位置
    viewer.zoomTo(entity);*/
    
    navigator.geolocation.getCurrentPosition(
    function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
            point: {
                pixelSize: 10,
                color: Cesium.Color.RED
            },
            label: {
                text: 'My Location',
                font: '14px sans-serif',
                fillColor: Cesium.Color.RED,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                outlineWidth: 2,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                pixelOffset: new Cesium.Cartesian2(0, -9)
            }
        });
        
        // 将地图视图定位到用户位置
        viewer.zoomTo(viewer.entities);
    },
    function(error) {
        // 处理获取位置信息失败的情况
        console.error(error);
    }
);
  
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

//十字中心
var select = document.getElementById('select');
select.addEventListener('change',function(){
  var z6 = document.getElementById('Z6');
  setTimeout(function(){
  if (select.checked){
    z6.style.display = 'none';
  }else{
     z6.style.display = 'block';
   }
  },300);
  i--;
});

//罗盘
var cps = document.getElementById('cops');
  var co = document.querySelector('.cops1');
 var com = document.getElementById('comps');
var i = 0;
cps.addEventListener('click', function(){
 i++;
 if (i % 2 == 1){

        setTimeout(function(){
              co.src = 'img/ca.svg';
          com.style.transform = 'translateX(150px)';
        }, 600);
   } else {
     
     setTimeout(function(){
           co.src = 'img/coA.svg';
          com.style.transform = 'translateX(-115px)';
        }, 200);
   }
});
var coma = document.querySelector('#coma');
coma.addEventListener('click', function(){
       setTimeout(function(){
           co.src = 'img/coA.svg';
          com.style.transform = 'translateX(-115px)';
        }, 200);
    i--;
});

//2D/3D
var wed = document.getElementById('wed');
var wd = document.querySelector('.wd');
wed.addEventListener('click', function(){
  i++;
  if(i % 2 == 1){
    wd.src = 'img/2d.svg';
    viewer.scene.screenSpaceCameraController.enableTilt = true;
  } else {
    wd.src = 'img/3d.svg';
    viewer.scene.screenSpaceCameraController.enableTilt = false;
  }
});

//罗盘图片
var  kxW = document.getElementById('kxW');
kxW.addEventListener('click',function(){
    kxW.style.border = '1px solid #00B7FF';
  setTimeout(function(){
     $(ti).fadeIn(230);
    $(tiok).fadeIn(230);
  }, 200);
});
