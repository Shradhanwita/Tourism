let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// var swiper = new Swiper(".home-slider", {
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    
    spaceBetween: 20,
    // autoHeight:true,
    grabCursor: true,
    breakpoints:{
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    },
});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
    for (var i = currentItem; i < currentItem+3 ; i++) {
        boxes[i].style.display = 'inline-block';
    };
    currentItem += 3;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
    }
}


// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

// $(document).ready(function(){
//     $(".b").click(function(){
//         $(this).toggleClass("b");
//         $(this).toggleClass("b-selected");
//      });
//     });
    
//     var elem = document.querySelector('.carousel');
//     var flkty = new Flickity( elem, {
//       // options
//       cellalign: 'right',
//       pageDots: false,
//       groupCells: '20%',
//       selectedAttraction: 0.03,
//       friction: 0.15
//     });
//     var flkty = new Flickity( '.carousel', {
//       // options
//     });