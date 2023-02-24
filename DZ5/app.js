const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

som.addEventListener('input', () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'data.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        usd.value = (som.value / data.usd).toFixed(2)
    })
})

const convert = (elem, target, target2, isTrue) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', 'data.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            if (isTrue) {
                target.value = (elem.value / data.usd).toFixed(2)
                target2.value = (elem.value / data.eur).toFixed(2)
            } else if (elem === eur) {
                target.value = (elem.value * data.eurusd).toFixed(2)
                target2.value = (elem.value * data.eur).toFixed(2)
            } else {
                target.value = (elem.value * data.usd).toFixed(2)
                target2.value = (elem.value / data.eurusd).toFixed(2)
            }
            elem.value === '' && (target.value = '')
            elem.value === '' && (target2.value = '')
        }
    }
}

convert(som, usd, eur, true)
convert(usd, som, eur, false)
convert(eur, usd, som, false)
