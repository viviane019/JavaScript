//exemplo de contar

let contador = 0;
let resultado = document.getElementById('resultado')

function contar() {
    contador++
    resultado.innerHTML =`<p>agora a contar esta em <mark>${contador}</mark></p>`
}

function zerar() {
contador = 0
resultado.innerHTML = `<p>0 contador foi zerado</p>`
}
