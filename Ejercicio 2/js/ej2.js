//Creación del array de números apartado A
const numeros = [3, 18, 7, 22, 5, 11, 100, 1, 45, 8]
//Recorrer el array
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i]
    if (num % 2 === 0) {
        console.log("Es par")
    } else {
        console.log("Es impar")
    }
    if (num >= 18) {
        console.log("Es mayor de edad")
    }
    if (num % 5 === 0) {
        console.log("Es multiplo de 5")
    }
    //Creamos las variables para el apartado B la suma en el while
    let suma = 0
    let k = 0

    while (k < numeros.length) {
        suma += numeros[k]
        k++
    }
    console.log("Suma total: " + suma)
}
//Apartado C
let nota = Number(prompt("Introduce una nota"))

switch (true) {
    case 1 -> nota >= 0 || nota <= 4
}




