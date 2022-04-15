
let clipPerson = document.getElementById("clipPerson");
let positions = clipPerson.getBoundingClientRect();

/*
bottom: 644.40625
height: 186.015625
left: 760.953125
right: 946.96875
top: 458.390625
width: 186.015625
x: 760.953125
y: 458.390625 


left/x and y/top*/


function stringItvMin(val) {
  let str;
  str = val.toString();
  return str + "vmin";
}

function stringIt(val) {
  let str;
  str = val.toString();
  return str;
}

//change image
let spriteWidth = -190.4;
let ind = 0;
let frames = 7;
let x;






//Mini Jumping Game
window.addEventListener('keydown', function (e) {
  let keyPressed = e.keyCode;

  if (keyPressed == 37){
    function cycle(i){

      if (i < frames) {
        i++;
      }
    
      else if (i == frames ){
    i = 0;
      }
    
      return i;
    }
    console.log(ind);
    ind = cycle(ind);

    x = stringIt(spriteWidth * ind) + "px";

  }

clipPerson.style.backgroundPosition = x + " " + "0px";


 


})
