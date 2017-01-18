    
function UfoSightings() {
      this.ufoList = [{"ufosightingList":[{}]},{"ufosightingList":[{}]},{"ufosightingList":[{"caseNumber":"81486","sightDate":"2017-01-11","sightTime":"2017-01-11","posted":"SAW RED ORB HOVERING OVER HOME FOR A MINUTE THEN MOVED WEST ","city":"Homestead","state":"FL, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81485","sightDate":"2017-01-11","sightTime":"2016-08-20","posted":"This sighting would be my third experience in the last 15 years I have more sightings and possible abduction ","city":"Portland","state":"ME, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81484","sightDate":"2017-01-11","sightTime":"2016-09-23","posted":"Large, triangular, very bright lights on each tip of the triangle, shimmering blue light in window compartments, no noise.","city":"Sand Springs","state":"OK, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81483","sightDate":"2017-01-11","sightTime":"2016-06-19","posted":"sighted while driving east app 10-12 miles west of sherman texasDriving east alon hwy82 west of she","city":"Sherman","state":"TX, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81482","sightDate":"2017-01-11","sightTime":"2000-05-01","posted":"Sky opened up and white light very intense covered me ","city":"Grand junction","state":"CO, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81481","sightDate":"2017-01-11","sightTime":"2016-07-10","posted":"{cak} Pulsating orange light made no sound was not an aircraft moved about the speed of an aircraft or a bit faster","city":"Elyria","state":"OH, US","shape":"","duration":"ufo.MOV"}]},{"ufosightingList":[{"caseNumber":"81480","sightDate":"2017-01-11","sightTime":"2015-07-10","posted":"{cak} My husband and I watched this thing go up zip down and around quickly","city":"Cypress","state":"TX, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81478","sightDate":"2017-01-11","sightTime":"2016-12-18","posted":"On 18.12.16 @ 23:00 I saw a strange trail over moon unlike any other I have witnessed.","city":" Manchester ","state":"GB","shape":"","duration":"20161218225755.jpg"}]},{"ufosightingList":[{"caseNumber":"81477","sightDate":"2017-01-11","sightTime":"2016-12-22","posted":"{cak} 2 spotlights from water catch ufo ","city":"league city","state":"TX, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81476","sightDate":"2017-01-11","sightTime":"2016-12-27","posted":"{cak} outside checking on my horses when I noticed 3 very bright orbs off in the distance.   At first I thought they where planes but they didn't move.  Then one of them darted off to the right very fast at the same level as the other two. ","city":"Brookshire","state":"TX, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81475","sightDate":"2017-01-11","sightTime":"2017-01-03","posted":"{cak} Myself and sons witnessed two winged crafts hovering and then slowly bank and leave view","city":"Northeast Minneapolis","state":"MN, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81474","sightDate":"2017-01-11","sightTime":"2015-10-16","posted":"{cak} Filming out my bedroom window ","city":"Stony point","state":"NY, US","shape":"","duration":"IMG3546.PNGIMG3547.PNG"}]},{"ufosightingList":[{"caseNumber":"81473","sightDate":"2017-01-11","sightTime":"2017-01-01","posted":"{cak} Appeared suddenly as a redish orange ball of ligh traveling at a steady speed then suddenly disappeared","city":"Cypress","state":"TX, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81472","sightDate":"2017-01-11","sightTime":"2016-10-22","posted":"{cak} On way home saw an object in the sky hovering with a bright glow and red and blue flashing lights","city":"Katy","state":"TX, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81470","sightDate":"2017-01-11","sightTime":"2016-01-01","posted":"{cak} My son and I were on our way home when we noticed this object moving at a steady pace","city":"Danbury","state":"TX, US","shape":"","duration":"IMG3201.jpgMOV9571651.3gp"}]},{"ufosightingList":[{"caseNumber":"81469","sightDate":"2017-01-11","sightTime":"2016-12-23","posted":"{cak} I was waiting on the bus to take me to the staten island ferry. I arrived at the bus stop at 9pm. I was watching the night sky a jet plane seemed to be leaving from ewr airport.","city":"Staten Island","state":"NY, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81468","sightDate":"2017-01-11","sightTime":"2016-12-09","posted":"{cak} Triangular with 3 lights one in each corner","city":"Browns mills","state":"NJ, US","shape":"","duration":"20161209224149.jpg201612092241491.jpg"}]},{"ufosightingList":[{"caseNumber":"81467","sightDate":"2017-01-11","sightTime":"2017-01-11","posted":"{cak} Boyfriend saw what he believes maybe a ufo on his way home from work.","city":"North Haven","state":"CT, US","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81465","sightDate":"2017-01-11","sightTime":"2002-01-01","posted":"Triangel light rotadet counter clokw 180 in 5 min,  bottom light left to SE  took 4-5 min","city":"Reykjavik","state":"IS","shape":"","duration":""}]},{"ufosightingList":[{"caseNumber":"81464","sightDate":"2017-01-11","sightTime":"1972-11-20","posted":"Object that moved between trees and descended towards me","city":"Chorley","state":"GB","shape":"","duration":""}]}];   

      console.log(this.ufoList[3]['ufosightingList'][0].city, this.ufoList[3]['ufosightingList'][0].state);  

      this.getFromSite = function(){
        console.log("UfoSightings.getFromSite");
        // We need to populate this from the site
        // instead.
        return this.ufoList;

      };
      this.getFromJson = function(){
        console.log("UfoSightings.getFromJson");
        return this.ufoList;
      };
      this.getFromFile = function(){
        console.log("UfoSightings.getFromFile");
      };

      this.getGeocodeData = function(callback) {
        console.log("UfoSightings.getGeocodeData");
        // Use geocoder to get geocode an array of addresses
        var nodeGeocoder = require('node-geocoder');
        var options = {
          provider: 'google',
         
          // Optional depending on the providers 
          httpAdapter: 'https', // Default 
          apiKey: 'AIzaSyCQ5VBR5Q0UKAzskubcs-7_-ycClwCFqak', // for Mapquest, OpenCage, Google Premier 
          formatter: null         // 'gpx', 'string', ... 
        };

        var geocoder = nodeGeocoder(options);

        var sightings = this.ufoList;
        var addresses = [];
//ufoSighting[3]['ufosightingList'][0].state
        console.log("****", sightings);
        console.log("****", sightings[3]);
        // Create an array of addresses from this.ufoList
        for(var i=3; i<sightings.length; i++) {
          var sighting = sightings[i]['ufosightingList'][0];
          addresses.push(sighting.city + ', ' + sighting.state);
        }
        var self= this;
        geocoder.batchGeocode(addresses, function (err, results) {
/*
        
*/
          console.log(results) ;
          var res = {'geocodes': results, 'ufodata': self.ufoList};
          console.log("****res", res);
          console.log("****geocode", res.geocodes);
          
          console.log("****res", res);
          callback(err,  res);
        });
      }
 
 }
 module.exports = new UfoSightings();