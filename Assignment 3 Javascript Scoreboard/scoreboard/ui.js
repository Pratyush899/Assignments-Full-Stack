const scoreDisplay = document.getElementById("scoreDisplay");
const summary = document.getElementById("summary");

function updateDisplay() {
  scoreDisplay.textContent = \`\${runs} / \${wickets} (\${getOvers()})\`;
  updateSummary();
}

function updateSummary() {
  summary.innerHTML = \`
    <strong>Match Summary:</strong><br>
    Total Runs: \${runs} (Extras: \${extras})<br>
    Wickets: \${wickets}<br>
    Overs: \${getOvers()}<br>
    Run Rate: \${getRunRate()}<br><br>
    <strong>Batsmen:</strong><br>
    \${batsmen[0].name} - \${batsmen[0].runs} runs<br>
    \${batsmen[1].name} - \${batsmen[1].runs} runs<br>
    <br>
    Status: \${wickets >= 10 || balls >= 120 ? "Innings Over" : "In Progress"}
  \`;
}
