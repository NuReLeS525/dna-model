let n = document.getElementsByClassName("pair").length;
var root = document.documentElement;

for (let i = 16; i>0; i--) {
  console.log(i)
  console.log(0.05*i.toString()+'s')
  root.style.setProperty('--i', i.toString()+'s');
}