$(document).ready(function(){

    // mainpage slide
    let MainSlide =  new Swiper('.station1',{
        loop:true,
        direction:'horizontal',
        pagination: {
            el:".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        autoplay: {
            delay: 10000,
        },
        speed:2000,

    });

  

    // sub1-2 page

    let swiper5 = new Swiper(".station5",{
        centeredSlides: true,
        pagination: {
            el:".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        breakpoints:{
            280:{
                slidesPerView:1,
                spaceBetween:30,
            },
            768:{
                slidesPerView:3,
                spaceBetween:10,
            }
        }
      
    });
    let swiper6 = new Swiper(".station6",{
        centeredSlides: true,
        pagination: {
            el:".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        breakpoints:{
            280:{
                slidesPerView:1,
                spaceBetween:0,
            },
            768:{
                slidesPerView:5,
                spaceBetween:5,
            }
        }
      
    });
    


 




})




        