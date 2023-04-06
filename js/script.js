$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

$(document).ready(function() {
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });
   $(document).ready(function() {
    $("#screenshot-carousel").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      slideSpeed: 300,
    });
  });
   $(document).ready(function() {
    $("#about-carousel").owlCarousel({
      autoPlay: 6000,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
    });
  });
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });   
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });
  new WOW({ mobile: false }).init();
});