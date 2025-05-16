//---Exercicios de fixação ---
// Checar idade com habilitação para dirigir
function dirigir(idade, habilitacao) {
    return idade >= 18 && habilitacao;
}
console.log(dirigir(17,true)); //
console.log(dirigir(30, true)); //

//---Executar de fixação ---
let a = true;
let b =true;

console.log(a || b); //
console.log(b || false); // |

//---Exercicio de fixação---
function fimdesemana(dia) {
    return dia =='Sabado' || dia == 'domingo'
}
console.log(fimdesemana("sabado")); //
console.log(fimdesemana("domingo")); //

//---Exercicios de fixação ---
function naoAdulto(idade) {
    return ! (idade >= 18);
}

console.log(naoAdulto(20)); //
console.log(naoAdulto(16)); //
    


