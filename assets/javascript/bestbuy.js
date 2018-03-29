
//Best Buy API parameters, hard coded  product name and category for testing
var BBapiKey = "lHzfxhG8ouWxpRucN0nkcCCa";
var queryBBURL = "https://api.bestbuy.com/v1/products((search=iphone&search=x)&(categoryPath.id=pcmcat209400050001))?apiKey=" 
+ BBapiKey + "&sort=name.asc&show=name,description,image,modelNumber,regularPrice,upc,salePrice,features.feature&pageSize=25&format=json";


// This runBBQuery function expects 1 parameter: the final URL to download data from)
function runBBQuery(queryBBURL) {

  // The AJAX function uses the queryBBURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "BBData"

  $.ajax({
    url: queryBBURL,
    method: "GET"
  }).done(function(BBData) {

    // Logging the URL so we have access to it for troubleshooting
    console.log("URL: " + queryBBURL);

    // Log the BBData to console, where it will show up as an object
    console.log(BBData);
    
  })

}

// function call for testing
// runBBQuery(queryBBURL); //test function call