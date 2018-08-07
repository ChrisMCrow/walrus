$(document).ready(function() {
  $(".clickable").click(function() {
    $("#img-hidden").slideToggle();
    $("#img-showing").slideToggle();
  });

  $("#img-hidden p").click(function() {
    $("#img-hidden").toggle();
  });

  $("#img-showing p").click(function() {
    $("#img-showing").toggle();
  });
});
