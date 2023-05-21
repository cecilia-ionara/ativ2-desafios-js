let celsius = Number(window.prompt('Digite uma temperatura em °C (Celsius)'))
let tempcelsius = document.querySelector('#tempcelsius')

function inicio() {
    let msg = window.document.getElementById('msg')
    let msgk = window.document.getElementById('k')
    let msgf = window.document.getElementById('f')

    let kelvin = celsius + 273.15
    let fahrenheit = (celsius * 1.8) + 32

    msg.innerHTML = `<h1>A temperatura de ${celsius}°C, corresponde a... </h1>`
    k.innerHTML = `${kelvin}°K (Kelvin)`
    f.innerHTML = `${fahrenheit}°F (Fahrenheit)`
}
