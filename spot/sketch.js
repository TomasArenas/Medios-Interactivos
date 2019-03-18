//canciones
var peep;
var joji;

//imagenes

var peep2;
var slow;

//otros
var vol;
var vol2;

var mipan;
var mipan2;

var dur;
var dur2;

var actual;
var actual2;

//var rat = 1;
//var rat2 = 1;

//figuras
var a1 = 10;
var b1 = 10;
var c1 = 30;

var a2 = 10;
var b2 = 50;
var c2 = 30;

var a3 = 10;
var b3 = 90;
var c3 = 30;

var a4 = 10;
var b4 = 130;
var c4 = 30;

var a5 = 10;
var b5 = 170;
var c5 = 30;

var a6 = 50;
var b6 = 10;
var c6 = 30;

var a7 = 10;
var b7 = 240;
var c7 = 30;

var a8 = 10;
var b8 = 280;
var c8 = 30;

var a9 = 10;
var b9 = 320;
var c9 = 30;

var a10 = 10;
var b10 = 360;
var c10 = 30;

var a11 = 10;
var b11 = 400;
var c11 = 30;

var a12 = 50;
var b12 = 240;
var c12 = 30;

var a13 = 90;
var b13 = 10;
var c13 = 30;

var a14 = 130;
var b14 = 10;
var c14 = 30;

var a15 = 90;
var b15 = 240;
var c15 = 30;

var a16 = 130;
var b16 = 240;
var c16 = 30;


function preload() {

  //sonido

  joji = loadSound('assets/joji.mp3');

  peep = loadSound('assets/spotlight.mp3');

  //imagenes

  peep2 = loadImage('assets/spot.jpg');

  slow = loadImage('assets/dancing.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  noStroke();
  //spotlight
  //rate, velocidad de cancion
  peep.rate(1);
 dur = peep.duration();

  //slow dancing
  //rate, velocidad de cancion
  joji.rate(1).
  dur2 = joji.duration();

}

function draw() {


  //imagenes
  image(peep2, 0, 0, width, height / 2);

  image(slow, 0, height / 2, width, height / 2);

  //figuras
  //arriba, spotlight
  fill(150);
  rect(a1, b1, c1, c1, 10);
  rect(a2, b2, c2, c2, 10);
  rect(a3, b3, c3, c3, 10);
  rect(a4, b4, c4, c4, 10);
  rect(a5, b5, c5, c5, 10);
  rect(a6, b6, c6, c6, 10);
  rect(a13, b13, c13, c13, 10);
  rect(a14, b14, c14, c14, 10);

  fill(0);
  triangle(20, 15, 35, 25, 20, 35);
  rect(57, 15, 5, 20);
  rect(67, 15, 5, 20);
  rect(95, 22, 20, 5);
  rect(102, 15, 5, 20);
  rect(135, 22,20,5);
  triangle(20, 55, 35, 65, 20, 75);
  rect(30, 55, 5, 20);
  triangle(15, 95, 25, 105, 15, 115);
  triangle(22, 95, 35, 105, 22, 115);
  rect(30, 95, 5, 20);
  rect(17, 135, 5, 20);
  triangle(20, 145, 33, 135, 33, 155);
  rect(16, 175, 5, 20);
  triangle(16, 185, 29, 175, 29, 195);
  triangle(23, 185, 36, 175, 36, 195);

  //abajo, slow dancing
  fill(150);
  rect(a7, b7, c7, c7, 10);
  rect(a8, b8, c8, c8, 10);
  rect(a9, b9, c9, c9, 10);
  rect(a10, b10, c10, c10, 10);
  rect(a11, b11, c11, c11, 10);
  rect(a12, b12, c12, c12, 10);
  rect(a15, b15, c15, c15, 10);
  rect(a16, b16, c16, c16, 10);

  fill(0);
  triangle(20, 245, 35, 255, 20, 265);
  rect(57, 245, 5, 20);
  rect(67, 245, 5, 20);
  triangle(20, 285, 35, 295, 20, 305);
  rect(30, 285, 5, 20);
  triangle(15, 325, 25, 335, 15, 345);
  triangle(22, 325, 35, 335, 22, 345);
  rect(30, 325, 5, 20);
  rect(17, 365, 5, 20);
  triangle(20, 375, 33, 365, 33, 385);
  rect(16, 405, 5, 20);
  triangle(16, 415, 29, 405, 29, 425);
  triangle(23, 415, 36, 405, 36, 425);
    rect(95, 252, 20, 5);
  rect(102, 245, 5, 20);
  rect(135, 252,20,5);

  //spotlight

  actual = peep.currentTime();

  vol = map(mouseY, 0, height, 1.1, 0.0);
  peep.setVolume(vol);

  //de donde sale el sonido

  mipan = map(mouseX, 0, width, -1.0, 1.0);
  peep.pan(mipan)

  //slow dancing

  actual2 = joji.currentTime();

  vol2 = map(mouseY, 0, height, 0.0, 1.1);
  joji.setVolume(vol2);

  //de donde sale el sonido

  mipan2 = map(mouseX, 0, width, 1.0, -1.0);
  joji.pan(mipan2)


  //cordenadas

  if (mouseX > a1 && mouseX < a1 + c1 && mouseY > b1 && mouseY < b1 + c1) {
    sel = 1;
  }

  if (mouseX > a2 && mouseX < a2 + c2 && mouseY > b2 && mouseY < b2 + c2) {
    sel = 2;
  }

  if (mouseX > a3 && mouseX < a3 + c3 && mouseY > b3 && mouseY < b3 + c3) {
    sel = 3;
  }

  if (mouseX > a11 && mouseX < a11 + c11 && mouseY > b11 && mouseY < b11 + c11) {
    sel = 4;
  }

  if (mouseX > a5 && mouseX < a5 + c5 && mouseY > b5 && mouseY < b5 + c5) {
    sel = 5;

  }

  if (mouseX > a6 && mouseX < a6 + c6 && mouseY > b6 && mouseY < b6 + c6) {
    sel = 6;
  }

  if (mouseX > a7 && mouseX < a7 + c7 && mouseY > b7 && mouseY < b7 + c7) {
    sel = 7;
  }

  if (mouseX > a8 && mouseX < a8 + c8 && mouseY > b8 && mouseY < b8 + c8) {
    sel = 8;
  }

  if (mouseX > a9 && mouseX < a9 + c9 && mouseY > b9 && mouseY < b9 + c9) {
    sel = 9;
  }

  if (mouseX > a10 && mouseX < a10 + c10 && mouseY > b10 && mouseY < b10 + c10) {
    sel = 10;
  }

  if (mouseX > a11 && mouseX < a11 + c11 && mouseY > b11 && mouseY < b11 + c11) {
    sel = 11;
  }

  if (mouseX > a12 && mouseX < a12 + c12 && mouseY > b12 && mouseY < b12 + c12) {
    sel = 12;
  }
  if (mouseX > a13 && mouseX < a13 + c13 && mouseY > b13 && mouseY < b13 + c13) {
    sel = 13;
  }
  if (mouseX > a14 && mouseX < a14 + c14 && mouseY > b14 && mouseY < b14 + c14) {
    sel = 14;
  }
  if (mouseX > a15 && mouseX < a15 + c15 && mouseY > b15 && mouseY < b15 + c15) {
    sel = 15;
  }
  if (mouseX > a16 && mouseX < a16 + c16 && mouseY > b16 && mouseY < b16 + c16) {
    sel = 16;
  }
  
  //acciones

  if (mouseIsPressed == true) {
    //play
    if (sel == 1) {
      peep.play(0);
      peep.rate(1);
    }
    //poquito pa alante
    else if (sel == 2) {
      peep.jump(actual + 1);
    }
    //mas adelante
    else if (sel == 3) {
      peep.jump(actual + 10);
    }
    //atracito
    else if (sel == 4) {
      peep.jump(actual - 1);
    }
    //más atras
    else if (sel == 5) {
      peep.jump(actual - 10);
    }
    //pause
    else if (sel == 6) {
      peep.pause();
    }
    //pause
    else if (sel == 7) {
      joji.play(0);
      joji.rate(1);
    }
    //poquito pa alante
    else if (sel == 8) {
      joji.jump(actual2 + 1);
    }
    //más adelante
    else if (sel == 9) {
      joji.jump(actual2 + 10);
    }
    //atracito
    else if (sel == 10) {
      joji.jump(actual2 - 1);
    }
    //más atras
    else if (sel == 11) {
      joji.jump(actual2 - 10);
    }
    //pause
    else if (sel == 12) {
      joji.pause();
    }

    else if (sel == 13) {
      peep.rate(2);
    }
    
    else if (sel == 14) {
      peep.rate(-1);
    }
    
    else if (sel == 15) {
      joji.rate(2);
      
    }
    
    else if (sel == 16) {
      joji.rate(-1);
      
    }
  }


}