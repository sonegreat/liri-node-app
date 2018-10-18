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
var bandName = readlinesync.question("concert-this")

var bandRequest = require("request");

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
    

  
  }

  else{
      console.log(`no such band, apparently`)
  }
})

;

//})
//      * Name of the venue
//      * Venue location
//      * Date of the Event (use moment to format this as "MM/DD/YYYY")

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



// 2. `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window

//      * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.

//    * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

//    * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

//    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

//    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

//    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

//    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).
/**
 * This example retrieves the top tracks for an artist.
 * https://developer.spotify.com/spotify-web-api/get-artists-top-tracks/
 */

/**
 * This endpoint doesn't require an access token, but it's beneficial to use one as it
 * gives the application a higher rate limit.
 *
 * Since it's not necessary to get an access token connected to a specific user, this example
 * uses the Client Credentials flow. This flow uses only the client ID and the client secret.
 * https://developer.spotify.com/spotify-web-api/authorization-guide/#client_credentials_flow
 */

var songName = readlinesync.question("Interested in a song?")

var SpotifyApi = require('node-spotify-api');


var spotify = new SpotifyApi({
  "id" : "afb46ff650f441668231dc7307ca98ab",
  "secret": "a32dbe43ad0e48309e7d7bcea588a99c"
});

spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  var songInfo = data.tracks.items; 

  for (i = 0; i < songInfo.length; i++ ){
      console.log(`
                Artist: ${songInfo[i].artists[0].name}
                Name of Song: ${songInfo[i].name}
                Preview: ${songInfo[i].preview_url}
                Album: ${songInfo[i].album.name}`
      //Name of Artist: ${songInfo[i].artist}
    //   Name of Song: ${JSON.parse(songInfo)[i].name}
    //   Name of Album: ${JSON.parse(songInfo)[i].album}
    //   Name of Link: ${JSON.parse(songInfo)[i].href}
      
          
      )
  }
  });

// songName(spotifyApi, function(error, response, body) {

//   // If the request is successful
//   if (!error && response.statusCode === 200) {
//       console.log(body.length);

//     for (i = 0; i < body.length-1; i++){
//     console.log(`
//         Name of the song: ${JSON.parse(body).title}
//         Preview the song: ${JSON.parse(body)}
//         Album : ${JSON.parse(body).album}
//         ${i}`
    
//     )
//     // Artist(s)

//     //      * The song's name
    
//     //      * A preview link of the song from Spotify
    
//     //      * The album that the song is from
    
// }

  
//   }

//   else{
//       console.log(`are you sure that is a song?`)
//   }
// })
// //})
// ;



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
// var inquirer = require("inquirer");

// inquirer.prompt([

//     {
//       type: "input",
//       name: "userInput",
//       message: "What movie do you want to know about?"
//     }])
  
// .then(function(location){

//     var movieName = location.userInput; //process.argv[2];

var movieName = readlinesync.question("movie-this")

var request = require("request");

    if (movieName == null || movieName == ""){
        movieName = `Mr. Nobody`;

    }


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

      
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


// 4. `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

//      * Edit the text in random.txt to test out the feature for movie-this and my-tweets



// ### BONUS

// * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

// * Make sure you append each command you run to the `log.txt` file. 

// * Do not overwrite your file each time you run a command.

        