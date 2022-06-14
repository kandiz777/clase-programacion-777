// Mariana Diaz, Sofia Murillas, Karla Maldonado 
console.log("punto1")

var inicio=parseInt(prompt("ingrese el primer numero"));
var limite=parseInt(prompt("ingrese el segundo numero"));

if(inicio<limite){
    for (var i=inicio; i<=limite; i+=1){

console.log(i)
    }
}else if(limite<inicio){
    for (var i=limite; i<=inicio; i+=1)
    console.log(i)
}




console.log("punto2")
 var numero = parseInt(prompt("ingrese un numero "))
 for( var i=0; i<=10; i++ )
 console.log( numero + "x" + i + "=" + numero * i )




console.log("punto3")

 var numero = parseInt(prompt("ingrese el numero que desea multiplicar "))
 var numero2 = parseInt(prompt("ingrese el numero hasta el que desea multiplicarlo"))
 for( var i=0; i<=numero2; i++ )
 console.log( numero + "x" + i + "=" + numero * i )

 console.log("punto4")
var arreglonum=[] 
var num; 
for(var i=1; i<=10; i++){ 
    num=parseInt( prompt("Ingrese el numero"))
    arreglonum.push(num); 
}
var mayor=arreglonum[0]
for(var i=0; i<10; i++){
if(arreglonum=[i]> mayor){
   mayor=arreglonum[i] 
}
}
console.log("el numero mayor es " + mayor )


console.log("punto5")
var arreglospro=[] 
var pro; 
for(var i=1; i<=5; i++){ 
    pro=prompt("Ingrese el nombre de los articulos que va a comprar" )
    arreglospro.push(pro); 
}
var arreglospre=[]
for(var i=0; i<arreglospro.length; i++){ 
  var precio = parseFloat(prompt("ingrese el precio de" +arreglospro[i]))
arreglospre.push(precio)
    }