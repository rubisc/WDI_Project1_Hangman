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

var currentMisses = 0

var hangmanPics = [
  '<img src="./assets/hangman1.png">',
  '<img src="./assets/hangman2.png">',
  '<img src="./assets/hangman3.png">',
  '<img src="./assets/hangman4.png">',
  '<img src="./assets/hangman5.png">',
  '<img src="./assets/hangman6.png">',
  '<img src="./assets/hangman7.png">',
  '<img src="./assets/hangman8.png">',
  '<img src="./assets/hangman9.png">',
  '<img src="./assets/hangman10.png">',
  '<img src="./assets/hangman11.png">']

// var ignoreChar = [" ", ",", "'", "?", "!"]

// category1
$('#movie-line-button').on('click', function() {
  renderPhrase(movieLines)
})
// category2
$('#movietvtitle-button').on('click', function() {
  renderPhrase(movieTvTitles)
})
// category3
$('#movietv-char-button').on('click', function() {
  renderPhrase(movieTvChar)
})
// category4
$('#travel-button').on('click', function() {
  renderPhrase(travelSpots)
})
// to randomly select a phrase from one of the arrays and then display dashes:
function renderPhrase(phrase) {
  var randomlyPick = phrase.splice(Math.floor(Math.random() * 10), 1).toString().toUpperCase().split('');
  console.log(randomlyPick)
  var $blankLetters = $('<ul>', {class: 'letter-list'})
  for (var i=0; i < randomlyPick.length; i++) {
    if (randomlyPick[i] === " ") {
      var $li = $('<li class="blank-letters"> </li>')
      $blankLetters.append($li)
    } else if (randomlyPick[i] === "'") {
      var $li = $('<li class="blank-letters">\'</li>')
      $blankLetters.append($li)
    } else if (randomlyPick[i] === "?") {
        var $li = $('<li class="blank-letters">?</li>')
        $blankLetters.append($li)
    } else if (randomlyPick[i] === "!") {
        var $li = $('<li class="blank-letters">!</li>')
        $blankLetters.append($li)
    } else if (randomlyPick[i] === ",") {
        var $li = $('<li class="blank-letters">,</li>')
        $blankLetters.append($li)
    } else {
    var $li = $('<li class="blank-letters">_</li>')
    $blankLetters.append($li)
    }
  }

  $('body').append($blankLetters)
  $('.button').hide()
  $('h2').hide()
  $('p').hide()
  $('#gallows-goes-here').html('<img src="./assets/hangman0.png">')
  $('#guess-side').append('<input id="guess-slot"><button id="enter-guess">Submit Letter</button>')
  $('#enter-guess').on('click', function() {
    var $playerGuess = $('#guess-slot').val().toUpperCase()
    if (randomlyPick.includes($playerGuess)) {
      console.log("correct")
      for (var i = 0; i < randomlyPick.length; i++) {
        if (randomlyPick[i] === $playerGuess) {
          $('.blank-letters').eq(i).text($playerGuess)
          $('#guess-slot').val('')
        }
      }
    } else {
      currentMisses++
      console.log("incorrect")
      $('#sample-div').text($playerGuess)
      $('#guess-slot').val('')
      $('#gallows-goes-here').html(hangmanPics[currentMisses])
    }
  })
}
