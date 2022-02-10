const botaoVermelho = document.querySelector("#botao-vermelho");
const botaoAmarelo = document.querySelector("#botao-amarelo");
const botaoVerde = document.querySelector("#botao-verde");

var VERMELHO = "vermelho";
var AMARELO = "amarelo";
var VERDE = "verde";

botaoVermelho.addEventListener("click", mostraSinalVermelho);
botaoAmarelo.addEventListener("click", mostraSinalAmarelo);
botaoVerde.addEventListener("click", mostraSinalVerde);

function mostraSinalVermelho() {
    removeSemaforoAnterior()
    mudarSemaforo(VERMELHO);

}

function mostraSinalAmarelo() {
    removeSemaforoAnterior()
    mudarSemaforo(AMARELO);

}

function mostraSinalVerde() {
    removeSemaforoAnterior()
    mudarSemaforo(VERDE);

}

function mudarSemaforo(cor) {
    const img = document.createElement("img")
    img.id = "imagem-semaforo";
    img.style.width = "117px";
    img.style.height = "244px";

    switch (cor) {
        case VERMELHO:
            img.src = "/semaforo/imgs/sinal_vermelho.jpg";
            break;
        case AMARELO:
            img.src = "/semaforo/imgs/sinal_amarelo.jpg";
            break;
        case VERDE:
            img.src = "/semaforo/imgs/sinal_verde.jpg";
            break;
    }
    document.querySelector(".row").appendChild(img);
}

function removeSemaforoAnterior() {
    const remove = document.querySelector("#imagem-semaforo");
    if (remove != null) {
        remove.remove();
    }
}
