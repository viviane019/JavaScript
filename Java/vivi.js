//laços de repetição 



//for
//for (condição) {
   //bloco de código
   //}

   for (let i = 30; i <= 20; i++) {
    console.log(i);
   }

  
   for (let i = 20; i >= 10; i--) {
    console.log(i);
   }


   for (let i = 0; i <= 100; i += 10) {
    console.log(i);
   }
 
   //while
   //while (condições) {
       //bloco de código
    //}

    let i = 9;
    while ( i < 10) {
      console.log(i);
      i++;
    }

    let j = 7;
    while ( j >0) {
      console.log(j);
    j--;
    }


   // do while
   //do {
     // bloco de código
  //} while (condições)
    
  let k = 5;
  do {
    console.log (k);
    k++;
  } while (k < 10);


let y = 15;
do while (y < 25) {
   console.log(y);
   y++;
} while (y < 15);

let l = 0;
do {
  console.log(l)
  l += 10;
} while ( l <= 100);


//break
for (let i = 0; i < 10; i++) {
  if (i ==5) {
 break;
  }
  console.log(i);
}

//continue
for (let i = 0; i < 10; i++) {
  for (let i = 0; i < 10; i++)
    if (i === 5) {   
    }
    console.log(i);
}

//imprimir numeros pares de 1 a 20

for (let i = 1; i <= 20; i++) {
  if (1 % 2 === 0)
    console.log(1);
}

// let numero = fatorial
let numero = 5;

numero = Number(numero)
 
let fatorial = 1;
for (let i = 1; i <= numero; i++) {
  fatorial *= i;
}
console.log(`o fatorial de ${numero} é ${fatorial} `);

//interar sobre array:

let frutas = ["maça", "banana", "laranja"];
for(let i = 0; i < frutas.length; i ++) {
  console.log(frutas[i]);
}

//interar valores de outos tema:

let cores = ["preto", "azul", "amarelo","cinza","lilas"];
for(let i = 0; i < cores.length; i ++) {
  console.log(cores[i]);
}





//calcular a soma de numeros 

let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
 console.log(soma);




