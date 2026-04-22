//Declarar las variables apartado A
const nombre = "Victor"
let edad = 20
let altura = 1.87
let esEstudiante = true
let aficiones = ["cristal", "mujeres", "aire"]

//Imprimir frase por pantalla apartado B
console.log('Me llamo ${nombre}, tengo ${edad} años y mido ${altura} m')

//Calcular el IMC apartado C
let peso = 70
let imc = peso / (altura * altura)
console.log('IMC:  ${imc.toFixed(2)}')

//Apartado D mostrar los tipos de variables 
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof altura)
console.log(typeof esEstudiante)
console.log(typeof aficiones)