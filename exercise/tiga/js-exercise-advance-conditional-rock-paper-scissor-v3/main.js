function rockPaperScissor(player1, player2) {

  if (player1 === "paper" && player2 === "paper" || player1 === "rock" && player2 === "rock" ||
    player1 === "scissor" && player2 === "scissor") {
    return `Draw!`
  }

  if ((player1 === "paper" || player2 === "paper") && (player1 === "rock" || player2 === "rock")) {
    if (player1 === "paper") {
      return `Player 1 Won!jo`
    } else {
      return `Player 2 Won!`
    }
  } else if ((player1 === "rock" || player2 === "rock") && (player1 === "scissor" || player2 === "scissor")) {
    if (player1 === "rock") {
      return `Player 1 Won!ha`
    } else {
      return `Player 2 Won!`
    }
  } else if ((player1 === "scissor" || player2 === "scissor") && (player1 === "paper" || player2 === "paper")) {
    if (player1 === "scissor") {
      return `Player 1 Won!1`
    } else {
      return `Player 2 Won!`
    }
  }
}

console.log(rockPaperScissor('scissor', 'paper')); // "Player 1 Won!"
console.log(rockPaperScissor('rock', 'paper')); // "Player 2 Won!"
console.log(rockPaperScissor('paper', 'paper')); // "Draw!"
console.log(rockPaperScissor('rock', 'rock')); // "Draw!"
console.log(rockPaperScissor('paper', 'rock')); // "Draw!"
console.log(rockPaperScissor('scissor', 'rock')); // "Draw!"

module.exports = rockPaperScissor;
