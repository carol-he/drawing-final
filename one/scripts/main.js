const all = document.querySelector('#clouds');
const clouds = document.querySelectorAll('.cloud');
const grasses = document.querySelector('#grasses');
grasses.addEventListener('click', generateGrass);

var leftpos = [];
var speeds = [];

for(var i = 0; i < clouds.length; i++){
  leftpos.push(Math.floor((Math.random() * 5) - 1) + i*15);
  speeds.push(((Math.random() * 2) + 2) * .01 + .01);
}


function moveClouds(){
  for (var i = 0; i < clouds.length; i++) {
     leftpos[i] += speeds[i];
    clouds[i].style.left = leftpos[i] + '%'; // move div by 5 pixels each time
    if(leftpos[i] > 100)
      if(i == 6 || i == 5 || i == 3){
        leftpos[i] = -15;
      } else {
        leftpos[i] = -30;
      }
  }
  requestAnimationFrame(moveClouds);
}
requestAnimationFrame(moveClouds);

function generateGrass(){
  while (grasses.firstChild) {
      grasses.removeChild(grasses.firstChild);
    console.log("hello");
  }
  var grassLeft = -10;
  var grassType = Math.floor(Math.random() * 3) + 1;
  var grassHeight = Math.floor(Math.random() * 100) - 150;
  for(var i = 0; i < 8; i++) {
    var grass = document.createElement('div');
    grass.style.minWidth = "300px";
    grass.style.minHeight = "350px";
    grass.style.position = "fixed";
    grass.style.bottom = grassHeight + "px";
    grass.style.left = grassLeft + "%";
    grassLeft += Math.random() * 10 + 10;
    grass.style.backgroundImage = "url(media/grass" + grassType + ".png)";
    console.log("hello");
    document.getElementById("grasses").appendChild(grass);
    grassHeight = Math.floor(Math.random() * 100) - 150;
  }
}

generateGrass();