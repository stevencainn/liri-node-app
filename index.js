require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var moment = require("moment");
var inquirer = require("inquirer");


var request = process.argv[2];
var userInput = process.argv.slice(3).join(" ");



function searchMe(request, songTitle){
  switch (request){
    case "spotifyThis":
    spotifyThis(songTitle);
    break;

    case "omdbThis":
    ombdThis(songTitle);
    break;

    case "bandsThis":
    bandsThis(songTitle);
    break;

    case "do-what-it-says":
      getRandom();
      break;
  }

}


function spotifyThis(){ //why did i need to put parameter to get my randomfunction to run
    if (userInput === "") {
    }
    spotify.search({ type: 'track', query: userInput }, function (error, data) {
        if (error) {
            console.log(error)
        }
        else{
            console.log("=================");
            console.log(data.tracks.items[0].artists[0].name);
            console.log(data.tracks.items[0].name);
            console.log(data.tracks.items[0].album.name);
            console.log(data.tracks.items[0].href);
            console.log("=================");
                      
        };
    });
};

function ombdThis(){
   var omdbKey = "trilogy";
   var omdbUrl = `http://www.omdbapi.com/?apikey=${omdbKey}&t=${userInput}`;
    axios.get(omdbUrl)
  .then(function (response) {
    // handle success
    // console.log(response.data);
    console.log("=================");
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(response.data.Ratings[1].Value);
    console.log(response.data.imdbRating);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
    console.log("=================");

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

function bandsThis(){
  var artist = userInput;
  var bandsUrl = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;

  axios.get(bandsUrl)
  .then(function (response){
    console.log("=================");
    console.log(response.data[0].venue.name);
    console.log(response.data[0].venue.city);
    console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));
    console.log("=================");
  })
}

function getRandom(){
  fs.readFile('random.txt', "utf8",  function(err, data) {
    if (err){
      return console.log(err);
    }else{
      console.log(data);
      var txtData = data.split(",");
      userInput = txtData[1];
      searchMe(txtData[0], txtData[1]);
      console.log(txtData);

    }
    
  });
}

searchMe(request, userInput);