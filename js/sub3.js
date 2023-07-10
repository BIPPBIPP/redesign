$(document).ready(function(){

    // subpage 3
    
    // pc
    $(".tabMenu1.pc>dt").click(function(e){
        e.preventDefault()
        // 1.dt태그들이 on클래스가 지워져야 함
        // 2.내가 클릭한 dt태그한테만 on클래스가 추가
        $(".tabMenu1>dt").removeClass("on")
        $(this).addClass("on")
        // this는 내가 클릭한 dt태그를 지칭.
    });


// mo
$(".tabMenu1.mo>dt").click(function(){
    if($(this).hasClass("on")==true){
        $(this).css("height","40px")
        $(this).removeClass("on")
    }else{
        $(this).css("height","40px")
        $(this).removeClass("on")

        let tab2dep = $(this).children("dt").children().length
        $(this).css("height",(tab2dep+1)*40+"px")
        $(this).addClass("on")

    
    }
})



    
})