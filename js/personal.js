$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<600){
            $('.header1').css('display','none');
            $('.header2').css('display','block');
        }else{
            $('.header1').css('display','block');
            $('.header2').css('display','none');
        }
    })
    $(window).resize();

    $('.m').click(function(){
        //$('.son').finish();
        $('.son').slideToggle()
    })

    $('.HH').click(function(){
        $({top:$(window).scrollTop()}).animate(
            {top:20},
            {
                duration:500,
                step:function(){
                    $(window).scrollTop(this.top)
                }
            }
        )
    });
    $('.WW').click(function(){
        $({top:$(window).scrollTop()}).animate(
            {top:650},
            {
                duration:500,
                step:function(){
                    $(window).scrollTop(this.top)
                }
            }
        )
    });
    $('.AA').click(function(){
        $({top:$(window).scrollTop()}).animate(
            {top:1400},
            {
                duration:500,
                step:function(){
                    $(window).scrollTop(this.top)
                }
            }
        )
    });
    $('.CC').click(function(){
        $({top:$(window).scrollTop()}).animate(
            {top:1600},
            {
                duration:500,
                step:function(){
                    $(window).scrollTop(this.top)
                }
            }
        )
    });
    $('.SS').click(function(){
        $({top:$(window).scrollTop()}).animate(
            {top:1300},
            {
                duration:500,
                step:function(){
                    $(window).scrollTop(this.top)
                }
            }
        )
    });

    $('.skill .one').hover(function(){
        $(this).attr("data-a","animate-rotateIn");
    },
        function(){
            $(this).removeAttr("data-a","animate-rotateIn");
        }
    );





})