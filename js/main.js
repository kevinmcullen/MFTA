jQuery(document).ready(function($) {
    
  
  //Slidehow
  var scripts = [
	'http://stephband.info/jquery.event.move/js/jquery.event.move.js',
	'http://stephband.info/jquery.event.swipe/js/jquery.event.swipe.js'
];

$.getScript(scripts[0]);

//  Once our script is loaded, we can initSwipe to add swipe support
$.getScript(scripts[1], function() {
	$('.slideshow').unslider('initSwipe');
});
  
  
  //Scroll animation
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

  
var screenWidth = $(window).width();
  // if window width is smaller than 800 remove the autoplay attribute
  // from the video
  if (screenWidth < 800){
        $('video').removeAttr('autoplay');
  } else {
    $('video').attr('autoplay');
  }

});