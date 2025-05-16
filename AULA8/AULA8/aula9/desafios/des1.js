
function alterarCor() {
    // Coletando o valor digitado pelo usuário
    const cor = parseInt(document.getElementById("semaforo").value);
    const resultadoDiv = document.getElementById("resultado");

    // Verificando a cor escolhida e alterando o fundo
    if (cor === 1) {
        resultadoDiv.innerHTML = "Pare!";
        resultadoDiv.className = "resultado vermelho"; // Aplica a classe 'vermelho'
    } else if (cor === 2) {
        resultadoDiv.innerHTML = "Atenção!";
        resultadoDiv.className = "resultado laranja"; // Aplica a classe 'laranja'
    } else if (cor === 3) {
        resultadoDiv.innerHTML = "Siga!";
        resultadoDiv.className = "resultado verde"; // Aplica a classe 'verde'
    } else {
        resultadoDiv.innerHTML = "Por favor, digite 1, 2 ou 3.";
        resultadoDiv.className = "resultado"; // Classe padrão
    }
}

