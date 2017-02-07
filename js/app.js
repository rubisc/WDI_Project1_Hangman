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
// Used in order to randomly pick a one of the phrases from each array (this variable's value is reassigned within each category's function)
function startPlayPage () {
  $('.button').hide()
  $('h2').hide()
  $('p').hide()
  $('#gallows-goes-here').html('<img src="./assets/hangman0.png">')
}
// To randomly select a string from the indicated array:
function renderMovieLines() {
  var randomlyPick = movieLines.splice(Math.floor(Math.random() * movieLines.length), 1);
  console.log(randomlyPick)
}
// Upon clicking the indicated  button, randomly select a phrase and hide contents of page:
$('#movie-line-button').on('click', function() {
  renderMovieLines()
  startPlayPage()
})

// To randomly select a string from the indicated array:
function renderMovieTvTitles() {
  randomlyPick = movieTvTitles.splice(Math.floor(Math.random() * movieTvTitles.length), 1);
  // console.log(movieTvTitles)
  console.log(randomlyPick)
}
// Upon clicking the indicated  button, randomly select a phrase and hide contents of page:
$('#movietvtitle-button').on('click', function() {
  renderMovieTvTitles()
  startPlayPage()
})
//
// To randomly select a string from the indicated array:
function renderMovieTvChar() {
  randomlyPick = movieTvChar.splice(Math.floor(Math.random() * movieTvChar.length), 1);
  console.log(randomlyPick)
}
// Upon clicking the indicated  button, randomly select a phrase and hide contents of page:
$('#movietv-char-button').on('click', function() {
  renderMovieTvChar()
  startPlayPage()
})
//
// To randomly select a string from the indicated array:
function renderTravelSpots() {
  randomlyPick = travelSpots.splice(Math.floor(Math.random() * travelSpots.length), 1);
  console.log(randomlyPick)
}
// Upon clicking the indicated  button, randomly select a phrase and hide contents of page:
$('#travel-button').on('click', function() {
  renderTravelSpots()
  startPlayPage()
})













//
