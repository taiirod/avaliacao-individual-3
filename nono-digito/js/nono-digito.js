const campoCpf = document.querySelector("#campo-cpf");

campoCpf.addEventListener("input", pegaNonoDigito);

function pegaNonoDigito() {
    var cpf = campoCpf.value;
    if (cpf.length === 11) {
        var nonoDigito = cpf.substr(8, 1);
        validaRegiao(nonoDigito);
    }
}

function validaRegiao(nonoDigito) {
    var descricaoRegiao = "";
    switch (nonoDigito) {
        case "1":
            descricaoRegiao = "Sua região é: 1ª: DF, GO, MT, MS e TO";
            break;
        case "2":
            descricaoRegiao = "Sua região é: 2ª: AC, AP, AM, PA, RO e RR";
            break;
        case "3":
            descricaoRegiao = "Sua região é: 3ª: CE, MA e PI";
            break;
        case "4":
            descricaoRegiao = "Sua região é: 4ª: AL, PB, PE e RN";
            break;
        case "5":
            descricaoRegiao = "Sua região é: 5ª: BA e SE";
            break;
        case "6":
            descricaoRegiao = "Sua região é: 6ª: MG";
            break;
        case "7":
            descricaoRegiao = "Sua região é: 7ª: ES e RJ";
            break;
        case "8":
            descricaoRegiao = "Sua região é: 8ª: SP";
            break;
        case "9":
            descricaoRegiao = "Sua região é: 9ª: PR e SC";
            break;
        case "0":
            descricaoRegiao = "Sua região é: 10.ª: RS";
            break;
        default:
            descricaoRegiao = "Região inválida";
            break;
    }
    descreveRegiao(descricaoRegiao);
}

function descreveRegiao(mensagem) {
    removeDescricaoAnterior();
    const novaMensagem = document.createElement("p");
    const texto = document.createTextNode(mensagem);
    novaMensagem.appendChild(texto)
    novaMensagem.id = "descricao-regiao"

   novaMensagem.style.marginTop = "30px";
   novaMensagem.style.fontSize = "30px";

    document.querySelector(".row").appendChild(novaMensagem);
}

function removeDescricaoAnterior() {
    const remove = document.querySelector("#descricao-regiao");
    if (remove != null) {
        remove.remove();
    }
}
