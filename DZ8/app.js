const card = document.querySelector('.picture-card')
const url = 'https://jsonplaceholder.typicode.com/photos'
const block = document.querySelector('.block')

const getPicture = async () => {
    const response = await fetch(url)
    const data = await response.json()
    try {
        data.slice(0, 200).forEach(item => {
            const div = document.createElement('div')
            div.setAttribute('class', 'picture')

            div.innerHTML = `
                <img src="${item.url}" alt="">    
            `
            card.append(div)
        })
    } catch {
        console.error('Error')
    } finally {
        console.warn('Done')
    }
}

getPicture()


const buttons = document.querySelectorAll('.secondExample')
let count = 0;

const h2 = document.querySelector('h2'),
    span = document.querySelector('span'),
    h3 = document.querySelector('h3')


buttons.forEach(item => {
    item.addEventListener('click', async (e) => {
        if (e.target.textContent === 'NEXT' && count <= 100) {
            try {
                count++
                const urlNew = `https://jsonplaceholder.typicode.com/posts/${count}`
                const response = await fetch(urlNew)
                const data = await response.json()

                h2.innerText = `${data.title}`
                span.innerHTML = `<img src="https://satsis.info/uploads/posts/2021-03/1614714240_www.satsis.info__nbc-news.jpg" alt="">`
                h3.innerText = `${data.body}`
            } catch {
                console.log('ERROR')
            } finally {
                console.log('FINALLY')
            }
        } else if (e.target.textContent === 'PREV' && count >= 2) {
            try {
                count--
                const urlNew = `https://jsonplaceholder.typicode.com/posts/${count}`
                const response = await fetch(urlNew)
                const data = await response.json()

                h2.innerText = `${data.title}`
                span.innerHTML = `<img src="https://satsis.info/uploads/posts/2021-03/1614714240_www.satsis.info__nbc-news.jpg" alt="">`
                h3.innerText = `${data.body}`

            } catch {
                console.log('ERROR')
            } finally {
                console.log('FINALLY')
            }
        }
    })
})

