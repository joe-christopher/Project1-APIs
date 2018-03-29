
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

runYTQuery(queryYTURL); //test function call

