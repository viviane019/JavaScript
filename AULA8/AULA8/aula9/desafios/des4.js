function calcularIMC() {
    // Obter os valores dos campos de entrada
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verificar se todos os campos foram preenchidos
    if (!nome || !peso || !altura) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);

    // Classificar o IMC
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // Exibir o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)}.<br>Classificação: ${classificacao}.`;
}



