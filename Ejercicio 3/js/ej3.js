//Funcion es par
function esPar(n) {
    return numero % 2 === 0
}
//Funcion máximo numero 
function maximo(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
}
