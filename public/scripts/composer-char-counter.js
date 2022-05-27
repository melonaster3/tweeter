$(document).ready(function () {
  // Code for the character counter for the tweet

  let counter = document.getElementsByClassName("counter");

  const text = document.getElementById("tweet-text");

  $(text).on("input", function () {
    let count = 140;

    let length = $(this).val().length;

    // Subtract count minus length to show how many characters are remaining

    count -= length;

    // Counter will become zero if the user exceeds 140 characters
    if (count < 0) {
      $(counter[0]).addClass("red");
      // Counter will remove zero if the user does not 140 characters
    } else if (count >= 0 && $(counter[0].class === "red")) {
      $(counter[0]).removeClass("red");
    }
    counter[0].innerHTML = count;
  });

  // After user submission of tweet, the amount of characters avaliable goes back to 140
  $("#target").on("submit", (event) => {
    counter[0].innerHTML = 140;
  });
});
