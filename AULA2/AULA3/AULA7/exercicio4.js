function calcidade() {}
    let agora = new Date();
    let ano = agora.getFullYear();

let nasc = Number(window.prompt("em que ano voce nasceu?"));
let idade = ano - nasc;

let.saida = document.getElementById("idade");
saida.innerHTML =`<p>quem nasceu em ${nasc} vai completar <strong>${idade}</strong>
 anos em ${ano}.</p>;
 