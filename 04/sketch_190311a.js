var a = 10;
var b = 10;
var c = 40;

var a1 = 10;
var b1 = 60;
var c1 = 40;

var a2 = 10;
var b2 = 110;
var c2 = 40;

var a3 = 10;
var b3 = 160;
var c3 = 40;

var a4 = 10;
var b4 = 210;
var c4 = 40;

var a5 = 10;
var b5 = 310;
var c5 = 40;

var a6 = 10;
var b6 = 360;
var c6 = 40;

var a7 = 10;
var b7 = 410;
var c7 = 40;

var a8 = 10;
var b8 = 460;
var c8 = 40;

var a9 = 10;
var b9 = 510;
var c9 = 40;

var a10 = 60;
var b10 = 10;
var c10 = 40;

var a11 = 10;
var b11 = 210;
var c11 = 40;

var col = 0;
var sel = 0; 
var pro;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noStroke();

  //Botones
  push();
  fill(0,0,255);
  rect(a, b, c, c);
  pop();
  
  push();
  fill(255,0,0);
  rect(a1, b1, c1, c1);
  pop();
  
  push();
  fill(0,255,0);
  rect(a2, b2, c2, c2);
  pop();
  
  push();
  fill(255);
  rect(a3, b3, c3, c3);
 pop();
 
 push();
 fill(155,0,155);
  rect(a11, b11, c11, c11);
 pop();
 
 
 fill(255);
  rect(a5, b5, c5, c5);
  push();
stroke(0);
  point(25, 335); 
   point(25-3, 335-3); 
   point(25+3, 335+3); 
   point(25+3, 335-3); 
   point(25+3, 335-3); 
 pop();
  

 fill(255);
  rect(a6, b6, c6, c6);
   push();
   stroke(0);
   line(10,360,30, 390);
 pop();
 
 
 fill(255);
  rect(a7, b7, c7, c7);
    push();
   stroke(0);
   line(50,460,30,420);
 pop();
 
 push();
 fill(255);
 rect(a8, b8, c8, c8);
 pop();
 
 push();
 fill(255);
  rect(a9, b9, c9, c9);
  pop();
  
  push();
    fill(0);
    stroke(255);
  rect(a10, b10, c10, c10);
pop();

//cordenadas
if (mouseX > a 
      && mouseX < a + c
      && mouseY > b
      && mouseY < b + c) { 
      sel = 0;
    }

if (mouseX > a1 
      && mouseX < a1 + c1
      && mouseY > b1
      && mouseY < b1 + c1) {
      sel = 1;
    }
    
    if (mouseX > a2 
      && mouseX < a2 + c2
      && mouseY > b2
      && mouseY < b2 + c2) {
      sel = 2;
    }
    
    if (mouseX > a3 
      && mouseX < a3 + c3
      && mouseY > b3
      && mouseY < b3 + c3) { 
      sel = 3;
    }

if (mouseX > a11 
      && mouseX < a11 + c11
      && mouseY > b11
      && mouseY < b11 + c11) { 
      sel = 11;
    }

if (mouseX > a5 
      && mouseX < a5 + c5
      && mouseY > b5
      && mouseY < b5 + c5) { 
      col = 5;
      
    }

if (mouseX > a6 
      && mouseX < a6 + c6
      && mouseY > b6
      && mouseY < b6 + c6) { 
      col = 6;
    }

if (mouseX > a7 
      && mouseX < a7 + c7
      && mouseY > b7
      && mouseY < b7 + c7) { 
      col = 7;
    }

if (mouseX > a8 
      && mouseX < a8 + c8
      && mouseY > b8
      && mouseY < b8 + c8) { 
      col = 8;
    }

if (mouseX > a9 
      && mouseX < a9 + c9
      && mouseY > b9
      && mouseY < b9 + c9) { 
      col = 9;
    }

if (mouseX > a10
      && mouseX < a10 + c10
      && mouseY > b10
      && mouseY < b10 + c10) {
        if(mouseIsPressed == true){
      background(0);
        }
    }
    
//colores
if (sel == 0) {
  //azul
  fill(0,0,255);
  stroke(0,0,255);
} else if( sel == 1) {
 //rojo
 fill(255,0,0);
 stroke(255,0,0);
} else if( sel == 2) {
 //verde
 fill(0,255,0);
 stroke(0,255,0);
} else if ( sel = 3){
  // Blanco
    fill(255);
    stroke(255);
  } else if (sel == 11) {
    //morado
    fill(155,0,155);
    stroke(155,0,155);
  }

//acciones

 if (mouseIsPressed == true) {
   if (col == 5) {
   point(mouseX, mouseY); 
   point(mouseX-10, mouseY-10); 
   point(mouseX+10, mouseY+10); 
   point(mouseX+5, mouseY-5); 
   point(mouseX+2, mouseY-2); 
  }
  else if (col == 6) {
      line(0,0, mouseX, mouseY);
      }
    else if (col == 7) {
      line(mouseX, mouseY,windowWidth, windowHeight);
    }
    else if (col == 8) {
      curve(0,0,mouseX, mouseY,mouseX, mouseY,windowWidth, windowHeight);
    }
    else if ( col == 9) {
       bezier(mouseX, mouseY,0,0,mouseX, mouseY,windowWidth, windowHeight);
    }

}


}
