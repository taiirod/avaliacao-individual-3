const campoCpf = document.querySelector("#campo-cpf");

campoCpf.addEventListener("input", validaRegiao);

function validaRegiao() {
    var cpf = campoCpf.value;
    if (cpf.length === 11 && validaCpf(cpf)) {
        var nonoDigito = pegaNonoDigito(cpf)
        cpf = formataCpf(cpf)
        var descricaoRegiao = "";
        switch (nonoDigito) {
            case "1":
                descricaoRegiao = `A região do cpf ${cpf} é: 1ª: DF, GO, MT, MS e TO`;
                break;
            case "2":
                descricaoRegiao = `A região do cpf ${cpf} é: 2ª: AC, AP, AM, PA, RO e RR`;
                break;
            case "3":
                descricaoRegiao = `A região do cpf ${cpf} é: 3ª: CE, MA e PI`;
                break;
            case "4":
                descricaoRegiao = `A região do cpf ${cpf} é: 4ª: AL, PB, PE e RN`;
                break;
            case "5":
                descricaoRegiao = `A região do cpf ${cpf} é: 5ª: BA e SE`;
                break;
            case "6":
                descricaoRegiao = `A região do cpf ${cpf} é: 6ª: MG`;
                break;
            case "7":
                descricaoRegiao = `A região do cpf ${cpf} é: 7ª: ES e RJ`;
                break;
            case "8":
                descricaoRegiao = `A região do cpf ${cpf} é: 8ª: SP`;
                break;
            case "9":
                descricaoRegiao = `A região do cpf ${cpf} é: 9ª: PR e SC`;
                break;
            case "0":
                descricaoRegiao = `A região do cpf ${cpf} é: 10.ª: RS`;
                break;
            default:
                descricaoRegiao = "Região inválida";
                break;
        }
        descreveRegiao(descricaoRegiao);
    } else if (cpf.length === 11 && !validaCpf(cpf)){
        descreveRegiao("CPF Inválido");
    }
}

function pegaNonoDigito(cpf) {
    return cpf.substr(8, 1);
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

function formataCpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function validaCpf(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
