'use strict';

console.log('test');


$(document).ready(function() {
    $('.review-slider').slick({
        autoplay: true,
        nextArrow: '.arrow-right',
        prevArrow: '.arrow-left'
    });
  });
  $(window).on('load', function () {
    var preloader = $('.loader');
    $(preloader).delay(300).fadeOut('slow');
    $('body').addClass('loaded');
  });