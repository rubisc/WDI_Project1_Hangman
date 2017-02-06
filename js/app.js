console.log("Connection confirmed!")
// STRINGS TO GUESS
// Movie Lines Category
var movieLines = ["Say hello to my little friend", "May the force be with you", "Here's looking at you, kid", "Expecto Patronum!", "You can't sit with us", "Bond, James Bond", "I'm the king of the world!", "Why is the rum gone?", "There's no place like home", "Hakuna Matata"]
// Movie/TV Titles Category
var movieTvTitles = ["Fight Club", "The Matrix", "Titanic", "Jurassic Park", "John Wick", "The Holiday", "Harry Potter", "Fresh Prince of Bel Air", "Friends", "The Big Bang Theory"]
// Movie/TV Characters Category
var movieTvChar = ["Batman", "Harvey Specter", "Black Mamba", "Hermione Granger", "Vesper Lynd", "Rory Gilmore", "Tyler Durden", "Katniss Everdeen", "Sheldon Cooper", "Lagertha Lothbrok"]
// Travel Spots Category
var travelSpots = ["Taj Mahal", "Chichen Itza", "Great Wall of China", "Colosseum", "Eiffel Tower", "Teotihuacan Pyramids", "Times Square", "Golden Gate Bridge", "Machu Picchu", "The White House"]

// To randomly select a movie line:
function renderMovieLines() {
  var randomlyPick = movieLines.splice(Math.floor(Math.random() * movieLines.length), 1);
  console.log(randomlyPick)
}

$('#movie-line-button').on('click', function() {
  renderMovieLines()
})
//
function renderMovieTvTitles() {
  var randomlyPick = movieTvTitles.splice(Math.floor(Math.random() * movieTvTitles.length), 1);
  // console.log(movieTvTitles)
  console.log(randomlyPick)
}

$('#movietvtitle-button').on('click', function() {
  renderMovieTvTitles()
})
//
function renderMovieTvChar() {
  var randomlyPick = movieTvChar.splice(Math.floor(Math.random() * movieTvChar.length), 1);
  console.log(randomlyPick)
}

$('#movietv-char-button').on('click', function() {
  renderMovieTvChar()
})
//
function renderTravelSpots() {
  var randomlyPick = travelSpots.splice(Math.floor(Math.random() * travelSpots.length), 1);
  console.log(randomlyPick)
}

$('#travel-button').on('click', function() {
  renderTravelSpots()
})





//
