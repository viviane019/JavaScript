//DESAFIO 1

function podedirigir() {
    let idade =prompt("digite sua idade");
    let habilitacao = prompt("possui habilitacao? (s/n)");
   if (idade >= 18 && habilitacao == "s") {
    alert("pode dirigir");
   }else {
    alert("nao pode dirigir")
   }};

   podedirigir();
       