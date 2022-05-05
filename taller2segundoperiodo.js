var saludar="si";

if (saludar=="si") {
    console.log("hola, soy un condicional simple")
}
var x=20

if (x<= 20){
    console.log("la condicion es verdadera")
}

var edad = 18;

if (edad>=18) {
    console.log("Bienvenido, puede ingresar")
    }else {
       
        console.log("no puede ingresar")
    }



var numero1=5
var numero2=8

    if(numero1<numero2) {
        console.log("numero1 no es mayor que numero2")
        }

    if(numero2=8) {
        console.log("numero2 es positivo")
            }
        
    if(numero1!=0 || numero1<0) {
        console.log("numero1 es negativo o distinto a 0")
                }  

    if(numero1+1!=numero2 || numero1+1==numero2) {
        console.log("incrementar en una unidad el valor del numero1 no lo hace mayor o igual a numero2")
      }

var numerito = 90;
if (numerito < 50) {
    console.log("numerito si es estrictamente menor que 50");
} else if (numerito > 50 && numerito < 80) {
    console.log("numerito si esta entre 50 y 80") 
} else if (numerito > 80 &&  !(numerito >= 100)) {
    console.log("numerito es mayor que 80 pero no mayor ni igual a 100")
} else if (numerito == 100) {
    console.log("numerito es igual a 100")
} else {
    console.log("numerito es estrictamente mayor a 100")
}

// Punto 6 
    numerito = 90;
//Punto 7
    numerito = 60;
//Punto 8 
    numerito = 200;

//Punto 9

var dia = "lunes";

if (dia == "jueves") {
    console.log("Pueden ir a polideportivo")
} else {
    console.log("No pueden ir al polideportivo")
}

//Punto 10

var x1 = 10
var x2 = 15
var resultado = x1/x2 

if (x1 == 0 || x2 == 0) {
    console.log("No se puede hacer una division con cero")
} else {
    console.log("El resultado es " + resultado)
}

//Punto 11


var diadelasemana = "lunes";


if (diadelasemana == "lunes") {
    console.log("El plato especial del dia de la semana es arroz con pollo")
} else if (diadelasemana == "martes") {
    console.log("El plato especial del dia de la semana es chuleta de cerdo/pollo")
} else if (diadelasemana == "miercoles") {
    console.log("El plato especial del dia de la semana es frijoles")
} else if (diadelasemana == "jueves") {
    console.log("El plato especial del dia de la semana es sancocho de pescado")
} else if (diadelasemana == "viernes") {
    console.log("El plato especial del dia de la semana es bandeja paisa ")
} else if (diadelasemana == "sabado") {
    console.log("El plato especial del dia de la semana es ajiaco")
} else if (diadelasemana == "domingo") {
    console.log("El plato especial del dia de la semana es sancocho de galiina ")
}

//Punto 12

var dato = '6'.toUpperCase();


if (dato == "A" || dato == "E" || dato == "I" || dato == "O" || dato == "U") {
    console.log("Insertaste una vocal")
} else if (dato == "B" ||  dato == "C" || dato == "D" || dato == "F" || dato == "G" || dato == "H" || dato == "J" || dato == "K" || dato == "L" || dato == "M" || dato == "N" || dato == "Ñ" || dato =="P" || dato == "Q" || dato == "R" || dato == "S"|| dato == "T" || dato == "V" || dato == "X" || dato == "Z" || dato == "W") {
    console.log("Insertaste una consonante")
} else {
    console.log("Insertaste un numero")
}



