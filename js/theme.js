// Cambio de tema de la página - day & nigth

const day = document.getElementById('day');
const night = document.getElementById('night');
const logo = document.getElementById("logo");

day.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light'),
        logo.src = "img/gifOF_logo.png"
})
night.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark'),
        logo.src = "img/gifOF_logo_dark.png"
})