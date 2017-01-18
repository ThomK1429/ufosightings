// grab the articles as a json
$(document).on('ready', function (){
    console.log('test1')
    
    var getArticles = {
    // Attributes
    articles: [],
    currentArticle: 0,
    scrapeArticle: function() {
      // scrape the articles as a json
      console.log("in scrapeArticle");
      
      var self = this;
         $('#wellSection').empty();
       //$.getJSON('result.json', function(jd) {
      $.getJSON('/scrape', function(data) {
        console.log("scraping data ...");
      })
      .done(function( data ) {
          console.log("scraped data");
          if (ufoDataStatus){
              self.fetchArticle();
          };
      })
      .fail(function(data){
        console.log("scrape failed");
      });
    },
    fetchArticle: function() {
      // grab the articles as a json and display the first article
      var self = this;
      console.log("in fetchArticle");
      $.getJSON('/articles', function(data) {
        //scrape data if there is no data
        if (data.length <= 0){
           self.scrapeArticle();
         } else {
          self.articles = data;
          // for each one
          self.showArticle();
        } ;       
      })
      .done(function(data){
        console.log("retrieval of articles");
        self.showArticle();
      })
      .fail(function(articles){
        console.log("retrieval of articles failed");
      });
    },
    
    showArticle: function() {
      // Display the current Article
      //debugger
      console.log("in showArticle");
      
      $('#wellSection').empty();
      if ((this.articles).length > 0){
         
         
        var data=this.articles;
        for (var i =2; i < data.length; i++){
            var wellSection = $("<div>");
            wellSection.addClass('well');
            wellSection.attr('id', 'characterWell-' + i)
            $('#wellSection').append(wellSection);              
          
            $("#characterWell-" + i).append("<h2>CASE NUMBER: <a title='more info' href=http://www.ufostalker.com/event/" + data[i]['ufosightingList'][0].caseNumber + ">"+data[i]['ufosightingList'][0].caseNumber+ "</a></h2>");
            
            $("#characterWell-" + i).append("<p>SIGHT DATE: " + data[i]['ufosightingList'][0].sightDate + "</p>");
            $("#characterWell-" + i).append("<p>CITY: " + data[i]['ufosightingList'][0].city + 
                ";      STATE: "+data[i]['ufosightingList'][0].state +
                ";      DURATION: "+data[i]['ufosightingList'][0].duration +
                "</p>");
            $("#characterWell-" + i).append("<p>DETAILS: " + data[i]['ufosightingList'][0].posted + "</p>");
            //hide the scrape and start buttons
            //$(".scrapeShow").hide();
            //appending the article to the div - article
            $('#wellSection').append(wellSection);
        
          };
          console.log(wellSection);
      }
    },
   
  };

  

  // to scrape data
  $(document).on('click', '#startScrape', function(){
    getArticles.scrapeArticle();
    console.log("eeeeeeeee");
    // $(".scrapeShow h3").text("View Details")
    // $(this).hide();
  });
  //to start showing the articles
  $(document).on('click', '#ufoInfo', function(){
    getArticles.fetchArticle();
  });
 
});

