let analise = window.document.getElementById('analise')
let notas = window.document.getElementById('notas')
let msgmedia = window.document.getElementById('msgmedia')

function inicio() {
    let nome = window.prompt('Qual é nome do aluno?')
    let n1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    let n2 = Number(window.prompt(`Segunda nota de ${nome}:`))

    analise.innerHTML = `<h1>Analisando a situação de ${nome}</h1>`

    let media = (n1 + n2) / 2

    notas.innerHTML = `Com as notas ${n1} e ${n2}, <strong> a média é ${media}</strong>`

    if (media < 3) {
        msgmedia.innerHTML = `Com média abaixo de 3, o aluno está <strong id='reprovado'>REPROVADO</strong> `
    }
    if (media >= 3 && media <= 6) {
        msgmedia.innerHTML = `Com média entre 3,0 e 6,0, o aluno está em <strong id='recuperacao'>RECUPERAÇÃO</strong> `
    }
    if (media > 6) {
        msgmedia.innerHTML = `Com média acima de 6,0, o aluno está <strong id='aprovado'>APROVADO</strong> `
    }
}