let runs = 0;
let wickets = 0;
let balls = 0;
let extras = 0;
let batsmen = [{ name: "Batsman 1", runs: 0 }, { name: "Batsman 2", runs: 0 }];
let strikerIndex = 0;

function getOvers() {
  return \`\${Math.floor(balls / 6)}.\${balls % 6}\`;
}

function getRunRate() {
  return balls > 0 ? (runs / (balls / 6)).toFixed(2) : "0.00";
}
