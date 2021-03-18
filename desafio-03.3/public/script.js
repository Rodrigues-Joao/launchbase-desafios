const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.curso-card')
const modal = modalOverlay.querySelector(".modal")
const footer = document.querySelector('.copyright')
const date = new Date()

footer.textContent = `Rocketseat © ${date.getFullYear()} - Todos os direitos reservados`

for (let card of cards) {
    card.addEventListener('click', () => {
        const Id = card.getAttribute('id')

        window.location.href = `/course/${Id}`
            //modalOverlay.classList.add('active')
            // modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${Id}`
    })
}
/*
document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
    modal.classList.remove('full')
})

document.querySelector('.fullscreen-modal').addEventListener('click', () => {

    if (!modal.classList.contains('full')) {
        modal.classList.add('full')
    } else {
        modal.classList.remove('full')
    }
})*/