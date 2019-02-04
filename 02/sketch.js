var a = 0
var b = 50
var c = 100
var d = 150
var e = 200
var f = 250
var g = 300
var h = 350
var i = 400

function setup() {
createCanvas(400,400);

fill(255,242,50);
noStroke();


triangle(250,0,300,0,300,50);
triangle(0,150,50,200,0,200);
triangle(0,350,50,400,0,400);
triangle(50,350,100,400,50,400);
quad(a,g,b,g,c,h,b,h);
quad(b,f,c,f,d,g,c,g);
quad(h,b,i,c,i,d,h,c);
quad(g,a,h,a,i,b,h,b);
quad(f,b,g,b,h,c,g,c);
quad(e,a,f,b,f,c,e,b);
quad(d,b,e,c,e,d,d,c);
quad(b,-b,c,a,c,b,b,a);
quad(c,a,d,a,e,b,d,b);
quad(a,a,b,b,b,c,a,b);
quad(b,b,c,b,d,c,c,c);
quad(a,c,b,c,c,d,b,d);
quad(b,d,c,e,c,f,b,e);
quad(a,e,b,f,b,g,a,f);


a = a + 100
b = 100 + b
c = c + 100
d = d + 100
e = e + 100
f = f + 100
g = g + 100
h = h + 100
i = i +100      

quad(a,a,b,b,b,c,a,b);
quad(b,b,c,b,d,c,c,c);
quad(a,c,b,c,c,d,b,d);
quad(b,d,c,e,c,f,b,e);
quad(a,e,b,f,b,g,a,f);
quad(c,a,d,a,e,b,d,b);
quad(d,b,e,c,e,d,d,c);
quad(e,a,f,b,f,c,e,b);
quad(f,b,g,b,h,c,g,c);
quad(b,f,c,f,d,g,c,g);

a = a + 100
b = b + 100
c = c + 100
d = d + 100
e = e + 100
f = f + 100
g = g + 100
h = h + 100
i = i + 100      

quad(a,a,b,b,b,c,a,b);
quad(b,b,c,b,d,c,c,c);
quad(a,c,b,c,c,d,b,d);
quad(b,d,c,e,c,f,b,e);
quad(a,e,b,f,b,g,a,f);
quad(c,a,d,a,e,b,d,b);
quad(d,b,e,c,e,d,d,c);
quad(e,a,f,b,f,c,e,b);

a = a + 100
b = b + 100
c = c + 100
d = d + 100
e = e + 100
f = f + 100
g = g + 100
h = h + 100
i = i +100      

quad(a,a,b,b,b,c,a,b);
quad(b,b,c,b,d,c,c,c);
quad(a,c,b,c,c,d,b,d);
quad(b,d,c,e,c,f,b,e);
quad(a,e,b,f,b,g,a,f);
quad(c,a,d,a,e,b,d,b);
quad(d,b,e,c,e,d,d,c);
quad(e,a,f,b,f,c,e,b);
}
