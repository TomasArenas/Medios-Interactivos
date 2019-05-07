var tabla;
var numFilas;
var numColumnas;

var tabla2;
var numFilas2;
var numColumnas2;

var vivo;
var muerto;
var nurse;
var fantasma;
var isaac;
var coravivo;
var coranegro;

//https://mediosinteractivos.gitbook.io/tutoriales/p5.js/geolocation

function preload() {

  //tablas
  tabla = loadTable('assets/Mort.csv', 'csv', 'header');
  tabla2 = loadTable('assets/Mort5.csv', 'csv', 'header');

  //imagenes
  vivo = loadImage('assets/fetorojo.png', 'png');
  muerto = loadImage('assets/fetonegro.png', 'png');
  nurse = loadImage('assets/nurse.png', 'png');
  fantasma = loadImage('assets/fantasma.png', 'png');
  isaac = loadImage('assets/isaac.png', 'png');
  coravivo = loadImage('assets/coravivo.png', 'png');
  coranegro = loadImage('assets/coranegro.png', 'png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(50, 50, 50);

  //noStroke();

  //tabla2, mortalidad hasta los 5 años

}



function draw() {
  //background(50, 50, 50);
  //imprime los valores de rotacion en X y en Y
  
 image(isaac,touches.x, touches.y);
  
  noStroke();
  fill(255);
  text("X: " + floor(rotationY), 20, 40);
  text("Y: " + floor(rotationX), 20, 20);


  numFilas2 = tabla2.getRowCount();
  numColumnas2 = tabla2.getColumnCount();

  for (var a = 0; a < numFilas2; a = a + 1) {

    var numero2 = tabla2.getNum(a, 3);
    var ano2 = tabla2.getString(a, 1);


    var alto2 = map(numero2, 1, 200, 0, height);
    var ancho2 = width / numFilas2;
    var posX2 = (numFilas2 - a) * (ancho2);
    var posY2 = height - alto2;

    if (rotationY > 60 && rotationX < 20) {
      fill(255);
      rect(posX2, posY2, ancho2 - 1, alto2 - 1);
      
     

    }
    //print(ano2);

  }

  //tabla1, mortalidad

  numFilas = tabla.getRowCount();
  numColumnas = tabla.getColumnCount();

  //image(vivo, 0, 0, 250, 210);


  for (var i = 0; i < numFilas; i = i + 1) {

    var numero = tabla.getNum(i, 3);
    var ano = tabla.getString(i, 1);

    var alto = map(numero, 0, 200, 0, height);
    var ancho = width / numFilas;
    var posX = (numFilas - i) * (ancho);
    var posY = height - alto;

    //if(rotationY > 60 && rotationX < 20){
    image(vivo, 0, 0, height / 4, width / 4);
    
    fill(0);
    //rect(posX, posY, ancho - 1, alto - 1);
    
    image(coravivo, posX, posY,ancho - 1, alto - 1);
    
    fill(255);
    text(ano, posX, posY);
    
    
    //}

  }

  //tabla 3, recien nacidos vivos

  for (var u = 0; u < numFilas; u = u + 1) {

    var numero3 = 1000 - tabla.getNum(u, 3);

    var alto3 = map(numero3, 0, 1000, 0, height);
    var ancho3 = width / numFilas;
    var posX3 = (numFilas - u) * (ancho3);
    //inicio desde abajo
    //var posY3 = height - alto3;
    if (rotationY > 60 && rotationX < 20) {
      fill(255);
      rect(posX3, 0, ancho3 - 1, alto3 - 1);

    }


    print(numero3);

  }
}


//    print(numero);
// fill(242,171,239);

//Texto
//push();
//translate(posX + (ancho - 0, 5), height);
//rotate(-HALF_PI);
//fill(255);
//text(ano, 0, 10);
//pop();