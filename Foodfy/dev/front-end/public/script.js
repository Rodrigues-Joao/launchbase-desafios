const modaloverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.revenue-card')



for (let card of cards) {
    card.addEventListener('click', () => {
        const Id = card.getAttribute('id')
        const h1 = card.querySelector('.info-card h1').textContent
        const p = card.querySelector('.info-card p').textContent

        modaloverlay.classList.add('active')
        modaloverlay.querySelector('.modal-img img').src = `assets/${Id}.png`
        modaloverlay.querySelector('.modal-info h1').textContent = h1
        modaloverlay.querySelector('.modal-info p').textContent = p
    })
}


document.querySelector('.close-modal').addEventListener('click', () => {
    modaloverlay.classList.remove('active')
    modaloverlay.querySelector('.modal-img img').src = ''
})




function return_index() {
    window.location.href = '/'
}