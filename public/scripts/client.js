/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const render = createTweetElement(tweet);
    $('.tweet-list').append(render);
  }
}

const createTweetElement = function(tweet) {
  let tweets = `
        <section class="tweet-box">
        <header>
          <div class="name"> <img src=${tweet["user"]["avatars"]}>
          <div id="name1">${tweet["user"]["name"]}</div>
          </div>
          <div class="userid">${tweet["user"]["handle"]}</div>
        </header>
        <div class="tweets">
          ${tweet["content"]["text"]}
        </div>

        <footer>
          <div class="date timeago">
            ${timeago.format(tweet['created_at'])}
          </div>

          <div class="emojis">
            <i class="fas fa-flag"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </div>

        </footer>
        </section>`;

  return tweets;
}

$(document).ready(function (){
  
  const loadTweets = () => {
    $.get ("/tweets", (data1) => {
      renderTweets(data1);
    })
  }

  loadTweets();

  $("#target").on("submit", (event) => {
    event.preventDefault();
    let value = $("#target").serialize();
    //const placeholder = value.slice(5).split('');
    let placeholder = $("#tweet-text").val(); 
    if(placeholder.length > 140) { 
      alert("Message is too long!");
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
    }     
    
  })


})

