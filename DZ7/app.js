const cards = document.querySelector('.cards')


let count = 0

const getCard = async () => {
    count++
    if (count <= 10) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
            const data = await response.json()
            const div = await document.createElement('div')
            div.setAttribute('class', `card-${count}`)
            cards.append(div)
            div.innerHTML = `
                    <div>
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/153E6/production/_128641078_gettyimages-1246889007.jpg.webp" alt="">
                        <h3>${data.title}</h3>
                        <span>${data.body}</span>
                    </div>
            `
            getCard()
        } catch {
            console.warn('ERROR')
        } finally {
            console.log('Done')
        }
    }
}

getCard()