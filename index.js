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

var omdbKey = "trilogy";
var omdbUrl = `http://www.omdbapi.com/?apikey=${omdbKey}&t=${userInput}`;


switch (request){
    case "spotifyThis":
    spotifyThis(userInput);
    break;

    case "omdbThis":
    ombdThis(userInput);
    break;

    case "bandsThis":
    bandsThis(userInput);
    break;
}

function spotifyThis(){ 
    if (userInput === "") {
    }
    spotify.search({ type: 'track', query: userInput }, function (error, data) {
        if (error) {
            console.log(error)
        }
        else{
            console.log(data.tracks.items[0].artists[0].name);
            console.log(data.tracks.items[0].name);
            console.log(data.tracks.items[0].album.name);
            console.log(data.tracks.items[0].href);
        };
    });
};

function ombdThis(){
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