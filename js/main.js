$(function(){
$('.licenses__slider').slick({
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive:[
        {
            breakpoint:769,
            settings:{
                slidesToShow: 1,
                autoplay:true,
                pauseOnHover:true,
            }
        }
    ]
});
if($(document).width() < 769){
    $('.team__block').slick({
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToShow: 1,
                    autoplay:true,
                    pauseOnHover:true,
                    arrows:false,
                }
            }
        ]
    });
};




});