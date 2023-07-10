$(document).ready(function(){

// 전체 메뉴

    let menuState = false
    // 변수는 바깥에 저장, 안그럼 함수 안에서 계속 false로 저장됨

// 1. 메뉴 버튼 클릭 후, 메뉴창 오픈
$(".btnMenu").click(function(e){

     e.preventDefault()
//  리턴되어 저장되는 함수를 막아줌

    if(menuState==false){
        // 메뉴가 현재 닫혀있는 상태 ->여는 기능
        $(".btnMenu").addClass("close")
        $("nav").addClass("on")
        $(".logo>a").addClass("on")
        $(".topicon>a").addClass("on")
        menuState = true
    }else{
        // 메뉴가 현재 열려 있는 상태 -> 닫는 기능
        $(".btnMenu").removeClass("close")
        $("nav").removeClass("on")
        $(".logo>a").removeClass("on")
        $(".topicon>a").removeClass("on")
        menuState = false
    }   

    return false
   
});


// 2.1뎁스 클릭 -> 2뎁스 오픈 & close // => 열고 닫는 메뉴 완성
$(".gnb>li").click(function(e){
    e.preventDefault()

if($(this).hasClass("on")==true){
    $(this).css("height","50px")
    $(this).removeClass("on")
}else{
    $(this).css("height","50px")
    $(this).removeClass("on")
    let gnb2dep = $(this).children("ul").children().length
    $(this).css("height",(gnb2dep+1)*50+"px")
    $(this).addClass("on")
}

// 2뎁스를 클릭했을 때 1뎁스가 닫히지 않게 된다.
});

$(".gnb ul").click(function(){
    return false
});


// 3. lnb 메뉴 클릭 시, 작동
$(".lnb>li").click(function(e){
    //1뎁스 li를 클릭했을 때, 2뎁스 목록이 보이게 하는 기능
    e.preventDefault()
// 리스트 클릭했을 때 내가 클릭한 리스트한테 on클래스가 있다 / 없다

if($(this).hasClass("on")==true){
    $(this).css("height","50px")
    $(this).removeClass("on")
}else{
    $(this).css("height","50px")
    $(this).removeClass("on")

    let lnb2dep = $(this).children("ul").children().length
    $(this).css("height",(lnb2dep+1)*50+"px")
    $(this).addClass("on")
}

// 마지막 뎁스를 클릭했을 때, img가 따라서 내려가는 경우
if($(this).index()==2){
    // index()는 뎁스의 순서를 선택할 때
    if($(this).hasClass("on")==true){
        $(".menuImg").addClass("hidden")
    }else{
        $(".menuImg").removeClass("hidden")
    }
    
}
// => 열고 닫는 메뉴 완성


});
$(".lnb ul").click(function(){
    return false
});




// footer 메뉴 

$(".fmMid>ul>li").click(function(e){
    //1뎁스 li를 클릭했을 때, 2뎁스 목록이 보이게 하는 기능

    e.preventDefault()
// 리스트 클릭했을 때 내가 클릭한 리스트한테 on클래스가 있다 / 없다

if($(this).hasClass("on")==true){
    $(this).css("height","50px")
    $(this).removeClass("on")
}else{
    $(this).css("height","50px")
    $(this).removeClass("on")

    let footer2dep = $(this).children("ul").children().length
    $(this).css("height",(footer2dep+1)*50+"px")
    $(this).addClass("on")
}
// => 열고 닫는 메뉴 완성


});



// 탑버튼 클릭
$(".btnTop").click(function(){
    // $("html,body").animate({scrollTop:0},500)
    // moveScroll(0,2000)
    moveScroll({
        top: 0,
        speed:800,
        
    })
    // html,body를 기준으로 scrollTop을 '0'으로 설정해주면 맨 위로 올라간다
})
function moveScroll(option){
    $("html,body").stop().animate({scrollTop:option.top},option.speed)
}


// 메뉴 링크이동

let link1 = "sub1.html"

$(".gnb_submenu").click(function hrefLink(){
    location.href = link1;
})


let link2 = "sub2.html"

$(".lnb_submenu>li:nth-of-type(1)").click(function hrefLink(){
    location.href = link2;
})

let link3 = "sub3.html"

$(".lnb_submenu>li:nth-of-type(2)").click(function hrefLink(){
    location.href = link3;
})





})
