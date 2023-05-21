let cotacao = Number(window.prompt('Antes de mais nada, quanto está a cotação do dólar hoje?'))

function inicio() {
    let reais = Number(window.prompt('Quantos reais você tem na sua carteira?'))

    let dolar = reais / cotacao

    let res = window.document.getElementById('resultado')
    res.innerHTML = `Você tem R$ ${reais.toFixed(2)} na sua carteira. 
    Com R$ ${reais.toFixed(2)} você consegue comprar $ ${dolar.toFixed(2)} dólares.`
}
