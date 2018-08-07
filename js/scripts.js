$(document).ready(function() {
  $(".clickable").click(function() {
    $("#img-hidden").fadeToggle();
    $("#img-showing").fadeToggle();
  });
});
