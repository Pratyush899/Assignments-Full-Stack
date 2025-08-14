function addRun(run) {
  runs += run;
  batsmen[strikerIndex].runs += run;
  addBall();
}

function addBall() {
  balls++;
  if (balls >= 120 || wickets >= 10) {
    alert("Innings over!");
  }
  updateDisplay();
}

function addWicket() {
  if (wickets < 10) {
    wickets++;
    batsmen[strikerIndex].name = "Batsman " + (wickets + 2); // simulate new batsman
    batsmen[strikerIndex].runs = 0;
  } else {
    alert("All out!");
  }
  addBall();
}

function addExtra(type) {
  extras++;
  runs++;
  // no ball or wide does not count as a legal delivery
  updateDisplay();
}

window.addRun = addRun;
window.addBall = addBall;
window.addWicket = addWicket;
window.addExtra = addExtra;
