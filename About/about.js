
//SCROLL TO TOP ON REFRESH

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}



//copy email button

const emailButton = document.getElementById("copyEmail");
emailButton.addEventListener('click', copyEmail);

const emailButton2 = document.getElementById("copyEmail2");
emailButton2.addEventListener('click', copyEmail2);

function copyEmail(){
  navigator.clipboard.writeText("jennyunh@gmail.com");

  document.getElementById('copyEmail').innerHTML= "Email was Copied!";
}

function copyEmail2(){
  navigator.clipboard.writeText("jennyunh@gmail.com");

  document.getElementById('copyEmail2').innerHTML= "Email was Copied!";
}



//popups
let popup = false;



$("#close").click(
  function () {
    popup = false;
    $("#skillSection").removeClass("animate__bounceIn");
    $("#skillSection").css("display", "none");
    $("#contactSection").removeClass("animate__bounceIn");
    $("#contactSection").css("display", "none");
    $("#twoColumns").removeClass("blur");
    $("#journey").removeClass("blur");
    $("#twoColumns").addClass("opacityOne");
    $("#journey").addClass("opacityOne");
    

  }
)

$("#skillsButton").click(
  function () {
    popup = true;
    $("#skillSection").css("display", "block");
    $("#skillSection").addClass("animate__bounceIn");
    $("#twoColumns").removeClass("opacityOne");
    $("#journey").removeClass("opacityOne");
    $("#twoColumns").addClass("blur");
    $("#journey").addClass("blur");
 
  }
)



$("#contactButton").click(
  function () {
    popup = true;
    $("#contactSection").css("display", "block");
    $("#contactSection").addClass("animate__bounceIn");
    $("#twoColumns").removeClass("opacityOne");
    $("#journey").removeClass("opacityOne");
    $("#twoColumns").addClass("blur");
    $("#journey").addClass("blur");
 
  }
)


$("#close2").click(
  function () {
    popup = false;
    $("#skillSection").removeClass("animate__bounceIn");
    $("#skillSection").css("display", "none");
    $("#contactSection").removeClass("animate__bounceIn");
    $("#contactSection").css("display", "none");
    $("#twoColumns").removeClass("blur");
    $("#journey").removeClass("blur");
    $("#twoColumns").addClass("opacityOne");
    $("#journey").addClass("opacityOne");
  }
)













/*------------------------------------------*/
/*----------INTERSECTION OBSERVER-----------*/
/*------------------------------------------*/
//Start of janky code
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if ((entry.isIntersecting) && (entry.target.id == "journeyTitle")) {
      // Add the animation class
      entry.target.classList.add('animate__fadeInUp');

    }

    if ((entry.isIntersecting) && (entry.target.id == "colj11")) {
      entry.target.classList.add('animate__fadeInUp');

    }

    if ((entry.isIntersecting) && (entry.target.id == "colj22")) {
      entry.target.classList.add('animate__fadeInUp');

    }

    if ((entry.isIntersecting) && (entry.target.id == "colj33")) {
      entry.target.classList.add('animate__fadeInUp');

    }

    if ((entry.isIntersecting) && (entry.target.id == "lastcolj")) {
      entry.target.classList.add('animate__fadeInUp');

    }




  });
});


//janky af
let div1 = document.querySelector('#journeyTitle');
let div2 = document.querySelector('#colj11');
let div3 = document.querySelector('#colj22');
let div4 = document.querySelector('#colj33');
let div5 = document.querySelector('#lastcolj');


observer.observe(div1);
observer.observe(div2);
observer.observe(div3);
observer.observe(div4);








/*------------------------------------------*/
/*-----ACTIVATE ONSCROLL FUNCTION-----------*/
/*------------------------------------------*/
window.onscroll = function () {
  console.log("WINDOW WAS SCROLLED")
  scrollFunctions();
};


let nav =    document.getElementById("nav");


//Hide Nav bar when scroll down function:
var prevScrollpos = window.pageYOffset;


function scrollFunctions() {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);

  /* IF SCROLL POSITION IS GREATER THAN 0PX, AND LESS THAN 30PX
  SHOW THE NAV BAR
  */
  if ((currentScrollPos >= 0) && (currentScrollPos < 30)) {
    nav.style.top = "0";
  }

  /* IF SCROLL POSITION IS GREATER THAN 30PX, AND LESS THAN 550PX
  HIDE THE NAV BAR
  */
  if (currentScrollPos >= 30)  {
    nav.style.top = "-60px";
  }

  /*If scrolling up, show nav bar.
  */
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
    nav.style.background = "black";
    
  }



  prevScrollpos = currentScrollPos;




}



