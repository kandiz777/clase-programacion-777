
console.log("------------------------------");
console.log("area cuadrado");
var lado = prompt ("cual es el valor que desea darle al lado");
var areacuadrado = lado **2;
console.log("el resultado del area es el siguiente")
console.log(areacuadrado);

console.log("------------------------------");
console.log("volumen cuadrado");
var  lado = prompt (" cual es la medida del lado del cubo");
var volumen = lado **3 ;
console.log("el resultado del volumen es el siguiente")
console.log(volumen)
console.log("resultado del punto #1");

console.log("------------------------------");
console.log("area rectangulo");
var base= prompt (" cual es la base del rectangulo")
var altura = prompt ("cual es la altura")
var arearectangulo = base * altura
console.log("el area del rectangulo es")
console.log( arearectangulo)
console.log("------------------------------");
console.log("perimetro rectangulo");
var perimetro= 2*altura + 2*base
console.log(perimetro )
console.log("resultado del punto #2");

console.log("------------------------------");
console.log("diametro circulo");
var radio = prompt ("escriba el valor del diametro del circulo")
var diametrocirculo = Math.PI*radio**2
console.log(diametrocirculo)

console.log("------------------------------");
console.log("volumen esfera");
var volumen = 4/3 * Math.PI * radio **3
console.log(" el volumen es ")
console.log( volumen)
console.log ("resutado del punto #3")

console.log("------------------------------")
console.log( "trapezoide")
var base1 = prompt ("ingrese el valor de la primera base")
var base2 = prompt (" ingrese el valor de la segunda base")
var h = prompt ( "ingrese el valor de h")
var area = 1/2 * (base1 + base2) * h
console.log (area)
console.log ("resultado del punto #4")



