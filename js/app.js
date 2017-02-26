console.log("¡Lista, Rubs!")
// GLOBAL VARIABLES-STRINGS TO GUESS
// Movie Lines Category
var movieLines = ["Say hello to my little friend", "May the force be with you", "Here's looking at you, kid", "Expecto Patronum!", "You can't sit with us", "Bond, James Bond", "I'm the king of the world!", "Why is the rum gone?", "There's no place like home", "Hakuna Matata"]
// Movie/TV Titles Category
var movieTvTitles = ["Fight Club", "The Matrix", "Titanic", "Jurassic Park", "John Wick", "The Holiday", "Harry Potter", "Fresh Prince of Bel Air", "Friends", "The Big Bang Theory"]
// Movie/TV Characters Category
var movieTvChar = ["Batman", "Harvey Specter", "Black Mamba", "Hermione Granger", "Vesper Lynd", "Rory Gilmore", "Tyler Durden", "Katniss Everdeen", "Sheldon Cooper", "Lagertha Lothbrok"]
// Travel Spots Category
var travelSpots = ["Taj Mahal", "Chichen Itza", "Great Wall of China", "Colosseum", "Eiffel Tower", "Teotihuacan Pyramids", "Times Square", "Golden Gate Bridge", "Machu Picchu", "The White House"]
//to account for all wrong letters guessed
var wrongLetters = []
//To count missed guesses
var currentMisses = 0
//Series of hangman photos
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
  '<img src="./assets/hangman11.png">'
]
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
  var originalPhrase = phrase.splice(Math.floor(Math.random() * 10), 1).toString()
  var randomlyPick = originalPhrase.toUpperCase().split('');
  var $blankLetters = $('<ul>', {
    class: 'letter-list'
  })
  var ignoreChars = [' ', '\'', '?', '!', ','];
  for (var i = 0; i < randomlyPick.length; i++) {
    if (ignoreChars.indexOf(randomlyPick[i]) != -1) {
      $blankLetters.append('<li class="blank-letters">' + randomlyPick[i] + '</li>');
      continue;
    }
    $blankLetters.append('<li class="blank-letters">_</li>');
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
      for (var i = 0; i < randomlyPick.length; i++) {
        if (randomlyPick[i] === $playerGuess) {
          $('.blank-letters').eq(i).text($playerGuess)
          // win loss function callback
          $('#guess-slot').val('')
        }
      }
      //to keep track of the letters that have already been correctly guessed or do not need to be because they are punctuation characters
      var completed = 0
      $('.blank-letters').each(function(i, li) {
        if ($(li).text() !== '_') {
          completed++
        }
      })
      //if all index values of phrase are completed then we know the person won
      if (randomlyPick.length === completed) {
        //make it not display a letter in sample div
        $('h1').text("You win!")
        $('#gallows-goes-here').html('<img src="./assets/winGif.gif">')
        $('#guess-slot').hide()
        $('#sample-div').empty()
        setTimeout(function() {
          $('#enter-guess').text("Play again")
          $('#enter-guess').click(function() {
            location.reload();
          });
        }, 500)
      }
      //otherwise lose logic follows
    } else {
      currentMisses++
      if (currentMisses === 10) {
        setTimeout(function() {
          $('#gallows-goes-here').html('<img src="./assets/loseGif.gif">')
          $('h1').text("Oops, the correct answer was: " + originalPhrase)
        }, 1000)
        $('#guess-slot').hide()
        wrongLetters = []
        $('#sample-div').empty()
        setTimeout(function() {
          $('#enter-guess').text("Play again")
          $('#enter-guess').click(function() {
            location.reload();
          });
        }, 200)
      }
      //to display list of missed letters that player guessed
      wrongLetters.push($playerGuess)
      $('#sample-div').html(wrongLetters)
      $('#guess-slot').val('')
      $('#gallows-goes-here').html(hangmanPics[currentMisses])
    }
  })
}
