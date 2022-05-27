// Animation for toggle
$(document).ready(function () {
  $("#toggle").hover(
    function () {
      $(this).animate(
        {
          marginTop: "15px",
        },
        100
      );
    },
    function () {
      $(this).animate(
        {
          marginTop: "0px",
        },
        100
      );
    }
  );

  // counter is made so we can keep track of if the tweet box is shown or not
  let x = 0;

  $("#toggle").click(function () {
    // First time clicking, the tweet box will be shown
    if (x % 2 === 0) {
      $(".new-tweet").slideDown();
      x++;
      // Second time clicking, the tweet box will be hidden again
    } else {
      $(".new-tweet").slideUp();
      x++;
    }
  });
});
