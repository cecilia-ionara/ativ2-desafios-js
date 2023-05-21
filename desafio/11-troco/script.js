function inicio() {
    let produto = window.prompt('Qual produto deseja comprar?')

    let custo = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))

    let pago = Number(window.prompt(`Quanto você deu para pagar ${produto}?`))

    let troco = pago - custo

    window.alert(`Você comprou ${produto} que custou R$ ${custo.toFixed(2)}.
Deu ${pago.toFixed(2)} em dinheiro e vai receber ${troco.toFixed(2)} de troco.
Volte sempre!`)
}