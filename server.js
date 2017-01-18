// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require("fs");
var request = require('request'); // Snatches html from urls
var cheerio = require('cheerio'); // Scrapes our html
// NPM Package for reading and writing files
var fs = require('fs'); 
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3300;


// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// Notice: Our scraping tools are prepared, too
var request = require('request'); 
var cheerio = require('cheerio');

// use morgan and bodyparser with our app
app.use(bodyParser.urlencoded({
  extended: false
}));
//getting data from diffrent ponts like file json
var ufoData = require("./btnData/js/ufosighting.js");
// make public a static dir
app.use(express.static('./'));
var ufo=[], ufoDataStatus = false;
var readUfo = function () {

	fs.readFile('ufo.json', 'utf8', function (err, data) {
	//if (data.length > 0){
		if (err){
			return(err);
		}
		if (data.length <= 0){
			console.log("no info available")
			return (false);
		} else {
			ufo = JSON.parse(data);
			console.log(ufo);
		} 
	});

};
readUfo();
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){


	res.sendFile(path.join(__dirname, 'index.html'));
})
// app.get('/ufoinfo', function(req, res){
// 	res.sendFile(path.join(__dirname, 'ufoinfo.html'));
// })

// A GET request to scrape the echojs website.
app.get('/scrape', function(req, res) {
	// first, tell the console what server.js is doing
	console.log("this is a test");
	console.log("\n******************************************\n" +
	            " Get the 0-20 recent sightings of UFOs from  mufoncms.com \n" +
	            "grab the th & tds." +
	            "\n******************************************\n")
 		// make an empty array for saving our scraped info
	    var result = [];
	    	ufoDataStatus = false;

	// run request to grab the html from awwards's clean website section
	request("https://mufoncms.com/cgi-bin/report_handler.pl?req=latest_reports", function (error, response, html) {
	
	    // load the html into cheerio
	    var $ = cheerio.load(html);

	   
	    // with cheerio, look at  mufoncms site, 
	    // enclosed in "table" tags
	    
	    $("form[name=mufon_form] table tr").each(function(i, element){
		//$(".event-table tr").each(function(i, element){
		  	/* Cheerio's find method will "find" the first matching child element in a parent.
		  	 *    We start at the current element, then "find" td.
		  	*/
		    var ufosightingList = [], rowDetails=[];
		    //adding th and td to an array
		    $(element).find('td').each(function(j, ele){
		        rowDetails.push(  $(ele).text().replace(/\n/g,''));
		    });
		    // Define JSON obj
		    var ufosighting =  {
		        caseNumber: rowDetails[0],                // id of the sighting*
		        sightDate: rowDetails[1],     
		        sightTime: rowDetails[2],     // date of when the sighting was observed
		        details: rowDetails[3],         // date of when the sighting was submitted
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

	  	fs.writeFile("./btnData/ufo.json", ufoObj, function(err) {    
		// If the code experiences any errors it will log the error to the console. 
			if(err) {
				return console.log(err);
			}
		}); 
  
	    // Otherwise, it will print: "ufo.json was updated!"
	    ufoDataStatus = true;
	    console.log("ufo.json was updated!");
	}); 
  	// with each link scraped, log the result to the console
  	console.log("UFO Object",result);
});

// Search for Specific ufo (or all ufo) - provides JSON
app.get('/articles', function(req, res){
	
	readUfo();
	var chosen = req.params.ufo;

	if(chosen){
		console.log(chosen);

		for (var i=0; i <ufo.length; i++){

			if (chosen == ufo[i].routeName){
				res.json(ufo[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(ufo);
	}
})


// Search for Specific ufo (or all ufo) - provides JSON
app.get('/ufofile', function(req, res){
	console.log("GET /ufofile");
	res.json(ufoData.getFromFile());
})


// Search for Specific ufo (or all ufo) - provides JSON
app.get('/ufojson', function(req, res){
	console.log("GET /ufojson");
	res.json(ufoData.getFromJson());
})

// Search for Specific ufo (or all ufo) - provides JSON
app.get('/ufosite', function(req, res){
	console.log("GET /ufosite");
	res.json(ufoData.getFromSite());
})

// Get Lat/Lng Geocode Data Only
app.get('/geocode', function(req, res){
	console.log("GET /geocode");
	ufoData.getGeocodeData(function(err, results){
		console.log("++++", results);
		if (err) {
			console.log("++++Error:", err);
			res.json({error: err});
		} else {
			console.log("++++Geocode Results:", results);
			res.json(results);
		}
	});
})

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})