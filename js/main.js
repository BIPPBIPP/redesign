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
            delay: 8000,
        },
        speed:2000,

    });

    
})