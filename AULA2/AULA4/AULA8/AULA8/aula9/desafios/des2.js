let nomeCliente = "";
let servicosSelecionados = [];
let totalPago = 0;

const servicos = {
    trocaDeOleo: { nome: "Troca de Óleo", preco: 150 },
    alinhamento: { nome: "Alinhamento de Direção", preco: 200 },
    balanceamento: { nome: "Balanceamento", preco: 100 },
    trocaDePneus: { nome: "Troca de Pneus", preco: 400 },
    diagnosticoMotor: { nome: "Diagnóstico de Motor", preco: 250 }
};

// Função para tratar o nome do cliente
document.getElementById('clienteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    nomeCliente = document.getElementById('nomeCliente').value.trim();
    
    if (nomeCliente === "") {
        alert("Por favor, insira seu nome!");
        return;
    }

    // Após o nome ser inserido, o menu de serviços aparece
    document.getElementById('menu').style.display = 'block';
    document.getElementById('clienteForm').style.display = 'none';
});

function selecionarServico(servico) {
    // Adiciona o serviço ao array de serviços selecionados e atualiza o total
    servicosSelecionados.push(servicos[servico]);
    totalPago += servicos[servico].preco;
    document.getElementById('finalizar').style.display = 'block';
}

function mostrarResumo() {
    // Exibe o resumo com o nome do cliente, serviços escolhidos e o valor total
    let resumoHTML = `<h3>Resumo do Serviço</h3>`;
    resumoHTML += `<p>Cliente: ${nomeCliente}</p>`;
    resumoHTML += `<ul>`;
    servicosSelecionados.forEach(servico => {
        resumoHTML += `<li>${servico.nome} - R$${servico.preco}</li>`;
    });
    resumoHTML += `</ul>`;
    resumoHTML += `<p><strong>Total: R$${totalPago}</strong></p>`;

    // Exibe o resumo e oculta o menu e o botão de finalizar
    document.getElementById('resumo').innerHTML = resumoHTML;
    document.getElementById('resumo').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('finalizar').style.display = 'none';
}

