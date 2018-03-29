          
    $("#SearchBtn").on("click", function(event) {

      event.preventDefault();
    
      var apikey = "lHzfxhG8ouWxpRucN0nkcCCa";
      
      var category = $("#exampleFormControlSelect1").val().trim();
      var title = $("#exampleFormControlInput1").val().trim();
      var revtitle = title.replace(" ","&search=");
      
      var limits = "5";
      // var limits = $("#").val().trim();

      console.log("here's the ID: ", category);  
      console.log("here's the title: ", title);    
      
       
      //ajax request.
      var queryURL = "https://api.bestbuy.com/v1/products((search=" + revtitle + ")&(categoryPath.id="+ category + "))?apiKey=" + apikey +
      "&pageSize=" + limits + "&format=json";

      $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

       
      //for loop if items = 1, 5 or 10.      
      for (var i = 0; i < limits; i++) {       

      //add features or description????
      
      console.log("URL: ", response.products[i].url);

      console.log("Brand: ", response.products[i].manufacturer);
      console.log("Model #: ", response.products[i].modelNumber);
      console.log("Item name: ", response.products[i].name);
      console.log("UPC: ", response.products[i].upc);
      console.log("SKU #: ", response.products[i].sku);
      console.log("Color: ", response.products[i].color);
      console.log("Rg price$: ", response.products[i].regularPrice);
      console.log("Sale price$: ", response.products[i].salePrice);

      console.log("reg image: ", response.products[i].image);
      console.log("medium image: ", response.products[i].mediumImage);
      console.log("thumbnail image: ", response.products[i].thumbnailImage);

      // display products to html.
      $("#productView").empty();

      $("#productView").append('<p> Brand: ' + response.products[i].manufacturer + '</p>');
      $("#productView").append('<p> Name: ' + response.products[i].name + '</p>');
      $("#productView").append('<p> SKU: ' + response.products[i].sku + '</p>');
      $("#productView").append('<img src=' + response.products[i].mediumImage + '>');

           
      }
    });

  }); // search btn function ends here

  // need to add error function.
  // need to add clear function.
