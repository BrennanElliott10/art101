function getajaxdata(){
$.ajax({
  url: "data/data.txt",
  type: "GET",
  datatype: "text",
  success: successFun,
  error: errorFun,
  complete: function(xhr,status){
    console.log("the request has been done");
  }
})
}
function successFun(result){
  console.log(result)
  $('#ajax_text').html(result);
}
function errorFun(xhr,status,strErr){
  console.log("error"+strErr);
}
$('#ajax_get').click(getajaxdata)
