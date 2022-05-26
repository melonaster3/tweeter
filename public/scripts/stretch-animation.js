$(document).ready(function() {

  $("#toggle").hover(function() {
    $(this).animate({
      marginTop: "15px"
    }, 100);
  }, function() {
    $(this).animate({
      marginTop: "0px"
    }, 100)
  });



  let x = 0;
  
  $("#toggle").click(function () {
  
    if (x % 2 === 0) {
      $(".new-tweet").slideDown();
      x++;
    } else {
      $(".new-tweet").slideUp();
      x++;
    }
  })
  

})
