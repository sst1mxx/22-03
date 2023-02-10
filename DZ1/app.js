// 1-oe задание

const innInput = document.querySelector('#innInput')
const innCheck = document.querySelector('#innCheck')
const innResult = document.querySelector('.innResult')

const regExp = /^\d{14}$/

innCheck.onclick = () => {
    if (regExp.test(innInput.value)) {
        const array = [];
        array.push(innInput.value)
        if (array[0][0] > 2) {
            innResult.innerHTML = 'X'
            innResult.style.color = 'Red'
            alert(`Неправильно введена 1-ая цифра ИНН`)
        } else {
            innResult.innerHTML = 'OK'
            innResult.style.color = 'Green'
            innInput.value = ''
            innInput.placeholder = 'Успешно'
        }
    } else {
        alert(`Ошибка, повторите снова`)
        innResult.innerHTML = 'X'
        innResult.style.color = 'Red'
    }
}


// 2-oe задание

let num = 0
let box = document.querySelector('.box')

const boxAnimation = () => {
    num++
    box.style.left = `${num}px`
    if (num < 450) {
        setTimeout(boxAnimation, 20)
    }
}

boxAnimation()