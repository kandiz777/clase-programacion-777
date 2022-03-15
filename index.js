    console.log("hola mundo"); //imprimir por consola
    //comentario en linea 
    /*comentario
     en 
     varias 
     lineas
     o
     multi 
     linea   
    */

     //variables

     /* son espacios de memoria que almacenan datos o informacion,
     existen varios tipos de variables en js, pero generalmente se utilizan los siguientes:
     string:almacenan cadenas de texto.Se debe declarar o asignar el valor entre comillas ""
     int: almacenan numeros enteros 
     double: almacena numeros reales 
     boolean: almacena valores de verdad (true, false)
     */
    /*declarar variables
    declarar una variable es crearla, decirle al lenguaje como se llama la variable
    e indicarle que ya existekkk.
    Para declarar una variable se puede utilizar ya sea la palabra reservada var o let
    */
   var nombre;
   console.log(nombre);
/* ra inicializar variables es necesario asignar un valor cuando se crea esta variable 
*/  
var apellido= "Mariana Diaz";
console.log(apellido);
/*asignar un valor:
asignar un valor se hace mediante el signo = se debe hacer sobre una variable que ya fue declarada 
*/
nombre="Oscar Salgado y";
console.log(nombre+" "+apellido);
//desde otra variable
var edad=13; 
var edadEstudiante=edad;
//desde el teclado 
//var gradoEstudiante=prompt("ingrese su grado: ");
//console.log("el grado es: "+gradoEstudiante);
/*constantes:
son valores que una vezz inicializados no pueden cambiar lo que almacenan. Se crean con la palabra reservada const, el nombre de las constantes se escribe todo en mayuscula para diferenciarlo de las variables
*/

const PI=3.1416;
//PI=5;
//imprimir por consola 
//simple
console.log("mensaje");
console.log(nombre);
//concantenado
console.log("la edad es "+ edad +" años");

//operadores

//suma
console.log("------------------------------");
console.log("Suma");

var suma;
suma = 5+3;
console.log(suma);
let a =10;
suma =8+a;
console.log (suma);
let b =20;
suma =a+b;
console.log(suma);
console.log("------------------------------");
console.log("Resta");

//resta
var resultado;
resultado = a-b;
console.log(resultado);
resultado =b-a;
console.log(resultado);
console.log("------------------------------");
console.log("Multiplicacion");

//producto
producto = a*b;
console.log(producto);
console.log("------------------------------");
console.log("Division");

//Division
division = b/a;
console.log(division);
console.log("------------------------------");

// orden de operaciones
var res;
res =a*2;
console.log(res);
res =a*2-1;
console.log(res);
res =a*(2-1);
console.log(res);
console.log("------------------------------");
console.log("residuo");

//residuo
var residuo;
residuo =12%2; //0
console.log(residuo);
console.log("------------------------------");
console.log("incremento");

//contador
//incremento(+)
var incremento =1;
console.log(incremento);
incremento =incremento+1;
console.log(incremento);
incremento +=1;
console.log(incremento);
incremento++;
console.log(incremento);
console.log("------------------------------");
console.log("decremento");

//decremento(-)
var decremento =1;
console.log(decremento);
decremento -=1;
console.log(decremento)
decremento -=1;
console.log(decremento)
decremento -=1;
console.log(decremento)
decremento -=1;
console.log(decremento)
console.log("------------------------------");
console.log("suma aumento");

//son operaciones que se le realizan a una variable y el resultado se guarda en si misma

var sumaaumento=0;
sumaaumento += 4;
sumaaumento += 46;
console.log(sumaaumento);
console.log("------------------------------");
console.log("producto aumento");

var productoaumento=0;
productoaumento *= 4;
productoaumento *= 46;
console.log(productoaumento);
console.log("------------------------------");
console.log("cocienteaumento");

var cocienteaumento=0;
cocienteaumento /= 4;
cocienteaumento /= 46;
console.log(cocienteaumento);
console.log("------------------------------");
console.log("potencia");

//potencia
var exp;
exp =3**2;
console.log(exp);
exp =3**3
console.log(exp)
// la variable debe tener un valop antes de realizar la operacion

var nombre = ("Oscar")
var apellido = ("Salgado")
var nombreyapellido = (nombre + " " + apellido)
console.log(nombreyapellido)
console.log("Cambiaras tu nombre!")
var nombreyapellido = ("Carlos salgado")
console.log(nombreyapellido)

//Los numeros en las variables no van con comillas si las usas seria solo para strings  = "palabras"

var oscar1 = 15;
var akio1 = 15;
var diazcuenta = akio1 + oscar1;
console.log(diazcuenta);

console.log(nombreyapellido.length)

