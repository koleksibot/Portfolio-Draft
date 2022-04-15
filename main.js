
//SCROLL TO TOP ON REFRESH

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}






/* Girl sayings */

let greeting = document.getElementById("hi");
let bounceInfinite = document.getElementById("bounceInfinite");
let fallingGirl = document.getElementById("girl");
let cloud = document.querySelectorAll(".cloud");
let browse = document.getElementById("browse");


function addFloat() {


  setTimeout(() => {

    for (const aCloud of cloud) {
      console.log("timed out");
      aCloud.classList.remove("animate__fadeInDown");
      aCloud.classList.remove("animate__animated");
  aCloud.classList.add("float");
    }

  }
    , 1500);


  }


addFloat();


setTimeout(startAni, 10000);


function startAni() {
  greeting.classList.add("animate__fadeIn");
  console.log("startAni started");


  setTimeout(noMoreHi
    , 4000);

}

function noMoreHi() {
  console.log("second counter started");
  greeting.classList.remove("animate__fadeIn");
  greeting.classList.add("animate__fadeOut");
  browse.classList.add("animate__fadeIn");
  fallingGirl.style.opacity = "0";
  bounceInfinite.style.opacity = "1";
}



// reset a gif:
fallingGirl.src = "./Stunned fixed shortt.gif" + "?a=" + Math.random();






//items

let name1 = document.getElementById("item1Name");


$("#coin1").mouseenter(
  () => {
      name1.style.opacity = "0.7";
      console.log("mouse entered");
     
  }
)


$("#coin1").mouseleave(
  () => {
      name1.style.opacity = "0";
      console.log("mouse left");
     
  }
)






