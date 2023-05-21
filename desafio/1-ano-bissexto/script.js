function inicio() {
    let ano = Number(window.prompt('Qual ano deseja verificar?'))

    let res = document.querySelector('#resultado')

    if (ano % 4 == 0 && ano % 100 != 0) {
        res.innerHTML = `O ano de ${ano} <strong id="bissexto"> É BISSEXTO</strong>&#x2705;</p>`
    }
    else if (ano % 400 == 0) {
        res.innerHTML = `O ano de ${ano} <strong id="bissexto"> É BISSEXTO</strong>&#x2705;</p>`
    }
    else {
        res.innerHTML = `O ano de ${ano} <strong id="naobissexto"> NÃO É BISSEXTO</strong>&#x274C;</p>`
    }
}


