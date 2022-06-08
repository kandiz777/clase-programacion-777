//Mariana Diaz Rincon
//Victor Akio Higuchi 

//Grado 10B

console.log("punto#1")
var numero=parseInt(prompt("escriba un numero"))
var contador=0
while(contador <= numero){
   if(contador % 5==0){
   console.log(" el "  + contador + " es multiplo de 5 ")
   }else{ 
   console.log(" el "  + contador + " no es multiplo de 5 ") }
   contador +=1
}


console.log("punto#2")
var producto= parseInt(prompt("ingrese la cantidad de productos q va a llevar"))
var acu = 0
var totalpag=0

while(acu<producto){
    var precio = parseFloat(prompt("ingrese el precio de su producto"))
  totalpag=precio+=totalpag 
acu+= 1
}
console.log(" el precio a pagar es de " + totalpag )


console.log("punto#3")

var acu= 0;
var totalpag=0;
var cliente= prompt("si desea ingresar un articulo ponga si y si no ponga no");

while(cliente =="si"){
    var precio=parseInt(prompt("ingrese el precio de su producto"))
  totalpag+=precio
acu+= 1
cliente=prompt(" si desea ingresar un articulo ponga si y si no ponga no  ")



}
console.log(" el precio a pagar es de " + totalpag )


console.log("punto#4")

var acu= 0;
var totalpag=0;
var cliente= prompt("si desea ingresar un articulo ponga si y si no ponga no");

while(cliente =="si"){
    var precio=parseInt(prompt("ingrese el precio de su producto"))
  totalpag+=precio
acu+= 1|

 var cliente =prompt(" si desea ingresar un articulo ponga si y si no ponga no  ")

if ( acu >= 8 && acu < 15) {
  console.log("El descuento del 10% fue aplicado tu total a pagar es de " + precio*0.90)
} else if (acu >= 15 && acu < 25) {
  console.log("El descuento del 15% fue aplicado tu total a pagar es de " + precio*0.85)
} else if (acu >= 25) {
  console.log("El descuento del 20% fue aplicado tu total a pagar es de " + precio*0.8)
} else console.log("No tienes descuento") 
}

console.log("punto#5")

var acumi = 0;
var notas = prompt("¿Cuantas notas quieres digitar?")
var guardanotas = 0;
var ganaron = 0;
var perdieron = 0;

while (acumi < notas){
  var pregunta = parseFloat(prompt("Que nota tienes?"))
  guardanotas+=pregunta
  acumi++
  if (pregunta < 3.5) {
    console.log("Perdiste el año " + acumi)
    perdieron++
  } else if (pregunta <= 3.5){
  console.log("No perdiste el año " + acumi) 
  ganaron++
  }
}

var totalnotas = guardanotas/notas

if (totalnotas < 3.5 ) {
  console.log("La cantidad de estudiantes no es suficiente para curso de verano")
} else console.log("Debe abrirse el curso de verano")

console.log("la cantidad de estudiantes que ganaron fueron " + ganaron + " y los reprobados fueron " + perdieron)



