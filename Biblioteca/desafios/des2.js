function conferirEstoque() {
    // Obter a quantidade inserida pelo usuário
    const quantidade = parseInt(document.getElementById("quantidade").value);
    
    // Definir a mensagem baseada na quantidade
    let mensagem = '';

    // Verificar se o estoque está baixo, regular ou bom
    if (quantidade < 30) {
        mensagem = "Estoque Baixo";
    } else if (quantidade > 100) {
        mensagem = "Estoque Bom";
    } else {
        mensagem = "Estoque Regular";
    }

    // Exibir a mensagem no elemento com id 'mensagem'
    document.getElementById("mensagem").innerText = mensagem;
}
