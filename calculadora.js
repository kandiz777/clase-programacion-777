function main(){
    var menu = prompt("Que operacion desea hacer\n 1.Suma\n 2.Resta\n 3.Multiplicacion\n 4.Division\n 5.Potencia")
        num1 = parseInt(prompt("Ingrese el primer numero"))
        num2 = parseInt(prompt("Ingrese el segundo numero"))
    if (menu == 1){
        console.log(sumar(num1, num2))
    } else if (menu == 2){
        console.log(restar(num1, num2))
    } else if (menu == 3){
        console.log(multiplicar(num1, num2))
        } else if (menu == 4){
            console.log(dividir(num1, num2))
            } else if (menu == 5){
                console.log(potencia(num1, num2))
                } else { 
                    console.log("Digita bien el numero")
    }
}


function sumar(){
    return  (num1 + num2)
}

function restar(){
    return  (num1 - num2)
}

function multiplicar(){
    return  (num1 * num2)
}

function dividir(){
    return  (num1 / num2)
}

function potencia(){
    return  (num1 ^ num2)

}
