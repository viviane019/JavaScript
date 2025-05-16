let cardapio = [];
let pizzaParaAlterar = null;

function mostrarSecao(secao) {
  const secoes = [
    "cadastro",
    "consulta",
    "alterar",
    "pedido",
    "venda",
    "relatorio-vendas"
  ];

  secoes.forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });

  document.getElementById(secao).classList.remove("hidden");
}

// CADASTRAR PIZZA
function adicionarPizza() {
  const nome = document.getElementById("nome-pizza").value;
  const ingredientes = document.getElementById("ingredientes").value;
  const preco = parseFloat(document.getElementById("preco").value);

  if (nome && ingredientes && preco) {
    cardapio.push({ nome, ingredientes, preco });
    document.getElementById("nome-pizza").value = "";
    document.getElementById("ingredientes").value = "";
    document.getElementById("preco").value = "";
    atualizarCardapio();
    alert("Pizza adicionada com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

