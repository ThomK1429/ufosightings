/* Scraper: Server #3  (18.9) 
 * ========================= */

// Dependencies:
var request = require('request'); // Snatches html from urls
var cheerio = require('cheerio'); // Scrapes our html
// NPM Package for reading and writing files
var fs = require('fs'); 

// first, tell the console what server.js is doing
console.log("\n******************************************\n" +
            " Get the 0-20 recent sightings of UFOs from  mufoncms.com \n" +
            "grab the th & tds." +
            "\n******************************************\n")


// run request to grab the html from awwards's clean website section
request("https://mufoncms.com/cgi-bin/report_handler.pl?req=latest_reports", function (error, response, html) {
  
    // load the html into cheerio
      var $ = cheerio.load(html);

    // make an empty array for saving our scraped info
    var result = [];

    $("form[name=mufon_form] table tr").each(function(i, element){
  	/* Cheerio's find method will "find" the first matching child element in a parent.
  	 *    We start at the current element, then "find" td.
  	*/
    var ufosightingList = [], rowDetails=[];
    //adding th and td to an array
    $(element).find('td').each(function(j, ele){
        // var rowDetails =[];
        // rowDetails.push({th: header[k], td:  $(ele).text().replace(/\n/g,'')});
        rowDetails.push(  $(ele).text().replace(/\n/g,''));

    });
    // Define JSON obj
    var ufosighting =  {
        caseNumber: rowDetails[0],                // id of the sighting*
        sightDate: rowDetails[1],     
        sightTime: rowDetails[2],     // date of when the sighting was observed
        posted: rowDetails[3],         // date of when the sighting was submitted
        city: rowDetails[4],        // the city where the sighting was observed
        state: rowDetails[5],         // the state where the sighting was observed
        shape: rowDetails[6],        // shape of the sighting
        duration: rowDetails[7],    // the amount of time in milliseconds that the sighting lasted
        summary: rowDetails[8]
    };
    ufosightingList.push(ufosighting);
    // push the row details into the result array
  	result.push({ufosightingList});
  });
  //convert the obj to json obj
  var ufoObj = JSON.stringify(result);

  fs.writeFile("ufo.json", ufoObj, function(err) {    
  
  // If the code experiences any errors it will log the error to the console. 
    if(err) {
        return console.log(err);
    }

    // Otherwise, it will print: "ufo.json was updated!"
    //console.log("ufo.json was updated!");
}); 
  // with each link scraped, log the result to the console
  //console.log("UFO Object",result);
});
