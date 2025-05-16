const elevador = document.querySelector('.elevador');
const botoes_andar = document.querySelectorAll('.andar-botao');
const tamanho_piso = 70; // Altura de cada andar 

let andar_atual = 0;

botoes_andar.forEach(button => {
    button.addEventListener('click', () => {
        const andar_destino = parseInt(button.dataset.floor);
        moverElevador(andar_destino); 


    });
});

function moverElevador(andar_destino) {
    const distancia = andar_destino * tamanho_piso; // Calcular a posição correta
    elevador.style.bottom = `${distancia}px`; // Mover o elevador para o andar correto
    andar_atual = andar_destino; // Atualizar o andar atual
}