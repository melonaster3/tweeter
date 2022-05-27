/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// when function is called, it will refresh the tweets list and render new tweets from data
const renderTweets = function (tweets) {
  $(".tweet-list").empty();
  for (let tweet of tweets) {
    const render = createTweetElement(tweet);
    $(".tweet-list").append(render);
  }
};

// Catch error code so people cant hack in!
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Gets tweet data and renders them to the HTML
const createTweetElement = function (tweet) {
  let tweets = `<section class="tweet-box">
<header>
  <div class="name"> <img src=${tweet["user"]["avatars"]}>
  <div id="name1">${tweet["user"]["name"]}</div>
  </div>
  <div class="userid">${tweet["user"]["handle"]}</div>
</header>
<div class="tweets">
  ${escape(tweet["content"]["text"])}
</div>

<footer>
  <div class="date timeago">
    ${timeago.format(tweet["created_at"])}
  </div>

  <div class="icon">
    <i class="fas fa-flag"></i>
    <i class="fa-solid fa-heart"></i>
    <i class="fa fa-retweet" aria-hidden="true"></i>
  </div>

</footer>
</section>`;

  return tweets;
};

// Error box slides down when chracter goes over 140
const validError = () => {
  $(".error").slideDown();
};

$(document).ready(function () {
  // Error function and the new tweet submission will be hidden
  $(".error").hide();
  $(".new-tweet").hide();

  const loadTweets = () => {
    $(".error").hide();
    $.get("/tweets", (data1) => {
      renderTweets(data1);
    });
  };
  loadTweets();

  // On tweet submission

  $("#target").on("submit", (event) => {
    //Stops page from refreshing
    event.preventDefault();
    //Prevent error 400, need to send a serialized value
    let value = $("#target").serialize();
    let placeholder = $("#tweet-text").val();

    //Catch if submission is over 140 character and show error box
    if (placeholder.length > 140) {
      validError();

      //Catch if submission has no character and send an alert
    } else if (!placeholder) {
      alert("You do not have a message!");
    } else {
      //Send ajax post to the server if the tweet is a success
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: value,
        success: function () {
          console.log("SUCCESS");
        },
      });
      //Refresh tweet box and load the new tweets
      $("#tweet-text").val("");
      loadTweets();
    }
  });
});
