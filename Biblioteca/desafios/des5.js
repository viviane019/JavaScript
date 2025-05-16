function rastrear() {
    const sigla = document.getElementById("sigla").value.toUpperCase();
    const estados = { "AB": "São Paulo", "CD": "Rio de Janeiro", "EF": "Minas Gerais" };
    const resultado = estados[sigla] ? `Localização do pedido: ${estados[sigla]}` : "Sigla não encontrada.";
    document.getElementById("resultado").innerText = resultado;
}
