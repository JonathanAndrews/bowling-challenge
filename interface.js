$(document).ready(function () {
  var game = new Game
  console.log("document ready")

  $('#submit_score').on('click', function () {
    console.log("ahahah")
    var score = $('.score_input').val()
    game.roll(score)
    updateScore()
  })

  function updateScore() {
    $('#total_score').text(game.totalScore)
  }
})