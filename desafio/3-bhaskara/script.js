
let msg_equacao_atual = window.document.getElementById('equacao_atual')
let msg_calculo = window.document.getElementById('calculo')
let msg_valor = window.document.getElementById('valor')


function inicio() {
    let a = Number(window.prompt('Digite o valor a:'))
    let b = Number(window.prompt('Digite o valor b:'))
    let c = Number(window.prompt('Digite o valor c:'))

    let resultado = b ** 2 - 4 * a * c

    msg_equacao_atual.innerHTML = (`A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong>`)
    msg_calculo.innerHTML = (`O cálculo realizado será <strong>Δ = ${b}² - 4 .${a} . ${c}</strong>`)
    msg_valor.innerHTML = (`O valor calculado foi <strong id="destaque">Δ = ${resultado}</strong>`)

}