x=5
console.log(x>7);//false
console.log(x<7);//true
console.log(x=="5");//true
console.log(x==="5");//false
console.log(x>=1);//true
console.log(x!=10);//true

console.log(2<12);//true
console.log(2<"12");//true
console.log(2<"john");//false
console.log(2>"john");//false
console.log(2=="john");//false
console.log("jhon"=="Jhon");//false
console.log("2"<"12");//false
console.log("2">"12");//true
console.log("2"=="12");//false

console.log("ejercicios")
x=12;   
y=7;
x<15 && y!=7//false
y>8 && x<20//false
x==12 && x<18//true
("lunes" == "Lunes") || (y!=9)//true
!(x==10) && y>=6//true
x>6 && y==12 && 2>3//false
(x*2)>22 && y<(2*4)//true
(x>10 || x<10) && !(y!=7 && y<21)//true
((x/2)<=(2*3) || (x*2)>23 ) && (15==="15" && y!=="7")//false

var diaSiguiente= "lunes";
var cuaderno= "jueves";

if (diaSiguiente == "lunes " || diaSiguiente == "martes ") {
    cuaderno="Análisis";
}else if (diaSiguiente == "miercoles") {
    cuaderno="Tecnología";
}else if (diaSiguiente == "jueves") {
    cuaderno="Desarrollo";
}else {
    cuaderno="Ninguno";
}
console.log("Para guardar el cuaderno de la clase de mañana con el profesor Andres debe" + cuaderno);
