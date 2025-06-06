let preço = 1850
let porc = 10 
let valor = (preço * porc) / 100
let total = preço - valor
let res = document.getElementById('result')

//mensagem e valor com casas decimais 
res.innerHTML = `<p>0 produto custa R$${preço.toFixed(2)}.</p>`
res.innerHTML +=`<p>um desconta de R${porc}% sobre ele será de R${valor.toFixed(2)}.</p>`
res.innerHTML +=`<p>0 valor final a ser pago sera de R$${total.toFixed(2)}.</p>`                   