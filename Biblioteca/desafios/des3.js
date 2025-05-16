function calcularPreco() {
    let codigo = document.getElementById("codigo").value;
    let preco = parseFloat(document.getElementById("preco").value);
    
    if (codigo == 1 || codigo == 10) {
        preco *= 1.10; 
    }
    
    document.getElementById("resultado").innerText = `Preço final: R$ ${preco.toFixed(2)}`;
}
