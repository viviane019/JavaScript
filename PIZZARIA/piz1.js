function exibirMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  mensagem.className = `mensagem ${tipo}`;
  mensagem.classList.remove("hidder");
  setTimeout(() => {
    mensagem.classList.add("hidder");
  }, 3000);
}

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    exibirMensagem("Login realizado com sucesso!", "sucesso");
    setTimeout(() => {
      window.location.href = "piz1.html";
    }, 1000);
  } else {
    exibirMensagem("Usuário ou senha incorretos!", "erro");
  }
}

let pizzaria = [];
let pizzaParaAlterar = null;
let pedidos = [];
let vendas = [];

function mostrarSecao(secao) {
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("consulta").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");
  document.getElementById("pedido").classList.add("hidden");
  document.getElementById("venda").classList.add("hidden");
  document.getElementById("relatorio-vendas").classList.add("hidden");

  document.getElementById(secao).classList.remove("hidden");
}

function adicionarPizza() {
  const nome = document.getElementById("nome").value;
  const ingredientes = document.getElementById("ingredientes").value;
  const tamanho = parseInt(document.getElementById("tamanho").value);

  if (nome && ingredientes && tamanho) {
    pizzaria.push({ nome, ingredientes, tamanho });
    document.getElementById("nome").value = "";
    document.getElementById("ingredientes").value = "";
    document.getElementById("tamanho").value = "";
    atualizarLista();
    alert("Pizza adicionada com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function buscarPizza() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = pizzaria.filter((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

function buscarPizzaParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();
  pizzaParaAlterar = pizzaria.find((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );

  if (pizzaParaAlterar) {
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("novo-nome").value = pizzaParaAlterar.nome;
    document.getElementById("novo-ingredientes").value = pizzaParaAlterar.ingredientes;
    document.getElementById("novo-tamanho").value = pizzaParaAlterar.tamanho;
  } else {
    alert("Pizza não encontrada.");
  }
}

function alterarPizza() {
  if (pizzaParaAlterar) {
    const novoNome = document.getElementById("novo-nome").value;
    const novosIngredientes = document.getElementById("novo-ingredientes").value;
    const novoTamanho = parseInt(document.getElementById("novo-tamanho").value);

    if (novoNome && novosIngredientes && novoTamanho) {
      pizzaParaAlterar.nome = novoNome;
      pizzaParaAlterar.ingredientes = novosIngredientes;
      pizzaParaAlterar.tamanho = novoTamanho;

      atualizarLista();
      alert("Pizza alterada com sucesso!");
      document.getElementById("form-alterar").classList.add("hidden");
      pizzaParaAlterar = null;
      document.getElementById("busca-alterar").value = "";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  } else {
    alert("Nenhuma pizza selecionada para alteração.");
  }
}

function atualizarLista(lista = pizzaria) {
  const tabela = document.getElementById("lista-pizzas");
  tabela.innerHTML = "";

  if (lista.length === 0) {
    tabela.innerHTML = `<tr><td colspan="3">Nenhuma pizza encontrada.</td></tr>`;
    return;
  }

  lista.forEach((pizza) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${pizza.nome}</td>
      <td>${pizza.ingredientes}</td>
      <td>${pizza.tamanho} cm</td>
    `;
    tabela.appendChild(linha);
  });
}

function realizarPedido() {
  const nome = document.getElementById("pedido-pizza").value;
  const cliente = document.getElementById("pedido-cliente").value;

  if (nome && cliente) {
    const pizza = pizzaria.find(
      (pizza) => pizza.nome.toLowerCase() === nome.toLowerCase()
    );

    if (pizza) {
      pedidos.push({ nome: pizza.nome, cliente });
      atualizarListaPedidos();
      alert("Pedido realizado com sucesso!");
      document.getElementById("pedido-pizza").value = "";
      document.getElementById("pedido-cliente").value = "";
    } else {
      alert("Pizza não encontrada.");
    }
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function atualizarListaPedidos() {
  const listaPedidos = document.getElementById("lista-pedidos");
  listaPedidos.innerHTML = "";

  pedidos.forEach((pedido) => {
    const item = document.createElement("li");
    item.textContent = `Pizza: ${pedido.nome} - Cliente: ${pedido.cliente}`;
    listaPedidos.appendChild(item);
  });
}

function registrarVenda() {
  const nome = document.getElementById("venda-nome").value;
  const preco = document.getElementById("venda-preco").value;
  const comprador = document.getElementById("venda-comprador").value;

  if (nome && preco && comprador) {
    const listaVendas = document.getElementById("lista-vendas");
    const item = document.createElement("li");
    item.textContent = `Pizza: ${nome}, Preço: R$${parseFloat(preco).toFixed(2)}, Comprador: ${comprador}`;
    listaVendas.appendChild(item);

    vendas.push({ nome, preco: parseFloat(preco), comprador });

    document.getElementById("venda-nome").value = "";
    document.getElementById("venda-preco").value = "";
    document.getElementById("venda-comprador").value = "";
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}

function gerarRelatorioVendas() {
  const tabelaRelatorio = document.getElementById("tabela-relatorio-vendas");
  tabelaRelatorio.innerHTML = "";

  if (vendas.length === 0) {
    alert("Nenhuma venda registrada.");
    return;
  }

  let totalVendas = 0;

  vendas.forEach((venda) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${venda.nome}</td>
      <td>R$${venda.preco.toFixed(2)}</td>
      <td>${venda.comprador}</td>
    `;
    tabelaRelatorio.appendChild(linha);

    totalVendas += venda.preco;
  });

  const linhaTotal = document.createElement("tr");
  linhaTotal.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$${totalVendas.toFixed(2)}</strong></td>
    <td></td>
  `;
  tabelaRelatorio.appendChild(linhaTotal);

  document.getElementById("relatorio-vendas").classList.remove("hidden");
}
