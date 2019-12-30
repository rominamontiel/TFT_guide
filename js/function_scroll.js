// var banner = document.getElementById('banner-container');
// var contScroll = document.getElementById('container-gral');

// window.onscroll = function(){ bannerScroll() };

// function bannerScroll(){
//     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
//         contScroll.classList.add('container-gral-scroll');
//         banner.classList.add('banner-scroll');   
//         banner.style.height = '5rem';
        
//     } else{
//         banner.classList.add('banner-scroll2');
//         banner.classList.remove('banner-scroll'); 
//         contScroll.classList.remove('container-gral-scroll');
//         banner.style.height = '45.83vw';
//     }
// };

var menuBar = document.getElementById('content-top');
window.onscroll = function(){ menuFixed() };

function menuFixed(){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        menuBar.classList.add('content-top-scroll');
    }
    else{
        menuBar.classList.remove('content-top-scroll');
    }
}