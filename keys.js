

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
var readlinesync = require("readline-sync");

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
var songName = readlinesync.question("Interested in a song?")

var SpotifyApi = require('node-spotify-api');

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
var spotify = new SpotifyApi({
  clientId: "afb46ff650f441668231dc7307ca98ab",
  clientSecret: "a32dbe43ad0e48309e7d7bcea588a99c"
});

spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
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
