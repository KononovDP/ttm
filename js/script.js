$(document).ready(function() {

	$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    //vertical: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    centerMode: true,
  });
  $('.inner-slider').slick({
    arrows: true,
    dots: true,
    fade: true,
    infinite: true,
  });

    $('.wrapper').on('wheel', (function(e) {
      e.preventDefault();

      if (e.originalEvent.deltaY > 0) {
        $('.slider').slick('slickNext');
      } else {
        $('.slider').slick('slickPrev');
      }
    }));


});