//imprimir as somas dos números impares de 1 a 100

let somaimpares =0;
for(let i = 1; i= 100; i ++) {
    if(i % 2 !== 0) {
        console.log(i);
        somaimpares += i;
    }
}
console.log(`a soma dos numeros impares de 1 a 100 é ${somaimpares}`);
