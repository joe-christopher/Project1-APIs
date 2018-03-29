
//YouTube API parameters
var apiKey = "AIzaSyAayGDTZosMnbroBx71FzowCC-bB1bPEno";
var part = "snippet";
var t = "jsonc"
var q = "iphone x unboxing" //hard coded for testing
var maxResults = 3;
var type = "video";


var queryYTURL = "https://www.googleapis.com/youtube/v3/search?part=" + part + "&key=" + apiKey + "&maxResults=" + maxResults + 
"&type=" + type + "&q=" + q + "&t=" + t;

// This runYTQuery function expects 1 parameter: the final URL to download data from)
function runYTQuery(queryYTURL) {

  // The AJAX function uses the queryYTURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "YTData"

  $.ajax({
    url: queryYTURL,
    method: "GET"
  }).done(function(YTData) {

    // Logging the URL so we have access to it for troubleshooting
    console.log("URL: " + queryYTURL);

    // Log the YTData to console, where it will show up as an object
    console.log(YTData);
    
  })

  
}


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoplayer', {
    height: '390',
    width: '640',
    videoId: 'l0DoQYGZt8M',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

runYTQuery(queryYTURL); //test function call

