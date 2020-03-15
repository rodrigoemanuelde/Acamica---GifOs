// Cambio de tema de la página - day & nigth

const day = document.getElementById('day');
const night = document.getElementById('night');
const logo = document.getElementById("logo");



day.addEventListener('click', () => {
    document.documentElement.setAttribute('data-Theme', 'light'),
        logo.src = "img/gifOF_logo.png"

    // Guardar el modo en localstorage
    localStorage.setItem('data-Theme', 'day');



})

night.addEventListener('click', () => {
    document.documentElement.setAttribute('data-Theme', 'dark'),
        logo.src = "img/gifOF_logo_dark.png";

    //Guardar el modo en localstorage

    localStorage.setItem('data-Theme', 'night');
})

// Comprobación modo actual

if (localStorage.getItem('data-Theme') === 'day') {
    document.documentElement.setAttribute('data-Theme', 'light');
} else {
    document.documentElement.setAttribute('data-Theme', 'dark');
}