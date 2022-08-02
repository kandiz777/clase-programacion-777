
function main_geometria(){
    var menu = prompt("Que operacion desea hallar\n 1.Area\n 2.Perimetro\n")
    if (menu == 1) {
        var figura = prompt("A que figura le quieres hallar el area\n 1.Cuadrado\n 2.Rectangulo\n 3.Paralelogramo\n 4.Triangulo \n 5.Triangulo Equilatero\n 6.Rombo\n 7.Trapecio\n 8.Poligono Regular\n 9.Circulo")
        if (figura == 1) {
        var numerito1 = parseInt(prompt("Inserte el lado"))
        console.log (numerito1 * numerito1);
        } else if (figura == 2) {
        var numerito1 = parseInt(prompt("Inserte la base"))
        var numerito2 = parseInt(prompt("Inserte la altura"))
        console.log (numerito1 * numerito2);
        } else if (figura == 3) {
        var numerito1 = parseInt(prompt("Inserte la base"))
        var numerito2 = parseInt(prompt("Inserte la altura"))
        console.log (numerito1 * numerito2);
        } else if (figura == 4) {
            var numerito1 = parseInt(prompt("Inserte la base"))
            var numerito2 = parseInt(prompt("Inserte la altura"))
            console.log (numerito1 * numerito2 / 2);
        } else if (figura == 5) {
            var numerito1 = parseInt(prompt("Inserte el lado"))
            console.log (numerito1 * Math.sqrt(3) / 4);
        } else if (figura == 6) {
            var numerito1 = parseInt(prompt("Inserte la diagonal mayor"))
            var numerito2 = parseInt(prompt("Inserte la diagonal menor"))
            console.log (numerito1 * numerito2 / 2);
        } else if (figura == 7) {
            var numerito1 = parseInt(prompt("Inserte la base mayor"))
            var numerito2 = parseInt(prompt("Inserte la base menor"))
            var numerito3 = parseInt(prompt("Inserte la altura"))
            console.log (numerito1 * numerito2 / 2 * numerito3);
        } else if (figura == 8) {
            var numerito1 = parseInt(prompt("Inserte el perimetro"))
            var numerito2 = parseInt(prompt("Inserte la apotema"))
            console.log (numerito1 * numerito2 / 2);
        } else if (figura == 9) {
            var numerito1 = parseInt(prompt("Inserte el radio"))
            console.log (Math.PI * numerito1^2);
        } 


    } else if (menu == 2)
        var figura = prompt("A que figura le quieres hallar el perimetro \n 1.Cuadrado\n 2.Rectangulo\n 3.Paralelogramo\n 4.Triangulo \n 5.Triangulo Equilatero\n 6.Rombo\n 7.Trapecio\n 8.Poligono Regular\n 9.Circulo")
        if (figura == 1) {
            var numerito1 = parseInt(prompt("Inserte el lado"))
            console.log (4 * numerito1);
            } else if (figura == 2) {
            var numerito1 = parseInt(prompt("Inserte la base"))
            var numerito2 = parseInt(prompt("Inserte la altura"))
            console.log (2*numerito1 + 2*numerito2);
            } else if (figura == 3) {
            var numerito1 = parseInt(prompt("Inserte el lado"))
            var lados = parseInt(prompt("Cuantos lados tiene tu paralelogramo"))
            console.log (numerito1 * lados);
            } else if (figura == 4) {
                var numerito1 = parseInt(prompt("Inserte el lado"))
                var lados = parseInt(prompt("Cuantos lados tiene tu triangulo"))
                console.log (numerito1 * lados);
            } else if (figura == 5) {
                var numerito1 = parseInt(prompt("Inserte el lado"))
                console.log (3 * numerito1);
            } else if (figura == 6) {
                var numerito1 = parseInt(prompt("Inserte el lado"))
                var lados = parseInt(prompt("Cuantos lados tiene tu rombo"))
                console.log (numerito1 * lados);
            } else if (figura == 7) {
                var numerito1 = parseInt(prompt("Inserte el lado"))
                var lados = parseInt(prompt("Cuantos lados tiene tu trapecio"))
                console.log (numerito1 * lados);
            } else if (figura == 8) {
                var numerito1 = parseInt(prompt("Inserte el numero de lados"))
                var numerito2 = parseInt(prompt("Inserte el lado"))
                console.log (numerito1 * numerito2);
            } else if (figura == 9) {
                var numerito1 = parseInt(prompt("Inserte el radio"))
                console.log (2 * Math.PI * numerito1);
            } 
}



function sumita(){
    var numerito1 = parseInt(prompt("Ingrese el primer numero"))
    var numerito2 = parseInt(prompt("Ingrese el segundo numero"))
    return numerito1 + numerito2
}

function resta(){
    var numerito1 = parseInt(prompt("Ingrese el primer numero"))
    var numerito2 = parseInt(prompt("Ingrese el segundo numero"))
    return numerito1 - numerito2
}

function multiplicacion(){
    var numerito1 = parseInt(prompt("Ingrese el primer numero"))
    var numerito2 = parseInt(prompt("Ingrese el segundo numero"))
    return numerito1 * numerito2
}

function potencia(){
    var numerito1 = parseInt(prompt("Ingrese el primer numero"))
    var numerito2 = parseInt(prompt("Ingrese el segundo numero"))
    return numerito1 ^ numerito2
}

function divisor(){
    var numerito1 = parseInt(prompt("Ingrese el primer numero"))
    var numerito2 = parseInt(prompt("Ingrese el segundo numero"))
    return numerito1 / numerito2
}