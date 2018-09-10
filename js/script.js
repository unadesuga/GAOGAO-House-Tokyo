$(function() {

  /* Sticky nav-------------------------------------------------*/

  $('.js-about-us').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });

  /* NAV Scroll -------------------------------------------------*/
  $(function() {
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
     });


/*MOBILE NAV  -------------------------------------------------*/
$('.js-nav-icon').click(function() {
    var nav = $('.js-main-nav');
    nav.slideToggle(200);
});

// MOBILE NAV dissapear   ウィンドウ幅を767px以下に機能する設定
if (window.matchMedia( '(max-width: 767px)' ).matches) {
$('.main-nav').click(function() {
  $('.main-nav').slideToggle();
});
} else {
  };

// JP & EN .ver
// if (window.matchMedia( '(max-width: 767px)' ).matches) {
// $('.alternative').click(function() {
//   $('.alternative').slideToggle();
// });
// } else {
//   };

});
