/*ES UNA ESTRUCTURA QUE ALMACENA CUALQUIER TIPO DE DATO O CUALQUIER CANTIDAD ES DECIR,STRINGS,INT, DOUBLE, ARRAY, OBJETOS,ETC
LOS ARREGLOS O ARRAYS TIENEN OPERACIONES COMO INSERTAR, ELIMINAR, MODIFICAR Y  CONSULTAR, UN ARREGLO SE HACE CON CORCHETE SE PUEDEN PONER USANDO ALT + 91
Y LOS ELEMENTOS DENTRO DE EL SE SEPARAN CON COMAS. TAMBIEN SE CREA O SE DECLARA CON LAS PALABRAS RESERVADAS VAR O LET SEGUIDAS DEL NOMBRE DEL ARREGLO */

var MiprimerArreglo=["jose",14]
console.log(MiprimerArreglo)

var notaest = [["sofia",4.5],["mari",4.2]]
console.log(notaest);
//consultar segun la posicion 

//recordar que las posiciones de un vector o arreglo comienzan desde cero 

console.log(MiprimerArreglo[0]);

//Consultar posiciones de arreglos dentro de arreglos

//Primero se accede ala posicion del arreglo mas grande y luego a las posiciones de los arreglos internos

console.log(notaest[1][0])

//modificar elementos

MiprimerArreglo[0]="mario"
console.log(MiprimerArreglo) 

notaest[1][0]= "laura";
console.log( notaest[1])


MiprimerArreglo[1]=  18 
console.log(MiprimerArreglo[1])

notaest[0][1]= 4.8 
console.log(notaest[0][1])

//agregar elementos al arreglo 

//agregar de ultimo 
MiprimerArreglo.push("10B");
console.log( MiprimerArreglo);
//agregar de primero
MiprimerArreglo.unshift("Gomez");
console.log( MiprimerArreglo)

MiprimerArreglo.pop()
console.log(MiprimerArreglo)
MiprimerArreglo.shift();
console.log(MiprimerArreglo);


//quiz
var arreglo=[["analisis"],["tecnologia"],["desarrollo"]] 

console.log(arreglo)
arreglo[0]= "analisis"
arreglo[1]= " tecnologia"
arreglo[2]= "desarrollo"
console.log(arreglo)

arreglo[0]= "analisis"
arreglo[1]= " tecnologia"
arreglo[2]= "BBDD"
console.log(arreglo)

 

arreglo[0]= "introduccion"
arreglo[1]= " analisis"
arreglo[2]= "tecnologia"
console.log(arreglo)

