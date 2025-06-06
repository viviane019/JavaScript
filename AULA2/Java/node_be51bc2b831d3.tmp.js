//imprimir 11 vezes "olá mundo"

for(let i = 0; i < 11; i++) {
    console.log("ola mundo")
}

//imprimir um resultado de uma tabuada

let numero = 5;//voce pode mudar este numero para qualquer tabuada que deseja
for(let i = 1; i <=20; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`) 
}

//imprimir as somas dos números impares de 1 a 100

let somaimpares =0;
for(let i = 1; i= 100; i ++) {
    if(i % 2 !== 0) {
        console.log(i);
        somaimpares += i;
    }
}
console.log(`a soma dos numeros impares de 1 a 100 é ${somaimpares}`);

//imprimir um resultado em sequência de 10 a 1  "feliz ano novo"

for(let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("felis ano novo!")
