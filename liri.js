require("dotenv").config();

var requireKeys = require("./keys");
var requireTwitter = require("twitter");
var requireSpotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");
//console.log(keys);

//var spotify = new Spotify(keys.spotify);
var client = new Twitter(requireKeys.twitter);

// capture action from command line
var action = process.argv[2];

// capture amount (if there is one)
//var command = process.argv[3];

// do bank function based the value of variable "action"
switch (action) {
  case 'my-tweets':
    Twitter();
    break;
  case 'spotify-this-song':
    Spotify();
    break;
  case 'movie-this':
    Ombd();
    break;
  default:
    console.log("You didn't put in a proper command, Use 'my-tweets', 'spotify-this-song', or 'movie-this'!");
    break;
};


function Twitter() {
  console.log('this hit');
  //This will show your last 20 tweets and when they were created at in your terminal/bash window.
  var params = {
    screen_name: "ballardcz1"
  };
//statuses/user_timeline"
  client.get("favorites/list", params, function(error, tweets, response) {
    console.log(tweets);

    if (error) throw error;

    for (var i = 0; i < tweets; i++) {
      console.log(tweets[i].text);
      console.log('=================================');
      //     console.log(tweets[i].created_at);  
      //     console.log('=================================');
      console.log(response);
    }
  });
};


function Ombd() {

  var movie = process.argv[3];
  // movie = [];

  if (movie != "") {
    // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    //     * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.
    // * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(res) {
    //   //console.log(res);
    //   console.log(res.title);
    //    console.log(res.year);
    //    console.log(res.rating);
    // });
    request("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log(response);
      console.log('body:', body); // Print the HTML for the Google homepage.
    });

  } else {
    console.log("Hey put in a movie title!")
  }
};

function Spotify() {
  // This will show the following information about the song in your terminal/bash window

  // Artist(s)

  // The song's name

  // A preview link of the song from Spotify

  // The album that the song is from

  // If no song is provided then your program will default to "The Sign" by Ace of Base.
};