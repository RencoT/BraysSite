$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    })

    $('.carousel').carousel({
        interval: false
    })

    function scrollNav() {
        $('.navbar a').click(function(e){  
            e.preventDefault()
          //Animate
          $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - $('.navbar').height()
          }, 400);
          //console.log('test');
          $(".navbar-toggler").click();
          return false;
        });
        $('.scrollTop a').scrollTop();
        
      }
      scrollNav();
});
