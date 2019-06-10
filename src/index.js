$(document).ready(function(){

  $('body').scrollspy({
    target: '#navbar-collapsible',
    offset: 100
  });

  /* smooth scrolling sections */
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
      
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
    }// End if
  });
  
  // Scrolling to progress bar element
  $(window).on("scroll", function() {
    var bar = $("#skills .progress-bar"), barPos,	
    windowBtm = $(window).scrollTop() + $(window).height();
    bar.each(function () {
      barPos = $(this).offset().top;
      if(barPos <= windowBtm - 50) {
        $(this).css("width", function() {
          return $(this).attr("data-width");
        });
        $(this).children(".percent").css({
          '-webkit-transform': 'scale(1)',
          '-moz-transform': 'scale(1)',
          '-ms-transform': 'scale(1)',
          '-o-transform': 'scale(1)',
          'transform': 'scale(1)'
        });
      }
    });
  });
});
