let msg = window.document.getElementById('msg')
let original = window.document.getElementById('original')
let msg_desconto = window.document.getElementById('msg_desconto')
let msg_valor_descontado = window.document.getElementById('msg_valor_descontado')

function inicio() {
    let produto = window.prompt('Qual é o produto que você está comprando?')

    let custo = Number(window.prompt(`Qual o preço de ${produto}?`))

    let desconto = (custo * 10) / 100
    let valor_descontado = custo - desconto

    msg.innerHTML = (`<h1>Calculando desconto de 10% para ${produto}</h1>`)

    original.innerHTML = (`O preço original era R$ ${custo.toFixed(2)}.`)
    msg_desconto.innerHTML = (`Você acaba de ganhar R$ ${desconto.toFixed(2)} de desconto (-10%).`)
    msg_valor_descontado.innerHTML = (`No fim você vai pagar R$ ${valor_descontado.toFixed(2)} no produto ${produto}.`)
}