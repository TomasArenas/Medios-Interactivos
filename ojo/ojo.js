var a;
var b;
var c;

//color
var d = 0;
var e;
var g = 220;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();


}


function draw() {
  background(254,205,157);

  a = second();
  b = minute();
  c = hour();

  aa = map(a, 0, 59, 0, 255);
  bb = map(b, 0, 59, 255, 0);

  //color ojos
  cc = map(c, 0, 12, 255, 0);
  dd = map(c, 0, 12, 155, 0);
  ee = map(c, 0, 12, 55, 0);
//blanco

push();
  translate(width / 2, height / 2);
  fill(255);
  ellipse(0, 0, 600,300 );
pop();

//verde-azul
push();
  fill(0,155,bb);
   translate(width / 2, height / 2);
  ellipse(0,0,300,300);
  pop();

//negro-blanco

push();

  translate(width / 2, height / 2);
  rotate();

 
   fill(aa);
   ellipse(0,0,150,150);
   
  pop();
 
 if(c < 12){
 push();
  translate(width / 2, height / 2);
 
 
    fill(254,205,157,cc);
  ellipse(0, 0, 600,300 );
pop();
 }
}
