var y = 600;
var movement = 2;
var x = 200;
var movement = 2;
var playerX = 750;
var playerY = 25;
var w = 87;
var s = 83;
var a = 65;
var d = 68;
var mX;
var mY;
var myXs = [];
var myYs = [];
var myDiameters = [];
var myXsSpeeds = [];
var myYsSpeeds = [];


function setup () {
    createCanvas (800,800);
  for (var i = 0; i < 25; i++) {
    myXsSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
        myYsSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
        myXs[i] = getRandomNumber(800);
        myYs[i] = getRandomNumber(800);
        myDiameters[i] = getRandomNumber(30);
}
}

function draw() {
    background(255, 254, 100);
 
    fill (0, 0, 0);
    rect(0, 0, 10, height);
    rect(0, height-10, width, 10);
    rect (width-10, 0, 10, height,70);
    rect(0,0,0);
    rect(0,0,100,500);
    rect(700, 50, 100, 400);
    rect(500, 50, 250, 400);
    rect(450, 50, 300, 600);
    rect(200, 20, 500, 500);
  Playermove ();
  MakeGuy ();
    fill('red')
  
    for (var i = 0; i < myXs.length; i++) {
    circle(myXs[i], myYs[i], myDiameters[i]);
    myXsSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 0)) + 1);
    myYsSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 0)) + 1);
     myXs[i] += myXsSpeeds[i];
        myYs[i] += myYsSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (myXs[i] >= width) {
            myXs[i] = 10;
        }
        if (myXs[i] < 10) {
            myXs[i] = width;
        }
        if (myYs[i] > height) {
            myYs[i] = 10;
        }
        if (myYs[i] < 10) {
            myYs[i] = height;
        } 
  
    }
}

function MakeGuy (){
  fill(120, 130, 140);
  circle(playerX, playerY, 10);
  }

  function Playermove (){
    if(keyIsDown(w)){
          if(playerY> 5)
            {
            playerY -= 5;
          }
        }
          if(keyIsDown(s)){
            if(playerY < 795)
              {
              playerY += 5;
            }
          }
            if(keyIsDown(a)){
              if(playerX > 5)
                {
                playerX -= 5;
              }
            }
              if(keyIsDown(d)){
                if(playerX < 795)
                  {
                  playerX += 5;
                }
              }
  fill(255, 204, 100);
  square(mX, mY, 25);
    if (mX>=780 || mX<=0)
   movement *=-1;
   mX+=movement;
  
  if(playerX > width-50 && playerY > width-350)
    {
      fill("white");
      stroke(5);
      textSize(26);
      text("Wow You Did It", width -450, height -400);
    }
}
        


  
   
  function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function mouseClicked()
{
  mX = mouseX;
  mY = mouseY;
}