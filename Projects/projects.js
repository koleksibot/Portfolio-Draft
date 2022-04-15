
//SCROLL TO TOP ON REFRESH

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}








$("#nowtaxCap").css("opacity", "0");
$("#pomodoroCap").css("opacity", "0");
$("#gameCap").css("opacity", "0");
$("#meridianCap").css("opacity", "0");
$("#designCap").css("opacity", "0");
$("#moreCap").css("opacity", "0");



//BOX 1
$("#box1").mouseenter(
  function () {
    $("#nowtaxCap").addClass("animate__flipInX");
    $("#nowtaxCap").removeClass("animate__flipOutX");
    $("#nowtaxCap").css("opacity", "0.9");
    console.log("mouse entered")
  }
);



$("#box1").mouseleave(
  function () {
    $("#nowtaxCap").css("opacity", "0");
    $("#nowtaxCap").removeClass("animate__flipInX");
    $("#nowtaxCap").addClass("animate__flipOutX");
    console.log("mouse left")
  }
);




//BOX 2
$("#box2").mouseenter(
  function () {
    $("#pomodoroCap").addClass("animate__flipInX");
    $("#pomodoroCap").removeClass("animate__flipOutX");
    $("#pomodoroCap").css("opacity", "0.9");
    console.log("mouse entered")
  }
);



$("#box2").mouseleave(
  function () {
    $("#pomodoroCap").css("opacity", "0");
    $("#pomodoroCap").removeClass("animate__flipInX");
    $("#pomodoroCap").addClass("animate__flipOutX");
    console.log("mouse left")
  }
);


//BOX 3 GAMEs
$("#box3").mouseenter(
  function () {
    $("#gameCap").addClass("animate__flipInX");
    $("#gameCap").removeClass("animate__flipOutX");
    $("#gameCap").css("opacity", "0.9");
    console.log("mouse entered")
  }
);


$("#box3").mouseleave(
  function () {
    $("#gameCap").css("opacity", "0");
    $("#gameCap").removeClass("animate__flipInX");
    $("#gameCap").addClass("animate__flipOutX");
    console.log("mouse left")
  }
);


$("#box3").click(
  function () {
    $("#gamePopup").css("display", "block");
    $("#footer").addClass("blur");
    $("#row1").addClass("blur");
    $("#row2").addClass("blur");

  }
)







//BOX 4
$("#box4").mouseenter(
  function () {
    $("#meridianCap").addClass("animate__flipInX");
    $("#meridianCap").removeClass("animate__flipOutX");
    $("#meridianCap").css("opacity", "0.9");
    console.log("mouse entered")
  }
);



$("#box4").mouseleave(
  function () {
    $("#meridianCap").css("opacity", "0");
    $("#meridianCap").removeClass("animate__flipInX");
    $("#meridianCap").addClass("animate__flipOutX");
    console.log("mouse left")
  }
);


$("#box4").click(
  function () {
    $("#meridianPopup").css("display", "block");
    $("#footer").addClass("blur");
    $("#row1").addClass("blur");
    $("#row2").addClass("blur");

  }
)


$(".close").click(
  function () {
    $(".popup").css("display", "none");
    $("#footer").removeClass("blur");
    $("#row1").removeClass("blur");
    $("#row2").removeClass("blur");
  }
)





//BOX 5
$("#box5").mouseenter(
  function () {
    $("#designCap").addClass("animate__flipInX");
    $("#designCap").removeClass("animate__flipOutX");
    $("#designCap").css("opacity", "0.9");
  }
);



$("#box5").mouseleave(
  function () {
    $("#designCap").css("opacity", "0");
    $("#designCap").removeClass("animate__flipInX");
    $("#designCap").addClass("animate__flipOutX");
  }
);

$("#box5").click(
  function () {
    $("#designPopup").css("display", "block");
    $("#footer").addClass("blur");
    $("#row1").addClass("blur");
    $("#row2").addClass("blur");

  }
)




//BOX 6
$("#box6").mouseenter(
  function () {
    $("#moreCap").addClass("animate__flipInX");
    $("#moreCap").removeClass("animate__flipOutX");
    $("#moreCap").css("opacity", "0.9");
  }
);



$("#box6").mouseleave(
  function () {
    $("#moreCap").css("opacity", "0");
    $("#moreCap").removeClass("animate__flipInX");
    $("#moreCap").addClass("animate__flipOutX");
  }
);



$("#box6").click(
  function () {
    $("#morePopup").css("display", "block");
    $("#footer").addClass("blur");
    $("#row1").addClass("blur");
    $("#row2").addClass("blur");

  }
)



$("#closeContainer").click(
  function () {
    $(".popup").css("display", "none");
    $("#footer").removeClass("blur");
    $("#row1").removeClass("blur");
    $("#row2").removeClass("blur");
  }
)

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



