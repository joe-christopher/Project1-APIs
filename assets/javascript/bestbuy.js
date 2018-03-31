   //Best Buy API parameters, hard coded  product name and category for testing
var BBapiKey = "lHzfxhG8ouWxpRucN0nkcCCa";
var queryBBURL = "";
var catagoryId = "";

	//Grabbing the values from the inputs and setting them to the global variables
	$("#submit").on("click", function(event){

		event.preventDefault();

		//set vars with input box values
        q = $("#productName").val().trim();
        console.log("q before " + q);
        q = q.split(" ").join("&search=");
        console.log("q after " + q);

     
        catagoryId = $("#catId").val();

        queryBBURL = "https://api.bestbuy.com/v1/products((search=" + q + ")&(categoryPath.id=" + catagoryId + "))?apiKey=" +
        BBapiKey + "&sort=name.asc&show=name,description,image,images,modelNumber,regularPrice,upc,salePrice,features.feature&pageSize=20&format=json";
        
        console.log("Product : " + q);
        console.log("ID : " + catagoryId);

        console.log(queryBBURL);

        runBBQuery(queryBBURL);
    });


// This runBBQuery function expects 1 parameter: the final URL to download data from)
function runBBQuery(queryBBURL) {

  // The AJAX function uses the queryBBURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "BBData"

  $.ajax({
    url: queryBBURL,
    method: "GET"
  }).done(function(BBData) {

  
    $("#product-info").append('<p> Name: ' + BBData.products[0].name + '</p>');
    $("#product-info").append('<p> Description: ' + BBData.products[0].description + '</p>');
    $("#product-info").append('<p> Manufacturer: ' + BBData.products[0].manufacturer + '</p>');
    $("#product-info").append('<p> Model Number: ' + BBData.products[0].modelNumber + '</p>');
    $("#product-info").append('<p> Regular Price: ' + BBData.products[0].regularPrice + '</p>');
    $("#product-info").append('<p> Sale Price: ' + BBData.products[0].salePrice + '</p>');
    $("#product-info").append('<p> UPC: ' + BBData.products[0].upc + '</p>');
    $("#product-info").append('<p> URL: ' + BBData.products[0].url + '</p>');
    $("#product-pic").append('<img src=' + BBData.products[0].image + '>');

    // Log the BBData to console, where it will show up as an object
    console.log(BBData);
    
  })

}

