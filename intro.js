// lấy các phần tử
var boxFlower = document.querySelector('.flower-img:nth-child(1)');
var boxFlower2 = document.querySelector('.flower-img:nth-child(2)');
var boxFlower3 = document.querySelector('.flower-img:nth-child(3)');
var boxFlower4 = document.querySelector('.flower-img:nth-child(4)');
var boxFlower5 = document.querySelector('.flower-img:nth-child(5)');
var boxFlower6 = document.querySelector('.flower-img:nth-child(6)');
var circleActive = document.querySelector('.circle');
var boxsliderimg1 = document.querySelector('.box-slider_img1');
var catActive = document.querySelector('.cat');
var numberActive = document.querySelector('.box-number');
var buttonDisplay = document.querySelector('.button');
var rhombus1 = document.querySelector('.rhombus:nth-child(1)');
var rhombus2 = document.querySelector('.rhombus:nth-child(2)');
var rhombusImg = document.querySelector('.rhombus-img');
var mailActive = document.querySelector('.mail');

var mySong = document.getElementById("song");

// ===== HÀM CHẠY ANIMATION =====
function startAnimation(){
    boxFlower.classList.add("active");
    boxFlower2.classList.add("active");
    boxFlower3.classList.add("active");
    boxFlower4.classList.add("active");
    boxFlower5.classList.add("active");
    boxFlower6.classList.add("active");
    circleActive.classList.add("active");
    boxsliderimg1.classList.add("active");
    catActive.classList.add("active");
    numberActive.classList.add("active");
    buttonDisplay.classList.add("active");
    rhombus1.classList.add("active");
    rhombus2.classList.add("active");
    rhombusImg.classList.add("active");
    mailActive.classList.add("active");

    if(mySong && mySong.paused){
        mySong.play();
    }
}

// ===== NÚT TRONG ANIMATION (giữ nguyên chức năng thiệp) =====
var buttonActive = document.querySelector('.button button');
var mail = document.querySelector(".mail");
var slider3 = document.querySelector(".slider3");
var closeSlider3 = document.querySelector(".fa-xmark");

// khi bấm nút trong animation
if(buttonActive){
    buttonActive.onclick = function(){
        slider3.classList.add("active");
    }
}

if(closeSlider3){
    closeSlider3.addEventListener('click', function(){
        slider3.classList.remove('active');
    });
}
