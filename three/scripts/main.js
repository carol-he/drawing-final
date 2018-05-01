const all = document.querySelector('#lights');
const lights = document.querySelectorAll('.light');

var leftpos = [];
var speeds = [];

for(var i = 0; i < lights.length; i++){
  leftpos.push(Math.random() + .3);
  speeds.push(((Math.random() * .7) + 2) * .004)
}


function fadeLights(){
  for (var i = 0; i < lights.length; i++) {
    leftpos[i] -= speeds[i];
    lights[i].style.opacity = leftpos[i]; // move div by 5 pixels each time
    if(leftpos[i] <= .3 || leftpos[i] >= 1)
      speeds[i] *= -1;
  }
  requestAnimationFrame(fadeLights);
}
requestAnimationFrame(fadeLights);