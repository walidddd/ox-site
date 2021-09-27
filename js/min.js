var navz = document.getElementById("nav0");
var navone = document.getElementById("nav1");
var navtwo = document.getElementById("nav2");
var navthre = document.getElementById("nav3");
var up = document.getElementById("up");
window.onscroll = function() {
    if(window.pageYOffset >= 500){
        $(".navbar").addClass("navbar-animate")
    }else{
        $(".navbar").removeClass("navbar-animate")
    }
    if(window.pageYOffset >= 0){
        $(".nav-link").removeClass('active');
        $(navz).addClass("active")
    }
    if(window.pageYOffset >= $(".Features").offset().top - 200){
        $(".nav-link").removeClass('active');
        $(navone).addClass("active")
    }
    if(window.pageYOffset >= $(".send ").offset().top - 400){
        $(".nav-link").removeClass('active');
        $(navtwo).addClass("active")
    }
    if(window.pageYOffset >= 500){
        $(up).css("display", 'flex')
    }else{
        $(up).css("display", 'none')
    }
}
/**navbar click to section */
up.onclick = function() {
    $("html, body").animate({
        scrollTop: 0
    }, '500');
}
$("#nav0, #nav0x").on('click', function() {
    exit();
    $(".nav-link").removeClass('active');
    $(this).addClass("active")
    $("html, body").animate({
        scrollTop: 0
    }, '500');
    
})
$("#nav1, #nav1x").on('click', function() {
    exit();
    $(".nav-link").removeClass('active');
    $(this).addClass("active")
    $("html, body").animate({
        scrollTop: $(".Features").offset().top -100
    }, '500');
    
})
$("#nav2, #nav2x").on('click', function() {
    exit();
    $(".nav-link").removeClass('active');
    $(this).addClass("active")
    $("html, body").animate({
        scrollTop: $(".send ").offset().top -100
    }, '500');
    
})
$("#nav3, #nav3x").on('click', function() {
    exit();
    $("html, body").animate({
        scrollTop: $(".send ").offset().top -100
    }, '500');
})

$().ready(function($){
    $('.search-file-btn').children("input").bind('change', function() {
    var fileName = '';
    fileName = $(this).val().split("\\").slice(-1)[0];
    $(this).parent().next("span").html(fileName);
  })
});

$("#x").on('click', function() {
    document.getElementById('click').click()
})
function fadename(){
    $(".name-file").fadeIn(100);
    $(".login-scren .container .selected-files .input1 .rest").fadeIn(100);
    $(".login-scren .container .selected-files .input1").css('height', '80px')
}
/*2 select */
$().ready(function($){
    $('.search-file-btn2').children("input").bind('change', function() {
    var fileName = '';
    fileName = $(this).val().split("\\").slice(-1)[0];
    $(this).parent().next("span").html(fileName);
  })
});
$("#x2").on('click', function() {
    document.getElementById('click2').click()
})
function fadename2(){
    $(".name-file2").fadeIn(100);
    $(".login-scren .container .selected-files .input2 .rest").fadeIn(100);
    $(".login-scren .container .selected-files .input2").css('height', '80px')
}
/*3select */
$().ready(function($){
    $('.search-file-btn3').children("input").bind('change', function() {
    var fileName = '';
    fileName = $(this).val().split("\\").slice(-1)[0];
    $(this).parent().next("span").html(fileName);
  })
});
$("#x3").on('click', function() {
    document.getElementById('click3').click()
})
function fadename3(){
    $(".name-file3").fadeIn(100);
    $(".login-scren .container .selected-files .input3 .rest").fadeIn(100);
    $(".login-scren .container .selected-files .input3").css('height', '80px')
}
/************function show menu login*********** */
function showMenw(){
    $('.login-new').fadeIn(100);
    $(".login-scren").fadeIn(-100)
    $(".login-new .login-scren").animate({
        left:0
    }, 400)
    $('.login-new  .lowrs-two').fadeOut(-100);
    $('.login-new  .lowrs-one').fadeOut(-100);
    $('.login-new form').fadeIn(200);
    $(".login-scren").removeClass("width-lower");
    $(".login-scren").fadeIn(-100)
}
function hideMenw(){
    $(".login-new .login-scren").animate({
        left:150
    }, 200)
    $('.login-new').fadeOut(400);
    $(".login-scren").removeClass("width-lower");
    
}
function hideMenwleft(){
    $(".login-new .login-scren").animate({
        left: -150
    }, 200)
    $('.login-new').fadeOut(400);
    $(".login-scren").removeClass("width-lower");
    
}
function showlower1(){
    $('.login-new form').fadeOut(-200);
    $('.login-new  .lowrs-two').fadeOut(-400);
    $(".login-scren").fadeIn(-100)
    $(".login-new .login-scren").animate({
        left:0
    }, 200)
    
    $('.login-new').fadeIn(-400);
    
    $('.login-new  .lowrs-one').fadeIn(400);
    $(".login-scren").addClass("width-lower");
}
function showlower2(){
    $('.login-new form').fadeOut(-200);
    $('.login-new  .lowrs-one').fadeOut(-400);
    $(".login-scren").fadeIn(-100)
    $(".login-new .login-scren").animate({
        left:0
    }, 200)
    $('.login-new').fadeIn(-400);
    $('.login-new  .lowrs-two').fadeIn(400);
    $(".login-scren").addClass("width-lower");
}

/*button click send*/
function send() {
    $(".login-new .login-scren").animate({
        left:150
    }, 200)
    $('.login-new .login-scren').fadeOut(100);
    $(".login-scren").removeClass("width-lower");
    $(".login-new .true").css('display', 'flex')
}
function sendH() {
    $('.login-new .login-scren').fadeOut(100);
    $('.login-new ').fadeOut(100);
    $(".login-new .true").css('display', 'none')
}
$(".navbar-toggler").on('click', function() {
    $(".mobile-navbar-show").fadeIn(-100);
    $(".mobile-navbar-show").css("right", '0')
})
function exit(){
    $(".mobile-navbar-show").css("right", '-400px');
    $(".mobile-navbar-show").fadeOut();
}