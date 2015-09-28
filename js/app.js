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
    playHadouken();
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
  $(document).keydown(function(keypressed){
    if (keypressed.keyCode === 88) {
      $(".ryu-ready").hide();
      $(".ryu-still").hide();
      $(".ryu-throwing").hide();
      $(".ryu-cool").show();
      $(".main").addClass('main-x');
    }
  });
  $(document).keyup(function(){
    $(".ryu-cool").hide();
    $(".ryu-ready").show();
    $(".main").removeClass('main-x');
  });
  function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
});
