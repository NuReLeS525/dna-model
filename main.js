let duration = 1.3;
let delay = 0.05;
var dnaDuration = document.documentElement.style.setProperty('--dna-duration', duration.toString() + 's');
var dnaDelay = document.documentElement.style.setProperty('--dna-delay', delay.toString() + 's')
var dnaIteration = document.documentElement.style.setProperty('--dna-iteration', 'infinite')
var dnaName = document.documentElement.style.setProperty('--dna-name', 'rotation')

const up = document.getElementById("up");
const down = document.getElementById("down");

up.addEventListener("click", function(e) {
  duration = duration - 0.1;
  delay = delay + 0.01;
  document.documentElement.style.setProperty('--dna-duration', duration.toString() + 's');
  document.documentElement.style.setProperty('--dna-delay', delay.toString() + 's');
  console.log(duration);
});

down.addEventListener("click", function(e) {
  duration = duration + 0.1;
  delay = delay - 0.01;
  document.documentElement.style.setProperty('--dna-duration', duration.toString() + 's');
  document.documentElement.style.setProperty('--dna-delay', delay.toString() + 's');
  console.log(duration);
});


const pause = document.getElementById("pause");
var toggled = false;

function toggle() {
  if (!toggled) {
    toggled = true;
    document.documentElement.style.setProperty('--dna-iteration', '1');
    document.documentElement.style.setProperty('--dna-name', 'stop');
    document.documentElement.style.setProperty('--pause', 'none');
    document.documentElement.style.setProperty('--continue', 'inline');
    
    return;
  }
  if (toggled) {
    toggled = false;
    document.documentElement.style.setProperty('--dna-iteration', 'infinite');
    document.documentElement.style.setProperty('--dna-name', 'rotation');
    document.documentElement.style.setProperty('--pause', 'inline');
    document.documentElement.style.setProperty('--continue', 'none');
    return;
  }
}