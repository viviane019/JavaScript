 let biblioteca = [];

 function adicionarlivro() {
 let titulo = prompt ("digite o titulo do livro");
 let autor = prompt ("digite o autor do livro");
 let ano = prompt ("digite o ano do livro");
 biblioteca.push({titulo, autor, ano});
 alert ("livro adicionado com sucesso");
 }

 adicionarlivro();
 
 function exibirMenu () {
    return prompt(
       "menu\n" +
       "1. adicionr livro \n" +
       "2. buscar livro\n" +
       "3. listar livros\n" +
       "4. sair\n" +
       "escolher uma opção:"
    );
 }


 function listarLivro() {
    if (biblioteca.length > 0) {
        let mensagem = "listar de livros na biblioteca:\n";
        biblioteca.forEach((livro) => {
            mensagem += 'Titulo: ${livro.titulo}, autor: ${livro.autor}, ano: ${livro.ano}\n',     
   });
alert(mensagem);
} else {
    alert("a biblioteca está vazia.");
    }
    }




    function emprestimodelivros () {
        return prompt(
           "menu\n" +
           "1. adicionr livro \n" +
           "2. buscar livro\n" +
           "3. listar livros\n" +
           "4. emprestar livro" +
           "5. sair" +
           "escolher uma opção:"
        );
     }
    

function emprestimodelivros () {
let livrosemprestimo = prompt("digite o titulo do livro que deseja emprestar:");
let autoremprestimo = prompt("digite o nome do autor do livroa emprestar:");
 
biblioteca.push({livrosemprestimo, autoremprestimo});
alert("emprestimo de livros realizados com sucesso!");
}




