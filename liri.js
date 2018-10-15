require("dotenv").config();

// `concert-this`

// `spotify-this-song`

// `movie-this`

// `do-what-it-says`


// 1. `node liri.js concert-this <artist/band name here>`

//    * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

//      * Name of the venue

//      * Venue location

//      * Date of the Event (use moment to format this as "MM/DD/YYYY")
var readlinesync = require("readline-sync");
var bandName = readlinesync.question("Which band would you like to see live?")

var bandRequest = require("request");
// const bandInquirer = require("inquirer");

// bandInquirer.prompt([

//     {
//       type: "input",
//       name: "userInput",
//       message: "Which band do you wish to go see live?"
//     }])
  
// .then(function(location){

    // let bandName = location.userInput; //process.argv[2];

    // if (bandName == null || bandName == ""){
    //     bandName = `Metallica`;
    // }


const queryUrl2 = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";

// This line is just to help us debug against the actual URL.
console.log(queryUrl2);

bandRequest(queryUrl2, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {
      console.log(body.length);

    for (i = 0; i < body.length-1; i++){
    console.log(
        
        `Name of Venue: ${JSON.parse(body)[i].venue.name}
        Location: ${JSON.parse(body)[i].venue.country + " "+ JSON.parse(body)[i].venue.region +" "+ JSON.parse(body)[i].venue.city}
        Dates of event: ${JSON.parse(body)[i].datetime}
        ${i + 1}`
    )
}
//      * Name of the venue
//      * Venue location
//      * Date of the Event (use moment to format this as "MM/DD/YYYY")
    

  
  }

  else{
      console.log(`no such band, apparently`)
  }
})
//})
;




// 3. `node liri.js movie-this '<movie name here>'`

//    * This will output the following information to your terminal/bash window:

//      ```
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//      ```

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

//      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

//      * It's on Netflix!

//    * You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.
var movieName = readlinesync.question("What movie do you want to know about?")

var request = require("request");
// var inquirer = require("inquirer");

// inquirer.prompt([

//     {
//       type: "input",
//       name: "userInput",
//       message: "What movie do you want to know about?"
//     }])
  
// .then(function(location){

//     var movieName = location.userInput; //process.argv[2];

    if (movieName == null || movieName == ""){
        movieName = `Mr. Nobody`;

    }


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
  //  * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//      
if (movieName == 'Mr. Nobody'){
    console.log(
    `Title: ${JSON.parse(body).Title}. It's on Netflix
    Release Year: ${JSON.parse(body).Year}
    IMDB Rating: ${JSON.parse(body).imdbRating}
    ${JSON.parse(body).Ratings[1].Source}: ${JSON.parse(body).Ratings[1].Value}
    Country: ${JSON.parse(body).Country}
    Language: ${JSON.parse(body).Language}
    Plot: ${JSON.parse(body).Plot}
    Actors: ${JSON.parse(body).Actors}`)
}
else{
    console.log(`
    Title: ${JSON.parse(body).Title}
    Release Year: ${JSON.parse(body).Year}
    IMDB Rating: ${JSON.parse(body).imdbRating}
    ${JSON.parse(body).Ratings[1].Source}: ${JSON.parse(body).Ratings[1].Value}
    Country: ${JSON.parse(body).Country}
    Language: ${JSON.parse(body).Language}
    Plot: ${JSON.parse(body).Plot}
    Actors: ${JSON.parse(body).Actors}`)
}
   
  }
})
//})
;



// 4. `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

//      * Edit the text in random.txt to test out the feature for movie-this and my-tweets



// ### BONUS

// * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

// * Make sure you append each command you run to the `log.txt` file. 

// * Do not overwrite your file each time you run a command.

        