var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var response = [];

$("#search").on("click", function() {
  term = $(".search").val();
  records = $(".num").val();
  sYear = $(".start").val();
  eYear = $(".end").val();
  console.log(term);
  console.log(records);
  console.log(sYear);
  console.log(eYear);
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
      response = result.response.docs;
      var card = $("<div>");
      var head = $("<h3>");
      var by = $("<p>");

      for (let i = 0; i < records; i++) {
        var current = response[i];
       
        

        
        $(".report").append('<a href="'+response[i].web_url+'"><button type="button" class="btn btn-secondary btn-lg btn-block"><p id="articleName"><span id="articleNum">'+ (parseInt(i) + 1) +'</span>' + response[i].headline.main + '</p><p id="articleAuthor"><span id="author">'+ response[i].byline.original +'</span></p></button></a>')
        
        console.log(response[i].web_url);
        console.log(response[i].headline.main);
        console.log(response[i].byline.original);
      }
    })
    .fail(function(err) {
      throw err;
    });
});
