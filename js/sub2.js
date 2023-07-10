$(document).ready(function(){

    let headerHeight = $("header").height()
    // $(".wrap>div").click(function(){}) = $(".wrap>div").on("click",function(){})
    $(".scroll_wrap>section").on("wheel DOMMouseScroll",function(event){
        // DOMMouseScroll은 safari, firefox에서 사용하는 wheel 기능
        // console.log(event)
        let E = event.originalEvent
        let delta = 0;
        if(E.detail){
            delta = E.detail * -40
        }else{
            delta = E.wheelDelta
        }
        // chrome브라우저와 firefox의 호환성을 맞춰주기 위한 작업

        if(delta<0){
            // 마우스 휠을 내렸을 때
            
            // if($(this).next().length){}
            if($(this).next().length!=0){
                // if($(this).next().length!=0){}
                // ->console창에서 에러가 뜨는 것을 방지해줌. 다음 형제의 length가 0으로 계산되므로 해석되지 않는다.
                let posTop = $(this).next().offset().top
                $("html,body").stop().animate({scrollTop:posTop-headerHeight},1000)

            }else{
            // footer까지 내려가려면 다음 형제가 없을 때를 설정
                let posTop = $(".footerwrap").offset().top;
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
        }else{
            // 마우스 휠을 올렸을 때
            if($(this).prev().length!=0){
                let posDow = $(this).prev().offset().top;
                $("html,body").stop().animate({scrollTop:posDow-headerHeight},900)
            }
           
        }
        return false
    })

    // con3의 img 스크롤 애니메이션
    $(window).scroll(function(){

        let winst = $(window).scrollTop()   //스크롤바가 위에서 얼마큼 내려왔는지 계산
        let con3Height = $(window).height() //브라우저화면의 높이를 계산
    
        $(".mltr,.mrtl").each(function(){
            if(winst+con3Height>$(this).offset().top){
                // 선택한 각각의 h1 태그의 탑좌표(위치)보다 winst값이 크다면
                $(this).addClass("on")

            }else{
                $(this).removeClass("on")
            }
        })
    })

})