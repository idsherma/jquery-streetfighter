$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  $('.ryu').mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').hide();
    $('.ryu-still').show();
  });
  $('.ryu').mousedown(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
        {'left': '1200px'},
        500,
        function() {
          $(this).hide();
          $(this).css('left', '650px');
        });
  })
  $('.ryu').mouseup(function() {
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').hide();
    $('.ryu-still').show();
  });
  $('.ryu').keydown(function() {
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.ryu-still').hide();
    $('.ryu-cool').show();
  });
  $('.ryu').keyup(function() {
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').show();
  });
});