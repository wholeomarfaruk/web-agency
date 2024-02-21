$(window).on('scroll', function(){
    if($(window).scrollTop()){

        $('#header-section .sticky-bar').addClass('sticky-top')
        $('#header-section .sticky-bar .sticky-wrapper').addClass('wrapper')

        
    }else{
        $('#header-section .sticky-bar').removeClass('sticky-top')
        $('#header-section .sticky-bar').removeClass('wrapper')
        $('#header-section .sticky-bar .sticky-wrapper').removeClass('wrapper')

    }
});



$(document).ready(function(){
    $(".menu-bar-btn").click(function(){
      $("#header-section .navbar .menu").toggleClass('slide-down');
      var boolean = $("#header-section .navbar .menu").hasClass('slide-down');
      if (boolean) {
        $(".menu-bar-btn img").attr('src','img/menu-close.png')
      } else {
        $(".menu-bar-btn img").attr('src','img/menu-bar.png')
      }
    });
  });