console.log ("punto#1")
var Ciclo =0
while(Ciclo<7){
    console.log("el numero del ciclo es " + Ciclo)
    Ciclo+=1
    }

console.log("punto#2")
var Ciclo1 =0
while(Ciclo1<90){
    console.log("el numero del ciclo es" + Ciclo1)
    Ciclo1+=3
    }

console.log("punto#3")
var Ciclo2 =0
while(Ciclo2<50){
    console.log("el numero del ciclo es" + Ciclo2)
    Ciclo2+=2
    }

console.log("punto#4")
var ciclo3 = 1
var clientedice = prompt("ingrese un numero")
while(ciclo3 <= clientedice) {
    console.log(ciclo3)
    ciclo3+=2
}
console.log("punto#5")

var ciclo6 = parseInt(prompt("ingrese un numero impar"))

while(ciclo6 % 2==0){
    console.log("el numero es "+ ciclo6 + " es par")
    ciclo6= parseInt(prompt("ingrese un numero impar"))
}

console.log("punto#6")
var estudiantes =0
acumulado=0
cantidad=4
while (estudiantes<cantidad) {
    var edad = parseInt(prompt("ingrese la edad de los estudintes"))
    acumulado+=edad;
    console.log(acumulado);
    estudiantes++
    }
    
console.log("punto#7")
var palabra="uwu"
var resultado 
var intentos=0
while (palabra!=resultado){
    console.log("es un emoticono que se emplea para expresar felicidad o ternura")
    resultado=prompt("que palabra es?")
    intentos++
    }
    console.log("felicidades palabra correcta, le tomó "+ intentos + " intentos") 

console.log("punto#8")
var acum=0
var estud=prompt("ingrese el nombre del estudiante")
var cantnotas=prompt("ingrese la cantidad de notas del estudiante")
var notas=0
while(notas<cantnotas){
    var notafinal=parseFloat(prompt("ingrse la nota de el estudiante de 1 en 1"))
    acum+=notafinal
    console.log(acum)
    notas++
}
var prom =acum/cantnotas
if(prom>3.5){
    console.log(estud+" gano la materia")
}
else
    console.log(estud+" perdio la materia")



    
console.log("punto#9")

var acum=0
var estud=prompt("ingrese el nombre del estudiante")
var cantnotas=prompt("ingrese la cantidad de notas del estudiante")
var notas=0
while(notas<cantnotas){
    var notafinal=parseFloat(prompt("ingrse la nota de el estudiante de 1 en 1"))
    acum+=notafinal
    console.log(acum)
    notas++
}
var prom =acum/cantnotas
if(prom>3.5){
    console.log(estud+" gano la materia")
}
else
    console.log(estud+" perdio la materia")