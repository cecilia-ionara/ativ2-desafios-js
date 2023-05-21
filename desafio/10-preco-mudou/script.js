let diferenca = window.document.getElementById('diferenca')
let analise = window.document.getElementById('analise')
let produto = window.document.getElementById('produto')

function inicio() {
    let anterior = Number(window.prompt(`Qual era o preço anterior do produto?`))
    let precoanterior = document.querySelector('#precoanterior')

    let atual = Number(window.prompt(`Qual é o atual preço do produto?`))
    let precoatual = document.querySelector('#precoatual')

    analise.innerHTML = `<h1>Analisando os valores informado</h1>`
    msg.innerHTML = `O produto custava R$ ${anterior.toFixed(2)} e agora custa R$${atual.toFixed(2)}`

    let dif1 = anterior - atual
    let dif2 = atual - anterior

    if (anterior > atual) {
        produto.innerHTML = ('Hoje o produto está mais barato.')
        diferenca.innerHTML = (`O preço caiu R$ ${dif1.toFixed(2)} em relação ao preço anterior`)
    } else if (anterior < atual) {
        produto.innerHTML = ('Hoje o produto está mais caro.')
        diferenca.innerHTML = (`O preço subiu R$ ${dif2.toFixed(2)} em relação ao preço anterior`)
    } else {
        produto.innerHTML = ('O preço do produto se manteve.')
    }
}