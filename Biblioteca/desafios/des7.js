function mostrarPromocao() {
    const pedido = document.getElementById("pedido").value;
    const resultado = document.getElementById("resultado");

    if (pedido === "casquinha") {
        resultado.innerHTML = "Você pediu uma Casquinha! Parabéns, você ganhou outra casquinha grátis!";
    } else if (pedido === "picolé") {
        resultado.innerHTML = "Você pediu um Picolé! Parabéns, você ganhou um cupom de desconto para a próxima compra!";
    } else {
        resultado.innerHTML = "Escolha uma opção válida!";
    }
}
