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
var gradoEstudiante=prompt("ingrese su grado: ");
console.log("el grado es: "+gradoEstudiante);
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