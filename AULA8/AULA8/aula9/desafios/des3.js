document.getElementById("formNotas").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtendo os valores dos campos
    const nomeAluno = document.getElementById("nomeAluno").value.trim();
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const trabalho = parseFloat(document.getElementById("trabalho").value);

    // Calculando a média
    const media = (nota1 + nota2 + nota3 + trabalho) / 4;

    // Exibindo o resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.display = "block";

    let resultado = "";
    let classe = "";

    if (media >= 6) {
        resultado = `Aluno: ${nomeAluno} - Aprovado! (Média: ${media.toFixed(2)})`;
        classe = "aprovado";
    } else if (media >= 5) {
        resultado = `Aluno: ${nomeAluno} - Recuperação! (Média: ${media.toFixed(2)})`;
        classe = "recuperacao";
    } else {
        resultado = `Aluno: ${nomeAluno} - Reprovado! (Média: ${media.toFixed(2)})`;
        classe = "reprovado";
    }

    // Exibe o resultado com a classe de acordo com a situação
    resultadoDiv.innerHTML = `<p class="${classe}">${resultado}</p>`;
});
