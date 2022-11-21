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


function setup () {
    createCanvas (800,800);
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
    rect(200, y, 100, 100);
    if (y>=700 || y<=500)
      movement *=-1
  y+=movement 
    rect(x, 200, 100, 100);
    if (x>=200 || x<=100)
      movement *=-1
  x+=movement 
  //player
  fill(120, 130, 140);
  circle(playerX, playerY, 10);
        if(keyIsDown(w))
          {
            playerY -= 5;
          }
          if(keyIsDown(s))
            {
              playerY += 5;
            }
            if(keyIsDown(a))
              {
                playerX -= 5;
              }
              if(keyIsDown(d))
                {
                  playerX += 5;
                }
  fill(255, 204, 100);
  square(mX, mY, 25);
  
  if(playerX > width -10 && playerY > width - 150);
    {
      fill("white");
      stroke(5);
      textSize(26);
      text("Wow You Did It", width -450, height -400);
    }

  
   
   
}
function mouseClicked()
{
  mX = mouseX;
  mY = mouseY;
}