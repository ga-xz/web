var tc = document.querySelector('#tuchen');
var tool = document.querySelector('.tool');
var t1 = document.querySelector('.t1');
var i = 0;
tc.addEventListener('click', function() {
  
      i++;
    if (i % 2 == 1) {
        t1.src = 'img/Ti.svg';
        tool.style.transform = 'translateX(150px)';

    } else {
        t1.src = 'img/T1.svg';
        tool.style.transform = 'translateX(-15px)';
        
    }
});
var im = document.getElementById('fh');
im.addEventListener('click', () => {
    var tool = document.querySelector('.tool');

    tool.style.transform = 'translateX(-15px)';
    setTimeout(() => {
     t1.src = 'img/T1.svg';
    }, 300);
    i--;
});

// 支持弹窗
var zhichi = document.getElementById('zhichi');
var boxv1 = document.querySelector('.boxv1');
var r = 0;
zhichi.addEventListener('click', function(){
    r++;
    if (r % 2 == 1) {
    zhichi.style.backgroundColor = '#057cdd';
   $(boxv1).fadeIn(260);
    }else{
        zhichi.style.backgroundColor = '#ffffff';
        $(boxv1).fadeOut(260);
    }
});

var guanbi = document.getElementById("guanbi");
guanbi.addEventListener("click", function(){
    zhichi.style.backgroundColor = '#ffffff';
    $(boxv1).fadeOut(260);
r--;
});

// 微信支付宝收款码展示
var wxjm = document.getElementById("wxjm");
var zfbjm = document.getElementById("zfbjm");
// 收款码
var wx = document.querySelector(".wx");
var zfb = document.querySelector(".zfb");
// 微信按钮
wxjm.addEventListener("click", function(){
   $(wx).fadeIn(160);
    $(zfb).fadeOut(160);
});
// 支付宝按钮
zfbjm.addEventListener("click", function(){
    $(zfb).fadeIn(160);
    $(wx).fadeOut(160);
});