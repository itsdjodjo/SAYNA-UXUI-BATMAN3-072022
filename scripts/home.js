// popup
const open = document.getElementById('open');
const close = document.getElementById('close');
const popupContainer = document.getElementById('popupContainer');

open.addEventListener('click', () => {
    popupContainer.classList.add('active');
});
close.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});


// fade in
window.addEventListener('scroll', reveal)

function reveal() {
    var faders = document.querySelectorAll('.fade-in');

    for(let i = 0; i < faders.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = faders[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            faders[i].classList.add('show-content');
        }
        else {
            faders[i].classList.remove('show-content');
        }
    }
};