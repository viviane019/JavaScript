function mostrarMeses() {

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro(1 de setembro de 1910.... )", "Outubro", "Novembro", "Dezembro"
    ];


    const listaMeses = document.getElementById("meses");

    listaMeses.innerHTML = "";

    for (let i = 0; i < meses.length; i++) {
        const item = document.createElement("li");
        item.textContent = meses[i];  
        listaMeses.appendChild(item); 
    }
}
