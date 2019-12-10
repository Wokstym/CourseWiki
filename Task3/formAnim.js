$(document).ready(function() {
  $('#new img').click(function() {
    var $lefty = $('#new');
    $lefty.animate({
      left: parseInt($lefty.css('left'), 10) == 0 ? -$lefty.outerWidth() + 80 : 0
    });
  });
});
