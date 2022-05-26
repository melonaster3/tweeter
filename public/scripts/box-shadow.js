$(document).ready(function() {
  let icons = document.querySelectorAll("i");
  
  $(icons).hover(function() {
      $(this).css("color", "#545149")
  }, function() {
      $(this).css("color", "#BC6C25")
  });

  let boxShadow = document.getElementsByClassName("tweet-box");

  $(boxShadow).hover(function() {
    this.css('box-shadow', "10px 10px 5px lightblue");
  })



});
