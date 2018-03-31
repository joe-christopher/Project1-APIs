
//Best Buy API parameters, hard coded  product name and category for testing
var BBapiKey = "lHzfxhG8ouWxpRucN0nkcCCa";
var queryBBURL = "";
var catagoryId = "";
var specificId = "";

	//Grabbing the values from the inputs and setting them to the global variables
	$("#submit").on("click", function(event){

		event.preventDefault();

		//set vars with input box values
    q = $("#productName").val().trim(); //set search value
    q = q.split(" ").join("&search="); //remove inner whitepaces, add URL requirements

     
    catagoryId = $("#catId").val();

    queryBBURL = "https://api.bestbuy.com/v1/products((search=" + q + ")&(categoryPath.id=" + catagoryId + "))?apiKey=" +
    BBapiKey + "&sort=name.dsc&show=name,description,image,images,modelNumber,regularPrice,upc,salePrice,features.feature&pageSize=20&format=json";

    $(".productdetails").empty();  //clear div before appending product details

    runBBQuery(queryBBURL);  //make AJAX call
});


// This runBBQuery function expects 1 parameter: the final URL to download data from)
function runBBQuery(queryBBURL) {

  // The AJAX function uses the queryBBURL and GETS the JSON data associated with it.
  // The data then gets stored in the variable called: "BBData"

  $.ajax({
    url: queryBBURL,
    method: "GET"
  }).done(function(BBData) {

    console.log(BBData);
  
    //populate new option list with values returned from API call
    $.each(BBData.products, function( index, name ){
      $('#specId').append($('<option>', { 
        value: index,
        text : BBData.products[index].name
      }));
    });

    $("#submit2").on("click", function(event){
      
      event.preventDefault();

      specificId = $("#specId").val(); //get index from new option list
 
      //output product details to UI
      $(".productdetails").append('<p> Name: ' + BBData.products[specificId].name + '</p>');
      $(".productdetails").append('<p> Description: ' + BBData.products[specificId].description + '</p>');
      $(".productdetails").append('<p> Short Description: ' + BBData.products[specificId].shortDescription + '</p>');
      $(".productdetails").append('<p> Manufacturer: ' + BBData.products[specificId].manufacturer + '</p>');
      $(".productdetails").append('<p> Model Number: ' + BBData.products[specificId].modelNumber + '</p>');
      $(".productdetails").append('<p> Regular Price: ' + BBData.products[specificId].regularPrice + '</p>');
      $(".productdetails").append('<p> Sale Price: ' + BBData.products[specificId].salePrice + '</p>');
      $(".productdetails").append('<p> Customer Review Average: ' + BBData.products[specificId].customerReviewAverage  + '</p>');
      $(".productdetails").append('<p> UPC: ' + BBData.products[specificId].upc + '</p>');
      $(".productdetails").append('<p> URL: ' + BBData.products[specificId].url + '</p>');
      $(".productdetails").append('<p> Mobile URL: ' + BBData.products[specificId].mobileUrl + '</p>');
      $(".productdetails").append('<img src=' + BBData.products[specificId].image + '>');

    });

   
})




}