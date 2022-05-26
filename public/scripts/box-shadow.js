$(document).ready(function() {
  let icons = document.querySelectorAll("i");
  
  $(icons).hover(function() {
      $(this).css("color", "#545149")
  }, function() {
      $(this).css("color", "#BC6C25")
  });

});
