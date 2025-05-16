document.getElementById("verificarBtn").addEventListener("click", function() {
    const placa = document.getElementById("placa").value.toUpperCase(); 
    const prefixo = placa.substring(0, 3); 

  
    if (prefixo === "ABC") {
        document.getElementById("resultado").innerText = "Acesso liberado. Sem cobrança!";
    } else {
        document.getElementById("resultado").innerText = "Cobrança de R$1,00 pela entrada.";
    }
});

