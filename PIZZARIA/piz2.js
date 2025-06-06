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
  const usuarioCorreto = "vivi";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    exibirMensagem("Login realizado com sucesso!", "sucesso");
    setTimeout(() => {
      window.location.href = "piz2.html";
    }, 1000);
  } else {
    exibirMensagem("Usuário ou senha incorretos!", "erro");
  }
}


// --- Cadastro ---
const formCadastro = document.getElementById('form-cadastro');
if (formCadastro) {
  formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereco').value.trim();

    if (nome && telefone && endereco) {
      // Salva cliente no localStorage
      localStorage.setItem('cliente', JSON.stringify({ nome, telefone, endereco }));
      alert('Cadastro feito com sucesso! Agora você será levado ao cardápio.');
      window.location.href = 'cardapio.html';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
}

// --- Cardápio ---
const pizzas = [
  { nome: 'Marguerita', preco: 100.0, ingredientes: 'Molho, queijo, manjericão' },
  { nome: 'Pepperoni', preco: 90.0, ingredientes: 'Molho, queijo, pepperoni' },
  { nome: 'Frango', preco: 90.0, ingredientes: 'Frango, catupiry, queijo' },
  { nome: 'Portuguesa', preco: 110.0, ingredientes: 'Presunto, ovo, cebola, azeitona' },
  { nome: 'Mussarela', preco: 90.0, ingredientes: 'Mussarela, provolone, parmesão, gorgonzola' },
 
];

let pedido = [];

function carregarCardapio() {
  const listaPizzas = document.getElementById('lista-pizzas');
  if (!listaPizzas) return;

  listaPizzas.innerHTML = '';

  pizzas.forEach((pizza, index) => {
    const card = document.createElement('div');
    card.className = 'pizza-card';
    card.innerHTML = `
      <h3>${pizza.nome}</h3>
      <p><em>${pizza.ingredientes}</em></p>
      <p><strong>R$ ${pizza.preco.toFixed(2)}</strong></p>
      <button data-index="${index}">Comprar</button>
    `;
    listaPizzas.appendChild(card);
  });

  document.querySelectorAll('.pizza-card button').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.getAttribute('data-index');
      adicionarAoPedido(pizzas[idx]);
    });
  });
}

function adicionarAoPedido(pizza) {
  pedido.push(pizza);
  atualizarPedido();
}

function atualizarPedido() {
  const listaPedido = document.getElementById('pedido-lista');
  const totalPedido = document.getElementById('total-pedido');

  listaPedido.innerHTML = '';

  let total = 0;

  pedido.forEach((pizza, i) => {
    const li = document.createElement('li');
    li.textContent = `${pizza.nome} - R$ ${pizza.preco.toFixed(2)}`;
    listaPedido.appendChild(li);
    total += pizza.preco;
  });

  totalPedido.textContent = total.toFixed(2);
}

function finalizarPedido() {
  const formaPagamento = document.getElementById('forma-pagamento').value;
  const cliente = JSON.parse(localStorage.getItem('cliente'));

  if (!cliente) {
    alert('Cliente não cadastrado! Volte para cadastro.');
    window.location.href = 'index.html';
    return;
  }

  if (pedido.length === 0) {
    alert('Você precisa escolher pelo menos uma pizza.');
    return;
  }

  if (!formaPagamento) {
    alert('Selecione uma forma de pagamento.');
    return;
  }

  alert(`Pedido finalizado!\nCliente: ${cliente.nome}\nTotal: R$ ${pedido.reduce((sum,p) => sum+p.preco,0).toFixed(2)}\nPagamento: ${formaPagamento}`);

  // Limpa pedido
  pedido = [];
  atualizarPedido();
  document.getElementById('forma-pagamento').value = '';
}

// Se estiver na página do cardápio, carrega ele e conecta botão
if (document.getElementById('lista-pizzas')) {
  carregarCardapio();

  document.getElementById('finalizar-pedido').addEventListener('click', finalizarPedido);
}
