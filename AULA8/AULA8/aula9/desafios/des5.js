function realizarReserva() {
    // Coletando os dados inseridos pelo usuário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const produto = document.getElementById("produto").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);

    // Verificando se todos os campos foram preenchidos corretamente
    if (nome === "" || email === "" || produto === "" || isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Exibindo os resultados da reserva
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.display = 'block'; // Torna o resultado visível
    resultadoDiv.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Produto:</strong> ${produto}</p>
        <p><strong>Quantidade:</strong> ${quantidade}</p>
        <p><strong>Status:</strong> Reserva realizada com sucesso!</p>
    `;
}


