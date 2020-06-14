$(document).ready(function () {
  $('.ham-icon').click(function (e) {
    e.preventDefault();
    $('.nav-menu').toggleClass('active')
  })
  $('.answer').hide();
  $('.question').click(function (e) {
    $(this).toggleClass('show');
    $(this).siblings('.answer').slideToggle();
    $(this).parent().siblings().find('.answer').slideUp();
    $(this).parent().siblings().find('.show').removeClass('show');
  })
});
