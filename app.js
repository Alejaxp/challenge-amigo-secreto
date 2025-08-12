let amigos = [];


function agregarAmigo(){
    let nombresAmigos = document.getElementById("nombre").value.trim();

console.log(nombresAmigos);

    if (nombresAmigos === ""){
        alert("Por favor escribe un nombre");
        return;
    }

    amigos.push(nombresAmigos);
    console.log(amigos);
    limpiarCaja();
    mostrarLista();
}



function limpiarCaja(){
    document.querySelector("#nombre").value = "";
    return;
}


function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li"); 
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    return;
}

function sortearNombreAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos para hacer el sorteo, añade los nombres por favor.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "El amigo secreto es: " + elegido;

}

