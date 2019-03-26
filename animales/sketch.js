//conejo

//40
var A = [];
var B = [];

//mono

//50
var C = [];
var D = [];

//Buhi
var E = [];
var F = [];

//cerdo

var G = [];
var H = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
    for (var i = 0; i < 1; i = i +1){
     A[i] = random(width);
     B[i] = random(height);

     C[i] = random(width);
     D[i] = random(height);
    
     E[i] = random(width);
     F[i] = random(height);
      
     G[i] = random(width);
     H[i] = random(height);
    }
   
  
  
}

function draw() {
  background(220);
  noStroke();
 
   for (var i = 0; i < 1; i = i +1){
  
  //conejo
  fill(255);
  //orejas
  
  ellipse(A[i],B[i],15,30);
  ellipse(A[i]+30,B[i],15,30);
  
  fill(0);
  ellipse(A[i],B[i],7,15);
  ellipse(A[i]+30,B[i],7,15);
  
   fill(255);
  ellipse(A[i]+15,B[i]+15,40,40);
  
  //ojos
   fill(0);
  ellipse(A[i]+7,B[i]+13,10,10);
   ellipse(A[i]+23,B[i]+13,10,10);
  
    fill(255,196,164);
    rect(A[i]+15,B[i]+23,3,5);
  rect(A[i]+12,B[i]+23,3,5);
  
   fill(255,48,43);
  ellipse(A[i]+15,B[i]+23,10,5);
     
     A[i] = A[i] - random(5,-5);
     
     B[i] = B[i] - random(-1,1);
    
   
//mico

  fill(127,55,0);
  ellipse(C[i],D[i],25,25);
  ellipse(C[i]+50,D[i],25,25);
  
    fill(204,129,71);
  ellipse(C[i],D[i],15,15);
  ellipse(C[i]+50,D[i],15,15);
  
  
  fill(127,55,0);
 ellipse(C[i]+25,D[i],50,40);
  
    fill(204,129,71);
  ellipse(C[i]+25,D[i]+8,28,20);
  
  fill(0);
  ellipse(C[i]+15,D[i]-5,10,10);
   ellipse(C[i]+35,D[i]-5,10,10);
  
  fill(220);
  ellipse(C[i]+20,D[i]+5,5,5);
  ellipse(C[i]+30,D[i]+5,5,5);
  
  fill(255,48,43);
  rect(C[i]+23,D[i]+10,5,5);
  
     C[i] = C[i] - random(5,0);
     
     D[i] = D[i] - random(5,0);
     
     //buho
  
 fill(66,29,0);
 ellipse(E[i],F[i],40,40); 
  
  fill(241,98,0);
  ellipse(E[i]-7,F[i],18,18);
  ellipse(E[i]+8,F[i],18,18);
  
  fill(54,91,241);
  ellipse(E[i]-5,F[i],13,13);
  ellipse(E[i]+5,F[i],13,13);
  
  fill(0);
  ellipse(E[i]-5,F[i],8,8);
  ellipse(E[i]+5,F[i],8,8);
  
  fill(255,197,0);
  triangle(E[i]-5,F[i]+5,E[i]+5,F[i]+5,E[i],F[i]+15);
     
       E[i] = E[i] - random(0,0);
     
     F[i] = F[i] - random(-3,1);
     
     //CERDO
     
  fill(255,126,123);
     ellipse(G[i],H[i],40,40);
     
     fill(0);
     ellipse(G[i]-5,H[i]-5,8,8);
     ellipse(G[i]+5,H[i]-5,8,8);
     
     fill(255,84,123);
     ellipse(G[i],H[i]+8,20,15);
     
       fill(255,153,123);
     ellipse(G[i]-3,H[i]+8,5,5);
     ellipse(G[i]+3,H[i]+8,5,5);
  
     
      G[i] = G[i] - random(1,-3);
     
     H[i] = H[i] - random(0,0);
     
     
   }  
  
}
