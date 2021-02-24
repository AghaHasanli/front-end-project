$(function(){
    $('.parallax-window').parallax({imageSrc: "img/parallax.jpg"});
    $('.timer').countTo();
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
    new WOW().init();
 $(document).on("scroll",window,function(){
    if(!$("#navbar").hasClass("whiteing")){
        if($(window).scrollTop() > 100){
            $("#navbar").css({
             "position": "fixed",
             "background-color": "white"
            })
         }else{
             $("#navbar").css({
                 "position": "absolute",
                 "background-color": "transparent"
             })
            }
        }
    }) 
    if($(window).scrollTop() >100){
        $("#navbar").css({
            "position": "fixed",
            "background-color": "white"
        })
    };
    $(document).on("click",".card-header",function(){
        $(this).parent().siblings().find(".card-body").slideUp()
        $(this).next().slideToggle("slow")
    })
    $(document).on("click",".navbar-toggler",function(){
        if($(".navList").hasClass('d-none'))
        $(".navList").removeClass("d-none")
        else
        $(".navList").addClass("d-none")
    })
})