const btn = document.querySelectorAll('button')

// btn[0].classList.add('red')

const wrapper = document.querySelector('.btn-block')

const newButton = document.createElement('button')
wrapper.append(newButton)

// btn.forEach( bt => {
//     bt.addEventListener('click', (event) => {
//         if (event.target.classList.contains('red')) {
//             event.target.classList.remove('red')
//         } else {
//             event.target.classList.add('red')
//         }
//     })
// })

// wrapper.onclick = (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         if (event.target.classList.contains('red')) {
//             event.target.classList.remove('red')
//         } else {
//             event.target.classList.add('red')
//         }
//     }
// }