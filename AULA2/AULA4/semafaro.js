let estado = 0;

function mudarluz() {
    const luzVermelha = document.getElementById("vermelho");
    const luzLaranja = document.getElementById("laranja");
    const luzAmarelo = document.getElementById("amarelo");  
    const luzVerde = document.getElementById("verde");  
    const luzAzul = document.getElementById("azul");

    luzVermelha.classList.remove("vermelho");
    luzLaranja.classList.remove("laranja");
    luzAmarelo.classList.remove("amarelo"); 
    luzVerde.classList.remove("verde");
    luzAzul.classList.remove("azul");

    if (estado === 0) {
        luzVermelha.classList.add("vermelho");
        estado = 1;
    }
    else if (estado === 1) {
        luzLaranja.classList.add("laranja");
        estado = 2;
    } 
    else if (estado === 3) {
        luzAmarelo.classList.add("amarelo");
        estado = 4;
    }
    else if (estado === 5) {
        luzVerde.classList.add("verde");
        estado = 6;
    }
    else if (estado === 7) {
        luzAzul.classList.add("azul");
        estado = 0;
    }
}

   


