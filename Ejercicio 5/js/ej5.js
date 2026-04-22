let segundos = 0
let intervalo = null
let cuenta = 0
const p = document.getElementById("tiempo")

function iniciar() {
        p.innerHTML = cuenta
        intervalo = setInterval(function () {
            cuenta++
            resultado.innerHTML = cuenta
        }, 1000)
    }