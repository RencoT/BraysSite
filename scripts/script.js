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



window.onload=function(){
    var actionBtn = document.getElementById("action-btn");
    actionBtn.addEventListener("click", pausePlay);
    var actionBtn2 = document.getElementById("action-btn2");
    actionBtn2.addEventListener("click", muteUnmute);
    var video = document.getElementById('myVideo');
    video.play()
} 


function pausePlay() {
  var actionBtn = document.getElementById("action-btn");
  var video = document.getElementById("myVideo");
  if (video.paused) {
    video.play();
    actionBtn.src = "img/pause.png";
  } else {
    video.pause();
    actionBtn.src = "img/play.png";
  }
}

function muteUnmute() {
  var actionBtn2 = document.getElementById("action-btn2");
  var video = document.getElementById("myVideo");

  if (video.muted == true) {
    video.muted = false;
    actionBtn2.src = "img/unmute.png";
  } else {
    video.muted = true;
    actionBtn2.src = "img/mute.png";
  }
}