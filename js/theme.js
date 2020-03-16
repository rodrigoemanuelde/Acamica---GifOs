// Cambio de tema de la página - day & nigth

const day = document.getElementById('day');
const night = document.getElementById('night');
const logo = document.getElementById("logo");
const favicon = document.getElementById("favicon");

day.addEventListener('click', () => {
    document.documentElement.setAttribute('dataTheme', 'light')
    logo.src = "img/gifOF_logo.png",
        favicon.href = "img/gifOF_logo.png",

        // Guardar el modo en localstorage
        localStorage.setItem('dataTheme', 'day');
});



night.addEventListener('click', () => {
    document.documentElement.setAttribute('dataTheme', 'dark')
    logo.src = "img/gifOF_logo_dark.png",
        favicon.href = "img/gifOF_logo_dark.png",

        //Guardar el modo en localstorage
        localStorage.setItem('dataTheme', 'night');
});


// Comprobación modo actual

if (localStorage.getItem('dataTheme') === 'day') {
    document.documentElement.setAttribute('dataTheme', 'light');
    logo.src = "img/gifOF_logo.png";
    favicon.href = "img/gifOF_logo.png"
} else if (localStorage.getItem('dataTheme') === 'night') {
    document.documentElement.setAttribute('dataTheme', 'dark');
    logo.src = "img/gifOF_logo_dark.png";
    favicon.href = "img/gifOF_logo_dark.png";
}