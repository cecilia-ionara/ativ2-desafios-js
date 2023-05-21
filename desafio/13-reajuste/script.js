let msg = window.document.getElementById('msg')
let msg_salario = window.document.getElementById('msg_salario')
let msg_reajuste = window.document.getElementById('msg_reaj')
let msg_porcentagem = window.document.getElementById('msg_porc')

function inicio() {
    let nome = window.prompt('Qual é o nome do funcionário?')

    let salario = Number(window.prompt(`Qual é o salário de ${nome}?`))

    let porcentagem = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    let reajuste = window.document.getElementById('reajuste')
    reajuste = (salario * porcentagem) / 100

    let valor_reajustado = window.document.getElementById('valor_reajustado')
    valor_reajustado = reajuste + salario

    if (valor_reajustado > salario) {
        msg.innerHTML = (`<h1>${nome} recebeu um aumento salarial!</h1>`)
    } else {
        msg.innerHTML = (`<h1>${nome} não teve seu salário alterado!</h1>`)
    }

    msg_salario.innerHTML = (`O salário era R$ ${salario.toFixed(2)}`)
    msg_porcentagem.innerHTML = (`Com um aumento de ${porcentagem}%, o salário vai aumentar R$ ${reajuste.toFixed(2)} no próximo mês.`)
    msg_reajuste.innerHTML = (`E a partir daí, ${nome} vai passar a ganhar R$ ${valor_reajustado.toFixed(2)}.`)
}