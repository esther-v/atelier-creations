const btns = document.querySelectorAll('.btn-modale');
const modaleGalerie = document.querySelector('.bloc-modale');
const imgIndex = document.querySelector('.bloc-modale img');

if(window.matchMedia("(min-width: 850px)").matches) {
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
    
            imgIndex.src = `ressources/galerie-${e.target.getAttribute('data-index')}.jpg`;
            modaleGalerie.classList.add('active-modale');
    
        })
    })
    
    modaleGalerie.addEventListener('click', () => {
        modaleGalerie.classList.remove('active-modale');
    })
}
