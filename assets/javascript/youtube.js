
//YouTube API parameters
var apiKey = "AIzaSyAayGDTZosMnbroBx71FzowCC-bB1bPEno";
var part = "snippet";
var t = "jsonc"
var q = "hero 6 unboxing" //hard coded for testing
var maxResults = 3;
var type = "video";


var queryURL = "https://www.googleapis.com/youtube/v3/search?part=" + part + "&key=" + apiKey + "&maxResults=" + maxResults + 
"&type=" + type + "&q=" + q + "&t=" + t;

// This runQuery function expects 1 parameter: the final URL to download data from)
function runQuery(queryURL) {

  // The AJAX function uses the queryURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "YTData"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(YTData) {

    // Logging the URL so we have access to it for troubleshooting
    console.log("URL: " + queryURL);

    // Log the YTData to console, where it will show up as an object
    console.log(YTData);
    
  })

}

runQuery(queryURL); //test function call

