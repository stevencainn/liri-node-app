# liri-node-app

### Overview

Liri is a one-stop command line application that takes in parameters to search for relevant data on songs, concert venues, and movies.

This application makes calls to the Spotify API(also known as Application Programming Interface), BandsInTown API, and OMDB API for the search results.

### Liri's Commands

This app can take in one of the following commands:

* `concert-this`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`

### What Each Commands Can Do

1. `node liri.js concert-this <artist/band name here>`

     * Name of the venue
     * Venue location
     * Date of the Event ("MM/DD/YYYY")

EXAMPLE: ![Concert-Example]

2. `node liri.js spotify-this-song '<song name here>'`

     * The song's name
     * Artist(s)
     * The album that the song is from
     * A preview link of the song from Spotify
     

   *If no song is provided then your program will default to "The Sign"*

EXAMPLE:
![liri-screen](https://user-images.githubusercontent.com/53619333/68173501-321d7e80-ff49-11e9-8c10-52ea3a0d5e8e.png)
![liri-screen1](https://user-images.githubusercontent.com/53619333/68173502-321d7e80-ff49-11e9-839f-e0cb780bb80b.png)
![liri-screen2](https://user-images.githubusercontent.com/53619333/68173503-321d7e80-ff49-11e9-8d72-28cd6356f181.png)


3. `node liri.js movie-this '<movie name here>'`

     * Title of the movie.
     * Year the movie came out.
     * IMDB Rating of the movie.
     * Rotten Tomatoes Rating of the movie.
     * Country where the movie was produced.
     * Language of the movie.
     * Plot of the movie.
     * Actors in the movie.

   *If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'*

EXAMPLE:
![omdb](https://user-images.githubusercontent.com/53619333/68173754-f46d2580-ff49-11e9-97f6-6712c67833c3.png)


4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


### Technologies Used

* JavaScript
* Node.js
* BandsInTown API (via Axios npm module)
* Spotify API (via Stopify npm module)
* OMDB API (via Axios npm module)
