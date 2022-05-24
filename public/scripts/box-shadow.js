$(document).ready(function() {
 

  let icons = document.querySelectorAll("i");
  
  $(icons).hover(function() {
      $(this).css("color", "black")
  }, function() {
      $(this).css("color", "#545149")
  });


});
