
$('#').owlCarousel({
    margin:30,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            margin:15
        },
        480:{
            items:2,
            margin:15
        },
        991:{
            items:3,
            margin:15
        },
        1450:{
            items:4
        }
    }
})



/*

$(window).scroll(function(){
    if($(document).scrollTop() > 60) {
        $("header").addClass("header-chng");
    }
    else{
        $("header").removeClass("header-chng");
    }
})*/


