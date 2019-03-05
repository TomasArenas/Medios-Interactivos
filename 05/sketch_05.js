var x = 0;
var y = 0;
var w = 0;

var a = 0;
var b = 0;

var xE = 0;
var yE = 0;

//colores

var r1 = 255;
var r2 = 255;
var g1 = 244;
var g2 = 244;
var b1 = 61;
var b2 = 61;
var m1 = 232;
var m2 = 34;
var m3 = 61;

//direccion
var f = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xE = random(0,width);
  yE = random(0,height);
  noStroke();
}

function draw() {
  background(0);
  // MSPAcman x y
  fill(r1,g1,b1);
  ellipse(x, y, 50, 50);
    fill(m1,m2,m3);
  ellipse(x-20, y-20, 15, 15);
  triangle( x-20, y-20, x-40, y-20, x-20, y);
  triangle( x-20, y-20, x-20, y-40, x, y-20);
   fill(0);
  triangle(x-5,y,x+40,y-30,x+40,y+30);
 
  
   //pacman a  b
    fill(r2,g2,b2);
  ellipse(a, b, 50, 50);
   fill(0);
  triangle(a+5,b,a-40,b+30,a-40,b-30);
  
  //pellet
  fill(255);
  rect(xE, yE, 20, 20,5);
  
 //salto de pellet
  print(dist(x,y,xE,yE));
  if(dist(x,y,xE,yE) < 30) {
      xE = random(0,width);
  yE = random(0,height);
  r2 = r2 - 20
  g2 = g2 - 20
  b2 = b2 - 4
  }
  
    print(dist(x,y,xE,yE));
  if(dist(a,b,xE,yE) < 30) {
      xE = random(0,width);
  yE = random(0,height);
    r1 = r1 - 20
  g1 = g1 - 20
  b1 = b1 - 4
  m1 = m1 - 20
  m2 = m2 - 2
  m3 = m3 - 4
  }

 
  
 //ms pacman xy
    if( x > windowWidth){
    x = 0
    }
    if( x < -1){
    x = windowWidth
    }
    if( y > windowHeight){
    y = 0
    }
    if( y < -1){
    y = windowHeight
    }
    
  if ( keyIsPressed === true ) {

    if (keyCode === RIGHT_ARROW) {
      x = x + 5;
      f = 0
    }
    if (keyCode === LEFT_ARROW) {
      x = x - 5;
    }
    if (keyCode === UP_ARROW) {
      y = y - 5;
    }
    if (keyCode === DOWN_ARROW) {
      y = y + 5;
    }
    if (key == ' ') {
      x = windowWidth / 2 ; 
      y = windowHeight / 2 ;
    }
 
  
  //pacman ab
  
   if( a > windowWidth){
    a = 0
    }
    if( a< -1){
    a = windowWidth
    }
    if( b> windowHeight){
    b = 0
    }
    if( b< -1){
    b = windowHeight
    }
 
    if (keyCode === 68) {
      a = a + 5;
    }
    if (keyCode === 65) {
      a = a - 5;
    }
    if (keyCode === 87) {
      b = b - 5;
    }
    if (keyCode === 83) {
      b = b + 5;
    }
    if (key == ' ') {
      x = windowWidth / 2 ; 
      y = windowHeight / 2 ;
    }
    if (key == ' ') {
      a = windowWidth / 2 ; 
      b = windowHeight / 2 ;
    }
    
    //reinicio
    if (key == ' ') {
r1 = 255;
r2 = 255
g1 = 244
g2 = 244
b1 = 61
b2 = 61
m1 = 232
m2 = 34
m3 = 61
      
      
    }
 }
  
}
