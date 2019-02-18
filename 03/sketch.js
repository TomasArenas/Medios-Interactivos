var y = 0
var x = 300
var y2 = 100
var rojo = 0
function setup() {
  createCanvas(900,600);
  background(1,11,66);
noStroke();

}

function draw() {
 ellipse(100,y,30,30)
  y = y + 4
fill(0)
 if(y > 110){
 rojo = map (y,0,1100,0,219);
  fill(rojo,14,13);
 }
  ellipse(300,-100+y,30,30)
   ellipse(200,-150+y,30,30)
   ellipse(400,-350+y,30,30)
  ellipse(500,-100+y,30,30)
   ellipse(600,-200+y,30,30)
  ellipse(700,-300+y,30,30)
   ellipse(800,-200+y,30,30)
  ellipse(900,-500+y,30,30)
   ellipse(1000,-100+y,30,30)
  ellipse(1100,-4000+y,30,30)
  
 
  
if( y > 1100){
  background(1,11,66);
  y = 0;
}
 
  
 
 
  
}