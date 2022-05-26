/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  $('.tweet-list').empty();
  for (let tweet of tweets) {
    const render = createTweetElement(tweet);
    $('.tweet-list').append(render);
  }
}

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(tweet) {

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
    ${timeago.format(tweet['created_at'])}
  </div>

  <div class="icon">
    <i class="fas fa-flag"></i>
    <i class="fa-solid fa-heart"></i>
    <i class="fa fa-retweet" aria-hidden="true"></i>
  </div>

</footer>
</section>`;

return tweets;
}


$(document).ready(function (){
  $(".error").hide();
  
  const loadTweets = () => {
    $(".error").hide();
    $.get ("/tweets", (data1) => {
      renderTweets(data1);
    })
  }
  loadTweets();

  $("#target").on("submit", (event) => {
    event.preventDefault();
    let value = $("#target").serialize();
    let placeholder = $("#tweet-text").val(); 
    if(placeholder.length > 140) { 
      validError();
    } else if (!placeholder) {
      alert("You do not have a message!");
    } else {
        $.ajax({
          type: 'POST',
          url: '/tweets',
          data: value,
          success: function () {
            console.log('SUCCESS');
          } 
        })
      $("#tweet-text").val('');
      loadTweets();
    }     
  })


})

const validError = () => {
 $(".error").slideDown();
}

