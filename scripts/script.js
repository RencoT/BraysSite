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

      var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
});
