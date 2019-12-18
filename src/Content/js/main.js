/*global $,document*/
$(document).ready(function () {
  'use strict';
  /*Loading*/
  $(window).on('load', function () {
    $("body").css("overflow", "auto");
    $(".loader").fadeOut(5000);
  });
  /*End Loading*/
  $('.input-control').on('blur', function () {
    if ($(this).val() !== "") {
      $(this).parent().addClass('focus');
    } else {
      $(this).parent().removeClass('focus');
    }
  });
  $('.show').click(function () {
    $('.show i').toggleClass('fa-eye-slash');
    $('.show i').toggleClass('fa-eye');
    if ($('#Password').attr('type') === 'password') {
      $('#Password').attr('type', 'text');
    } else {
      $('#Password').attr('type', 'password');
    }
  });
  $('.ForgetPassword').on('click', function () {
    $('.log').hide();
    $('.forget').fadeIn();
  });
  $('.creatAccount').on('click', function () {
    $('.log').hide();
    $('.acount').fadeIn();
  });
  $('.toggle-aside').on('click', function () {
    $('aside').toggleClass('more-width');
    $('.content-box').toggleClass('padding-content-box');
    $('.toggle-aside i').toggleClass('fa-toggle-on');
    $('.toggle-aside i').toggleClass('fa-toggle-off');
  });
  $('.showToggle-aside').on('click', function () {
    $('aside').toggleClass('show-aside');
    $('.showToggle-aside i').toggleClass('fa-bars');
    $('.showToggle-aside i').toggleClass('fa-stream');
  });
  $('[data-toggle="tooltip"]').tooltip();
});