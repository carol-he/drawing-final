const all = document.querySelector('#clouds');
const clouds = document.querySelectorAll('.cloud');

var leftpos = [];
var speeds = [];

for(var i = 0; i < clouds.length; i++){
  leftpos.push(Math.floor((Math.random() * 5) - 1) + i*15);
  speeds.push(((Math.random() * 2) + 2) * .005)
}


function moveClouds(){
  for (var i = 0; i < clouds.length; i++) {
    leftpos[i] += speeds[i];
    clouds[i].style.left = leftpos[i] + '%'; // move div by 5 pixels each time
    if(leftpos[i] > 100)
      leftpos[i] = -30;
  }
  requestAnimationFrame(moveClouds);
}
requestAnimationFrame(moveClouds);