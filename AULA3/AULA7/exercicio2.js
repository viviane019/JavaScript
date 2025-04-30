function media() {
    let nome = window.prompt(`qual é o nome do aluno?`)
    let n1 = Number(window.prompt(`qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`além de ${n1},qual foi a outra nota de ${nome}?`))
    med = (n1 + n2)/2

    let msg // cria uma variavel e deixa ela vazia 
    if (med >=6) { // se por acaso a média foi 6.0 ou mais...
       msg = 'meus parabens!'
    }else{ //senao...
       msg = 'estude um pouco mais!'
    }

    let res = document.getElementById('situacao')
    res.innerHTML =`<p>calcule a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML +=`<p>as notas obtidas foram <mark>${n2}</mark>.</p>`
    res.innerHTML +=`<p>A media final sera <mark>${med}</mark>.</p>`
    res.innerHTML +=`<p>a mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
    // note que eu usei até um pouco de CSS pra fazer a mensagem ficar vermelha ;)
}