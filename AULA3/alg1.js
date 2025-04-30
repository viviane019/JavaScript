//operadora logica e (&&) com valores boleanos

let a = true;
let b= false;
let c= true;
let d= false;

console.log(a && b);//false
console.log(a && true); // true
console.log("resultado de a c:" + a && b); // verdadeiro 
console.log("resultado de b d:"+ b && d); // falso

//operador logico OU (||) com valores booleanos
let e = true;
let f = false;
let g = false;
let h = true;

console.log("resultado de e || f: " + (e || f )); // verdadeiro
console.log("resultado de f || g: " + (f || f)); // verdadeiro
console.log("resultado de g || f: " + (g || f)); // falso
console.log("resultado de h || f: " + (h || f)); // falso

let v = true;
let l = false;
let t = true;
let r = true;

console.log("resultado de !v: + !v" + !v); // falso
console.log("resultado de !l: + !l" + !l); // vardadeiro
console.log("resultado de !t: + !t" + !t); // falso
console.log("resultado de !r: + !t" + !r); // verdadeiro

let ab = true;
let bc = false;

//operador E (&&)
let eRESULTADO = ab && bc;
console.log("resultado de ab && bc:) " + eRESULTADO); // verdadeiro

//operador Not (!)
let notResultado = !ab;
console.log("resultado de !ab: " + notResultado); // verdadeiro

// conbinação de operadores logicos
let combinados = (ab && !bc) || (!ab && bc);
console.log("resultado de (ab && !bc) || (!ab && bc) " + combinados); // verdadeiro


//Exemplos de operadores logicos com valores numericos 

let x = 10;
let y = 5;
let z = 0;

//operador E (&&) com valores numericos 
let resultadoE = (x > y ) && (y > z); //
console.log("resultado de (x > z) && (y > z): " + resultadoE); // verdadeiro
console.log("resultado de (z < y) && (x > z): " + (z < y) && (x > z)); //

//operador OU (||) com valores numericos 
let resultadoOU = ( x < y) || (y > z);
console.log("resultado de (x < y) || (y > z): " + resultadoOU); //

//operador NAO (!) com valores numericos
let resultadon = !(x < y);
console.log("resultado de !(x < y): " + resultadon); //

// combinação de operadores logicos com valores numericos
let resultadoC = ((x > y) && (y > z)) || ((x < Y) && (z > y));
//console.log("resultado de ((x > y) && (y > z)) || (x > y) && (y > z): " + resultadoC; // 