let msg_distancia = window.document.getElementById('distancia')
let msg_km = window.document.getElementById('km')
let msg_hect = window.document.getElementById('hect')
let msg_decam = window.document.getElementById('decam')
let msg_deci = window.document.getElementById('deci')
let msg_cent = window.document.getElementById('cent')
let msg_mili = window.document.getElementById('mili')

function inicio() {
    let num = Number(window.prompt('Digite uma distância em metros (m):'))

    msg_distancia.innerHTML = (`A distância de <strong>${num}</strong> metros, corresponde a ..`)

    let km = num / 1000
    let hect = num / 100
    let decam = num / 10
    let deci = num * 10
    let cent = num * 100
    let mili = num * 1000

    msg_km.innerHTML = (`${km} quilômetros (km)`)
    msg_hect.innerHTML = (`${hect} hectômetros (Hm)`)
    msg_decam.innerHTML = (`${decam} decâmetros (Dam)`)
    msg_deci.innerHTML = (`${deci} decímetros (dm)`)
    msg_cent.innerHTML = (`${cent} centímetros (cm)`)
    msg_mili.innerHTML = (`${mili} milímetros (mm)`)

}