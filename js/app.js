console.log("Connection confirmed!")
// GLOBAL VARIABLES-STRINGS TO GUESS
// Movie Lines Category
var movieLines = ["Say hello to my little friend", "May the force be with you", "Here's looking at you, kid", "Expecto Patronum!", "You can't sit with us", "Bond, James Bond", "I'm the king of the world!", "Why is the rum gone?", "There's no place like home", "Hakuna Matata"]
// Movie/TV Titles Category
var movieTvTitles = ["Fight Club", "The Matrix", "Titanic", "Jurassic Park", "John Wick", "The Holiday", "Harry Potter", "Fresh Prince of Bel Air", "Friends", "The Big Bang Theory"]
// Movie/TV Characters Category
var movieTvChar = ["Batman", "Harvey Specter", "Black Mamba", "Hermione Granger", "Vesper Lynd", "Rory Gilmore", "Tyler Durden", "Katniss Everdeen", "Sheldon Cooper", "Lagertha Lothbrok"]
// Travel Spots Category
var travelSpots = ["Taj Mahal", "Chichen Itza", "Great Wall of China", "Colosseum", "Eiffel Tower", "Teotihuacan Pyramids", "Times Square", "Golden Gate Bridge", "Machu Picchu", "The White House"]

//Can I make this global?? but...depends on category.
// var randomlyPick =

// to set up play page:
function startPlayPage () {
  $('.button').hide()
  $('h2').hide()
  $('p').hide()
  $('#gallows-goes-here').html('<img src="./assets/hangman0.png">')
  var $guessInput = ('<input>')
  var $submitButton = ('<button>')
  $('#guess-side').append('<input><button>Submit Letter</button>')
}

// To randomly select a string from one of the arrays:
function renderPhrase(phrase) {
  var randomlyPick = phrase.splice(Math.floor(Math.random() * 10), 1).toString().split('');
  console.log(randomlyPick)
  var $blankLetters = $('<ul>', {class: 'letter-list'})
  randomlyPick.forEach(function(letter) {
    var $li = $('<li class="blank-letters">_</li>')
    $blankLetters.append($li)
  })
  $('body').append($blankLetters)
}

$('#movie-line-button').on('click', function() {
  renderPhrase(movieLines)
  startPlayPage()
})
// To randomly select a string from the indicated array:
$('#movietvtitle-button').on('click', function() {
  renderPhrase(movieTvTitles)
  startPlayPage()
})

// To randomly select a string from the indicated array:
$('#movietv-char-button').on('click', function() {
  renderPhrase(movieTvChar)
  startPlayPage()
})

// To randomly select a string from the indicated array:
$('#travel-button').on('click', function() {
  renderPhrase(travelSpots)
  startPlayPage()
})













//
