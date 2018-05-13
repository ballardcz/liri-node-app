require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");

//var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// capture action from command line
var action = process.argv[2];

// capture amount (if there is one)
var amount = process.argv[3];

// do bank function based the value of variable "action"
switch (action) {
  case 'my-tweets':
    twitter();
    break;
  case 'Spotify':
    spotify();
    break;
  case 'Ombd':
    Ombd();
    break;
  default:
    console.log("You didn't put in a proper command, Use 'my-tweets', 'Spotify', or 'Ombd'!");
    break;
}


function twitter() {

  var params = {
    screen_name: "ballardcz1"
  };

  client.get("statuses/user_timeline", params, function (error, tweets, response) {

          if (error) {
            throw error;
          } else {
            console.log(tweets[i].text); 
            console.log(tweets[i].created_at);
            console.log(tweets[i].user);  
            console.log('=================================');
            console.log(response); 
          }
        });
      }

      // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

      //       $.ajax({
      //         url: queryURL,
      //         method: "GET"
      //       }).then(function (response) {
      //         console.log(response);
      //         // Obtain a reference to the tbody element in the DOM
      //         var tbody = $("tbody");
      //         // Create and save a reference to new empty table row
      //         var trow = $("<tr>");
      //         // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object