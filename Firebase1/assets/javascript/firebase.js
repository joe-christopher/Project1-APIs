  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCmhIpTAkBh6BcOd_idfubOfdFyhl3colY",
    authDomain: "api-project-e0a79.firebaseapp.com",
    databaseURL: "https://api-project-e0a79.firebaseio.com",
    projectId: "api-project-e0a79",
    storageBucket: "api-project-e0a79.appspot.com",
    messagingSenderId: "916095505041"
  };
  firebase.initializeApp(config);
    var dataRef = firebase.database();
    var item = "";
    $("#submit").on("click", function(event) {
      event.preventDefault();
   
      item = $("#productName").val().trim();
      dataRef.ref().push({
        item: item,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });
    dataRef.ref().on("child_added", function(childSnapshot) {
    
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
    dataRef.ref().orderByChild("dateAdded").limitToLast(5).on("child_added", function(snapshot) {
      
      $("#recentSearches").prepend(`<p>${snapshot.val().item}`);
 
    });
   
