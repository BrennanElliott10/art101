/*
 * Author: Brennan Elliott
 * Created: March 3
 * License: Public Domain
 */

//apiEndpoint
apiEndpoint = "https://xkcd.com/info.0.json"
$("#activate").click(doAPIStuff);

function putTextOnPage(text){
  $("#output").html(text);
}

function doAPIStuff() {
  console.log("Doing API");
  $.ajax({
    url: apiEndpoint,
    data: {},
    type: "GET"
  })
  //success
  .done(function( data ) {
    var textData = JSON.stringify(data);
    var str = "";
    var comicObj = data.img;
    var title = data.title;
    str += "<h2>" + title + "</h1>";
    str += "<img src='" + comicObj + "'>"
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
