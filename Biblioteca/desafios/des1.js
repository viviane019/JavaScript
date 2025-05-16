function realizarPedido() {
    const menu = {
        1: { nome: "Café Expresso", preco: 5.00 },
        2: { nome: "Cappuccino", preco: 8.00 },
        3: { nome: "Chocolate Quente", preco: 7.50 },
        4: { nome: "Chá", preco: 4.00 }
    };

    let opcao = prompt(
        "Bem-vindo ao Café Expresso! Escolha uma opção do menu:\n" +
        "1 - Café Expresso: R$ 5,00\n" +
        "2 - Cappuccino: R$ 8,00\n" +
        "3 - Chocolate Quente: R$ 7,50\n" +
        "4 - Chá: R$ 4,00"
    );

    opcao = parseInt(opcao);

    if (menu[opcao]) {
        const pedido = menu[opcao];
        alert(`Você escolheu: ${pedido.nome}\nValor total: R$ ${pedido.preco.toFixed(2)}`);
    } else {
        alert("Opção inválida. Por favor, tente novamente.");
    }
}
