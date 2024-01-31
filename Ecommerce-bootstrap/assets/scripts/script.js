let cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener("click", () => {
        window.location.href='/assets/pages/sproduct.html'
    })
})