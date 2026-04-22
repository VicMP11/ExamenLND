function añadirTarea() {
    let input = document.getElementById("texto")
    let lista = document.getElementById("lista")

    if(input.value === "") {
        console.log("Introudzca una tarea")
    }
    let li = document.createElement("li")
    li.textContent = input.value
}
