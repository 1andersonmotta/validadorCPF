function VerificarCPF() {
    var cpf = String(document.getElementById("cpf1").value);
    var soma = 0

    for (i = 0; i <= 8; i++) {
        soma += cpf[i] * (10 - i);
    }
    var Dv1 = 11 - (soma % 11);


    soma = 0

    for (i = 0; i <= 9; i++) {
        soma += cpf[i] * (11 - i);
    }
    var Dv2 = 11 - (soma % 11);


    if (cpf[9] == Dv1 && cpf[10] == Dv2) {
        alert("CPF Válido");

    } else {
        alert("ERRO!! CPF Inválido");

    }
}

