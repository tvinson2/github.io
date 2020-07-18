var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');

/*
var myGamePiece;

function startGame() {
    myGamePiece = new component(150,300,"red",300, 550,);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1480;
        this.canvas.height = 800;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {

    this.type = type;
    this.width = width;
    this.height = height;
    this.speed = -5;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);        
        ctx.restore();    
    }
    this.newPos = function() {
        this.x += this.speed / -2;
        //this.x += this.speed * Math.sin(this.angle);
        //this.y += this.speed * Math.cos(this.angle);
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

*/
/////////// 3 Cups and Ball//////////
      ///Cup1///

function round1(){
var a1 = document.getElementById("canvas1");
var cup1 = a1.getContext("2d");
cup1.beginPath();
cup1.rect(300,550, 150, 100);
cup1.fillStyle = "ff0000"
cup1.fill();
cup1.stroke();
      ///Cup2///
var a2 = document.getElementById("canvas1");
var cup2 = a2.getContext("2d");
cup2.beginPath();
cup2.rect(640,550, 150, 100);
cup2.fillStyle = "ff0000"//yellow
cup2.fill();
cup2.stroke();
      ///Cup3///
var a3 = document.getElementById("canvas1");
var cup3 = a3.getContext("2d");
cup3.beginPath();
cup3.rect(985,550, 150, 100);
cup3.fillStyle = "ff0000"//yellow
cup3.fill();
cup3.stroke();
      ///Ball///
var ball = document.getElementById("canvas1");
var gameBall = ball.getContext("2d");
gameBall.beginPath();
gameBall.arc(375, 600, 10, 0, Math.PI*2);
gameBall.fillStyle = "fff000"//yellow
gameBall.fill();
gameBall.stroke();
}
////// Shuffle and ball dissappear function
function shuffCups(){ 
  gameBall.fillStyle = "ff0000";//red
  gameBall.fill();
  gameBall.strokeStyle = "ff0000";//red
  gameBall.stroke();
}


///// Movement
/*
create a shuffle movement that will just 
play into the predetermined shuffles 

*/
///// Scoreboard function

/*
give a point for every correct guess
first one to three wins
*/


///// Play/Choose button functions - Rounds
function shuff1(){ 
  guess = window.prompt("Choose a cup");
  if(guess==="1"){
    alert ("CORRECT!");
    alert ("Round 2")
      function nextPlay() {
        var firstRound = document.getElementById('child round1');
        firstRound.remove();
        playScore ()
    }
    nextPlay()
  }else{if(guess==="2"){
    alert ("NOPE! Try again");
  }else{
    if(guess==="3"){
    alert ("NOPE! Try again");
    }else{
      alert ("Please type the numbers 1,2, or 3")
      shuff1()
    }
  }
  }
}

function shuff2(){ 
  guess2 = window.prompt("Choose a cup");
  if(guess2==="1"){
    alert ("NOPE! Try Again");
  }else{if(guess2==="2"){
    alert ("Correct!");
    alert ("Round 3");
    function nextPlay2() {
      var secRound = document.getElementById('child round2');
      secRound.remove();
  }
  nextPlay2()
  }else{
    if(guess2==="3"){
    alert ("NOPE! Try again");
    }else{
      alert ("Please type the numbers 1,2, or 3")
      shuff2()
    }
  }
  }
}

function shuff3(){ 
  guess3 = window.prompt("Choose a cup");
  if(guess3==="1"){
    alert ("NOPE! Try again.");
  }else{if(guess3==="2"){
    alert ("NOPE!");
  }else{
    if(guess3==="3"){
    alert ("Correct!");
    alert ("Good game!");
    function nextPlay3() {
      var thirdRound = document.getElementById('child round3');
      thirdRound.remove();
  }
  nextPlay3()

    }else{
      alert ("Please type the numbers 1,2, or 3") 
      shuff3()
    }
  }
}
} 
round1()

