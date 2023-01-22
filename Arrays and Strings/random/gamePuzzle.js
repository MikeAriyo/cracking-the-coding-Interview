// You have a basketball hoop and someone says that you can play one of two games.
// Game 1: You get one shot to make the hoop.
// Game 2: You get three shots and you have to make two of three shots.
// If p is the probability of making a particular shot, for which values of p should you pick one game  or the other?

function chooseGame(p) {
  // probability of winning Game 1
  let game1 = p;

  // probability of winning Game 2
  let game2 =
    3 * Math.pow(p, 2) * Math.pow(1 - p, 1) +
    3 * Math.pow(p, 1) * Math.pow(1 - p, 2);

  if (game1 > game2) {
    return "Game 1";
  } else if (game2 > game1) {
    return "Game 2";
  } else {
    return "Both games have the same probability of winning";
  }
}

let p = 0.5;
console.log(chooseGame(p));
