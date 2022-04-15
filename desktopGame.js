


function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
}

function vmin(v) {
    return Math.min(vh(v), vw(v));
}

function vmax(v) {
    return Math.max(vh(v), vw(v));
}


let myGamePiece;
let myScore;
let mySound;
let myObstacles = [];
let GRAVITY = 0.5;
let img = new Image();
img.src = './Images/flying.png';
let loopcycle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let loopInd = 0;
let frameInd = 0;
let play = false;
let touched = false;




/*function component(width, height, color, x, y, type) */
function startGame() {
    myGamePiece = new component(160, 105, "./Images/flying.png", 13, vh(40), "image");
    myScore = new component("30px", "Verdana", "white", vw(3), vh(13), "text");
    mySound = new sound("./sound/working.mp3");
    console.log("started game, sound played")
    if (play == true) {
        myGameArea.start();
        mySound.play();
    }
}

//----------When play again button is clicked--------//


function restart() {
play = true;
    document.getElementById("controls").style.display = "none";
    document.getElementById("controlTitle").style.display = "none";
    document.getElementById("tap").style.display = "none";

    $("#controlContainer").css("display", "flex");
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("game").style.display = "flex";

    if ($(window).width() >= 480) {
        document.getElementById("controls").style.display = "flex";
        document.getElementById("controlTitle").style.display = "flex";
        document.getElementById("pressUp").style.display = "flex";
    }

    if ($(window).width() < 480) {
        document.getElementById("tap").style.display = "flex";
        document.getElementById("tapToPlay").style.display = "flex";
    }

    startGame();

}


//----------When play button is clicked--------//
function playButton() {

    play = true;
    console.log("play button was pressed ");
    document.getElementById("girl").style.display = "none";
    document.getElementById("bounceInfinite").style.display = "none";
    document.getElementById("hi").style.display = "none";
    document.getElementById("browse").style.display = "none";
    document.getElementById("flyUp").style.opacity = "1";

    if ($(window).width() >= 480) {
        document.getElementById("flyUp").style.animation = "flyAway 3s cubic-bezier(.83,.48,.41,.37) 1s forwards";
        document.getElementById("controls").style.display = "flex";
        document.getElementById("controlTitle").style.display = "flex";
        document.getElementById("pressUp").style.display = "flex";
    }

    if ($(window).width() < 480) {
        document.getElementById("flyUp").style.animation = "flyAway3 3s cubic-bezier(.83,.48,.41,.37) 1s forwards";
        document.getElementById("tap").style.display = "flex";
        document.getElementById("tapToPlay").style.display = "flex";
    }


    document.getElementById("playButton").style.display = "none";
    document.getElementById("projectsButton").style.display = "none";
    setTimeout(() => {
        document.getElementById("centerTitles").style.display = "none";
        document.getElementById("controlContainer").style.display = "flex";
        startGame();
    }, 4500)




}

let theInterval;

var myGameArea = {
    canvas: document.createElement("canvas"),

    start: function () {
  
        this.canvas.width = vw(100);

            this.canvas.height = vh(100);


        this.canvas.style.background = "#212127";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.frameNo = 0;


        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;

            if ((myGameArea.keys[38]) && (play == true) && ($(window).width() >= 480) ) { 
                myGamePiece.speedY = -5;
                ctx = myGameArea.context;
                ctx.drawImage(img,
                    loopInd * myGamePiece.width, 60, myGamePiece.width, myGamePiece.height,
                    myGamePiece.x, myGamePiece.y, myGamePiece.width, myGamePiece.height);
    
                    console.log("start the game after up key");
                    myGameArea.clear();
        
                    ctx.drawImage(img,
                        loopInd * myGamePiece.width, 60, myGamePiece.width, myGamePiece.height,
                        myGamePiece.x, myGamePiece.y, myGamePiece.width, myGamePiece.height);
        
                    //after 3seconds of GO, get rid of the control container and begin game
        
                    theInterval = setInterval(updateGameArea, 20);
                    document.getElementById("controlContainer").style.display = "none";
    
                    play = false;
        
            }
        })

        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
        })

        //touch compatible for mobile only
   
        window.addEventListener('touchstart', function (e) {
            myGamePiece.speedY = -5;
            touched = true;

            if (play == true){
                console.log("THSITHISHTI")
                mySound.play();
                myGameArea.clear();
                ctx = myGameArea.context;
                ctx.drawImage(img,
                    loopInd * myGamePiece.width, 60, myGamePiece.width, myGamePiece.height,
                    myGamePiece.x, myGamePiece.y, myGamePiece.width, myGamePiece.height);
    
                //after 3seconds of GO, get rid of the control container and begin game
    
                theInterval = setInterval(updateGameArea, 20);
                document.getElementById("controlContainer").style.display = "none";

                play = false;
                }
   
        
}) 

        window.addEventListener('touchend', function (e) {
            touched = false;
        })

/*
        if (play == true) {
            //READY?

            ctx = myGameArea.context;
            ctx.drawImage(img,
                loopInd * myGamePiece.width, 60, myGamePiece.width, myGamePiece.height,
                myGamePiece.x, myGamePiece.y, myGamePiece.width, myGamePiece.height);


            myGameArea.clear();
            ctx.font = "bold 55px verdana";
            ctx.fillStyle = "white";
            ctx.fillText("GO!", vw(45), vh(50));

            ctx.drawImage(img,
                loopInd * myGamePiece.width, 60, myGamePiece.width, myGamePiece.height,
                myGamePiece.x, myGamePiece.y, myGamePiece.width, myGamePiece.height);

            //after 3seconds of GO, get rid of the control container and begin game

            theInterval = setInterval(updateGameArea, 20);
            document.getElementById("controlContainer").style.display = "none";


        } */


    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        console.log(theInterval);
        clearInterval(theInterval);
        myObstacles = [];
    }
}




/*--------------------------------------------*/
/*------------SOUND CONSTRUCTOR-----------*/
/*--------------------------------------------*/

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}


function stopMusic() {
    mySound.stop();
    console.log("sound was paused");
}

/*--------------------------------------------*/
/*------------COMPONENT CONSTRUCTOR-----------*/
/*--------------------------------------------*/
function component(width, height, color, x, y, type) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.type = type;


    this.update = function () {
        if (this.type == "image") {
            ctx = myGameArea.context;

            ctx.drawImage(img,
                loopInd * this.width, 60, this.width, this.height,
                this.x, this.y, this.width, this.height);

            frameInd++;

            if (frameInd == 10) {
                frameInd = 0;
                loopInd++;
            }


            if (loopInd >= loopcycle.length) {
                loopInd = 0;
            }

        }

        else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }

        else {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    this.crashWith = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop + 70) || (mytop > otherbottom - 21) || (myright < otherleft + 80) || (myleft > otherright - 21)) {
            crash = false;
        }

        return crash;
    }
}



/*--------------------------------------------*/
/*---------------UPDATE GAME AREA-------------*/
/*--------------------------------------------*/
function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;



    //if a collision happens or game piece goes out of bounds, game over.
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i]) || (myGamePiece.y > myGameArea.canvas.height) ||
            (myGamePiece.x < 0) || (myGamePiece.y < -55) || (myGamePiece.x > myGameArea.canvas.width)) {
            mySound.stop();
            console.log("sound was stopped");
            document.getElementById("playAgain").style.display = "flex";
            document.getElementById("back").style.display = "flex";
            document.getElementById("game").style.display = "flex";
            document.getElementById("gameOver").style.display = "block";
            myGameArea.stop();
            return;
        }
    }



    myGameArea.clear();



    //if a key is presssed
    myGamePiece.speedX = 0;
    myGamePiece.speedY += GRAVITY;
    if (myGameArea.keys && myGameArea.keys[37]) { myGamePiece.speedX = -2; }
    if (myGameArea.keys && myGameArea.keys[39]) { myGamePiece.speedX = 2; }
    if (myGameArea.keys && myGameArea.keys[38]) { myGamePiece.speedY = -5; }
    if (myGameArea.keys && myGameArea.keys[40]) { myGamePiece.speedY = 5; }
    if (touched) { myGamePiece.speedY = -5; }



    myGameArea.frameNo += 1;



    /*--------------------------------------------*/
    /*----------GENERATE RANDOM OBSTACLES---------*/
    /*--------------------------------------------*/
    let minInterval = 170;
    let obstColor;
    //As time passes (using frameNo), cluster obstacles closer together
    if ((myGameArea.frameNo >= 0) && (myGameArea.frameNo <= 500)) {
        if ($(window).width() >= 480) {
        minInterval = 90; }

        else {
            minInterval = 75;
        }
        obstColor = "rgb(255, 232, 132)";
    }

    if ((myGameArea.frameNo > 500) && (myGameArea.frameNo <= 950)) {
        if ($(window).width() >= 480) {
        minInterval = 70; }

        else {
            minInterval = 73;
        }
        obstColor = "rgb(132, 255, 169)";
    }

    if ((myGameArea.frameNo > 950) && (myGameArea.frameNo <= 1100)) {
        if ($(window).width() >= 480) {
        minInterval = 60; }

        else {
            minInterval = 70;
        }
        obstColor = "rgb(255, 49, 49)";
    }

    if ((myGameArea.frameNo > 1100) && (myGameArea.frameNo <= 1300)) {
        if ($(window).width() >= 480) {
        minInterval = 30;}
        else { minInterval = 67;}
        obstColor = "rgb(255, 49, 49)";
    }

    if ((myGameArea.frameNo > 1300) && (myGameArea.frameNo <= 1500)) {
        if ($(window).width() >= 480) {
        minInterval = 25;}
        else { minInterval = 65;}
        obstColor = "rgb(255, 49, 49)";
    }

    if (myGameArea.frameNo > 1500) {
        if ($(window).width() >= 480) {
        minInterval = 20; }
       else { minInterval = 60;}
        obstColor = "rgb(17, 227, 255)";
    }



    if (myGameArea.frameNo == 1 || everyinterval(minInterval)) {
        x = myGameArea.canvas.width;
        /*
        minHeight = 40;
        maxHeight = 150;
        */
        if ($(window).width() >= 480) {
            minHeight = vh(20);
            maxHeight = vh(50);
        }

        if ($(window).width() < 480) {
            minHeight = vh(15);
            maxHeight = vh(55);
        }

        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 100;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new component(10, height, obstColor, x, 0, null));
        myObstacles.push(new component(10, x - height - gap + 500, obstColor, x, height + gap, null));
    }

    for (i = 0; i < myObstacles.length; i += 1) {



    if ((myGameArea.frameNo >= 0) && (myGameArea.frameNo <= 500)) {
        if ($(window).width() >= 480) {
            myObstacles[i].x += -3; }

            else { myObstacles[i].x += -2; }
        }

        else if ((myGameArea.frameNo > 500) && (myGameArea.frameNo <= 950)) {
            if ($(window).width() >= 480) {
            myObstacles[i].x += -5; }
            else { myObstacles[i].x += -3;}
        }

        else if ((myGameArea.frameNo > 950) && (myGameArea.frameNo <= 1100)) {
            if ($(window).width() >= 480) {
            myObstacles[i].x += -7; }
            else { myObstacles[i].x += -3.5;}
        }

        else {
            if ($(window).width() >= 480) { 
                myObstacles[i].x += -8;}

                else {myObstacles[i].x += -4;}
        }


        myObstacles[i].update();
    }


    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
    return false;
}


