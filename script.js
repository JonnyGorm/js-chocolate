var piecesOfChoc = Number(
  prompt("How many pieces of Chocolate would you like? Choose up to 10.")
);
var piecesLeftOver = 10 - piecesOfChoc;

if (piecesLeftOver === 10) {
  alert("Go on, treat yo' self!");
} else if (piecesLeftOver >= 7) {
  alert(`Still ${piecesLeftOver}, COME GET SOME!!!`);
} else if (piecesLeftOver >= 4) {
  alert(`Getting low, only ${piecesLeftOver}, better hurry!!!`);
} else if (piecesLeftOver >= 1) {
  alert(`Last chance, ONLY ${piecesLeftOver} PIECE OF CHOCOLATE LEFT!`);
} else {
  alert(`${piecesLeftOver} YOU MISSED OUT, TRY AGAIN NEXT TIME!!!`);
}
