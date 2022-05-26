$(document).ready(function() {
  // --- our code goes here ---

  let counter = document.getElementsByClassName("counter");
  
  const text = document.getElementById("tweet-text");

  $(text).on('input', function() {
    let count = 140;
    
    let length = $(this).val().length;
    
    count -= length;

    if (count < 0) {
      $(counter[0]).addClass("red");
    } else if (count >= 0 && $(counter[0].class === "red")) { 
      $(counter[0]).removeClass("red");
    } 
    counter[0].innerHTML = count;
  });

  $("#target").on("submit", (event) => {
    counter[0].innerHTML = 140;
  });

});
