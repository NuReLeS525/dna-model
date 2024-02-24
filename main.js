const up = document.getElementById("up");
const down = document.getElementById("down");
let duration = 1.3;
var dnaDuration = document.documentElement.style.setProperty('--dna-duration', duration.toString() + 's');


up.addEventListener("click", function(e) {
  duration = duration - 0.1;
  document.documentElement.style.setProperty('--dna-duration', duration.toString() + 's');
  console.log(duration)
});

down.addEventListener("click", function(e) {
  duration = duration + 0.1;
  document.documentElement.style.setProperty('--dna-duration', duration.toString() + 's');
  console.log(duration)
});

const pause = document.getElementById("pause");

// pause.addEventListener("click", function(e) {
//   document.documentElement.style.setProperty('--dna-duration', '0s')
// });

var toggled = false;
function toggle() {
  if (!toggled) {
    toggled = true;
    document.documentElement.style.setProperty('--dna-duration', '0s');
    return;
  }
  if (toggled) {
    toggled = false;
    document.documentElement.style.setProperty('--dna-duration', duration.toString() + 's')
    return;
  }
}