function getajaxdata(){
$.ajax({
  url: "https://en.wikipedia.org/api/rest_v1/page/",
  type: "GET",
  datatype: "json",
  success: successFun,
  error: errorFun,
  complete: function(xhr,status){
    console.log(status);
  }
})

function successFun(result){
  console.log(result)
  $('#ajax_text').html(result);
}
function errorFun(xhr,status,strErr,result){
  console.log("error: "+strErr);
}
}
$('#ajax_get').click(getajaxdata)
