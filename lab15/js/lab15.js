/*
 * Author: Brennan Elliott
 * Created: March 3
 * License: Public Domain
 */

//apiEndpoint
apiEndpoint = "https://api.nasa.gov/planetary/apod"
$("#activate").click(doAPIStuff);

function putTextOnPage(text){
  $("#output").html(text);
}

function doAPIStuff() {
  console.log("Doing API Stuff");
  $.ajax({
    url: apiEndpoint,
    data: {
          api_key: "lLiG3OmR2q3o3oJDQN9MIraaSoCSWmp2uvHYfNe7"
          },
    type: "GET"
  })
  //success
  .done(function( data ) {
    var textData = JSON.stringify(data);
    var str = "";
    var imageURL = data.hdurl;
    var title = data.title;
    str += "<h2>" + title + "</h1>";
    str += "<img src='" + imageURL + "'>"
    console.log("Success:", textData);
    putTextOnPage(str);
  })
  // failure
  .fail(function( xhr, status, errorThrown ) {
    console.log("Failure.");
    putTextOnPage(errorThrown + " Status:" + status);

  })
  console.log("Asynchronously doing the next thing.");

}
