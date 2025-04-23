
const canvas = document.getElementById("slot");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin");
let credits = 1000;
const creditDisplay = document.getElementById("credits");

const symbols = ["⚽", "🥅", "WILD", "BONUS"];
function drawReel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < 5; i++) {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    ctx.fillText(symbol, 50 * i + 20, 100);
  }
}

spinBtn.onclick = () => {
  if (credits <= 0) return;
  credits -= 10;
  drawReel();
  credits += Math.floor(Math.random() * 50); // vincita casuale
  creditDisplay.textContent = credits;
};
ctx.font = "30px Arial";
drawReel();
