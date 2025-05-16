function verificarPromocao() {
    const pizza1 = document.getElementById("pizza1").value;
    const pizza2 = document.getElementById("pizza2").value;
    const resultado = document.getElementById("resultado");

    if (pizza1 === "grande" && pizza2 === "grande") {
        resultado.innerHTML = "Você ganhou um refrigerante de 2 litros!";
    } else if ((pizza1 === "media" && pizza2 === "pequena") || (pizza1 === "pequena" && pizza2 === "media")) {
        resultado.innerHTML = "Você ganhou uma porção de pão de alho!";
    } else {
        resultado.innerHTML = "Você não ganhou nenhum brinde.";
    }
}
