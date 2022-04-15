let leftText = document.getElementById("leftText");
let rightText = document.getElementById("rightText");


$("#w3left").mouseenter(
    () => {
        leftText.style.opacity = "1";
       
    }
  )

  $("#w3left").mouseleave(
    () => {
        leftText.style.opacity = "0";

       
    }
  )


  $("#w3right").mouseenter(
    () => {
        rightText.style.opacity = "1";
       
    }
  )

  $("#w3right").mouseleave(
    () => {
        rightText.style.opacity = "0";
    
    }
  )

  let firstPage = document.getElementById("twoColumns");
  let secondPage = document.getElementById("journey");
  let leftArrow = document.getElementById("w3left");
  let title = document.getElementById("title");
  let aboutDescription = document.getElementById("aboutDescription");
  let skillIcons = document.getElementById("col2");
  let counter = 0;


function nextPage () {

    if (counter == 0){
        firstPage.classList.add("animate__backOutLeft");
        title.classList.remove("animate__bounceInDown");
        aboutDescription.classList.remove("animate__fadeIn");
        skillIcons.classList.remove("animate__fadeInUp");
        setTimeout(
            () => {firstPage.style.display = "none"}
            , 1000);
secondPage.style.display = "flex";
secondPage.classList.add("animate__backInLeft");
leftArrow.classList.add("animate__fadeIn");
counter++;
    }

else if (counter == 1){
counter++;
}

console.log(counter);
}


function backPage () {
    console.log("fun run");

    if (counter == 1){
secondPage.classList.remove("animate__backInLeft");
secondPage.classList.add("animate__backOutLeft");
setTimeout(
    () => {secondPage.style.display = "none"}
    , 1000);
firstPage.style.display = "flex";
firstPage.classList.remove("animate__backOutLeft");
firstPage.classList.add("animate__backInLeft");
leftArrow.classList.remove("animate__fadeIn");
leftArrow.classList.remove("animate__delay-1s");
leftArrow.classList.add("animate__fadeOut");
counter++;
    }


console.log(counter);
}




/*
  if (element.keys[37]) { person.style.left = xFixed }
  if (element.keys[39]) { console.log ("huh")}
  if (element.keys[38]) { console.log ("huh") }
  if (element.keys[40]) { console.log ("huh") }
  */
  


let elem = document.getElementById("bounceInfinite");
let positions = elem.getBoundingClientRect();

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

console.log(positions);

let person = document.getElementById("person");
let x = 5;

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
let topp = 44;
let right = 80;
let bottom = 45;
let left = 10;
let ind = 1;
let frames = 8;
let newLeft= left * ind;
let newRight = right * ind;
    /* TOP RIGHT BOTTOM LEFT */
let inset;
let clipPerson = document.getElementById("clipPerson");




//Mini Jumping Game
window.addEventListener('keydown', function (e) {
  let keyPressed = e.keyCode;

  if (keyPressed == 37){
    function cycle(i){

      if (i <= frames) {
        i++;
      }
    
      else if (i == (frames + 1)) {
    i = 0;
      }
    
      return i;
    }
    ind = cycle(ind);
    inset = stringIt(topp) + " " + stringIt(newRight) + " "
    + stringIt(bottom) + " " + stringIt(newLeft);
  }



  left = newLeft;
  right = newRight;

  clipPerson.style.clippath = inset;
  console.log(clipPerson.style.clippath);


})
