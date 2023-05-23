var resultado = null;
var cajaResultado = document.getElementById("caja-resultado");

mostrarResultado();

function mostrarResultado(){
    if(!resultado){
        cajaResultado;
        return;
    }
    cajaResultado.innerHTML = resultado;
}

function encriptar(){
    var inputTexto = document.getElementById("texto");
    resultado = inputTexto.value;

    if(!resultado) {
        alert("Por favor, ingrese un texto");
        return;
    }

    if(!(/^([a-z]+\s)*[a-z]+\s?$/.test(resultado))){
        alert("Ingresa solo letras minúsculas, sin acentos ni caracteres especiales");
        return;
    }

    resultado = resultado.replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

    mostrarResultado();
}

function desencriptar(){
    var inputTexto = document.getElementById("texto");
    resultado = inputTexto.value;

    if(!resultado) {
        alert("Por favor, ingrese un texto");
        return;
    }

    if(!(/^([a-z]+\s)*[a-z]+\s?$/.test(resultado))){
        alert("Ingresa solo letras minúsculas, sin acentos ni caracteres especiales");
        return;
    }

    resultado = resultado.replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    mostrarResultado();
}

function copiar(){
    if(!resultado){
        alert("No hay ningún mensaje a ser copiado");
        return;
    }
    navigator.clipboard.writeText(resultado);
}
    

