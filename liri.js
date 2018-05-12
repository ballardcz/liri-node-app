require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



var tweets = process.argv[2];

var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        // Obtain a reference to the tbody element in the DOM
        var tbody = $("tbody");
        // Create and save a reference to new empty table row
        var trow = $("<tr>");
        // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object