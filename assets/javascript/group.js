var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var response = [];
var term = ""; //prompt("Term");
var sYear =""; //prompt("Start");
var eYear = ""; //prompt("eEear");
var records = 5;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var response = [];
var term = "trump"; //prompt("Term");
var sYear ="20170101"; //prompt("Start");
var eYear = "20190101"; //prompt("eEear");
var records = "5";

$("#search").on("click", function(){
    term = $(".search").val();
    records = $(".num").val();
    sYear = $(".start").val();
    eYear = $(".end").val();
    



url +=
  "?" +
  $.param({
    "api-key": "325ff8e5982c49678fea1bbc6766fa05",
    q: term,
    begin_date: sYear,
    end_date: eYear,
    fl: "headline, web_url, byline"
  });
$.ajax({
  url: url,
  method: "GET"
})
  .done(function(result) {
   response = (result.response.docs);
   var card = $("<div>");
   var head = $("<h3>");
   var by = $("<p>");

for (let i = 0; i < records; i++) {
  var current = response[i]
  console.log(response[i].web_url)
  console.log(response[i].headline.main)
  console.log(response[i].byline.original)
}







  })
  .fail(function(err) {
    throw err;
  });


    
})

