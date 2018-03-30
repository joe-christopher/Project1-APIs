
//Best Buy API parameters, hard coded  product name and category for testing
var BBapiKey = "lHzfxhG8ouWxpRucN0nkcCCa";
var queryBBURL = "";
var catagoryId = "";

	//Grabbing the values from the inputs and setting them to the global variables
	$("#submit").on("click", function(event){

		event.preventDefault();

		//set vars with input box values
    q = $("#productName").val().trim(); //set search value
    q = q.split(" ").join("&search="); //remove inner whitepaces, add URL requirements

     
    catagoryId = $("#catId").val();

    queryBBURL = "https://api.bestbuy.com/v1/products((search=" + q + ")&(categoryPath.id=" + catagoryId + "))?apiKey=" +
    BBapiKey + "&sort=name.asc&show=name,description,image,images,modelNumber,regularPrice,upc,salePrice,features.feature&pageSize=20&format=json";

    $(".productdetails").empty();  //clear div before appending product details

    runBBQuery(queryBBURL);  //make AJAX call
});


// This runBBQuery function expects 1 parameter: the final URL to download data from)
function runBBQuery(queryBBURL) {

  console.log()
  // The AJAX function uses the queryBBURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "BBData"

  $.ajax({
    url: queryBBURL,
    method: "GET"
  }).done(function(BBData) {
  
    $(".productdetails").append('<p> Name: ' + BBData.products[0].name + '</p>');
    $(".productdetails").append('<p> Description: ' + BBData.products[0].description + '</p>');
    $(".productdetails").append('<p> Manufacturer: ' + BBData.products[0].manufacturer + '</p>');
    $(".productdetails").append('<p> Model Number: ' + BBData.products[0].modelNumber + '</p>');
    $(".productdetails").append('<p> Regular Price: ' + BBData.products[0].regularPrice + '</p>');
    $(".productdetails").append('<p> Sale Price: ' + BBData.products[0].salePrice + '</p>');
    $(".productdetails").append('<p> UPC: ' + BBData.products[0].upc + '</p>');
    $(".productdetails").append('<p> URL: ' + BBData.products[0].url + '</p>');
    $(".productdetails").append('<img src=' + BBData.products[0].image + '>');
    
  })

}
