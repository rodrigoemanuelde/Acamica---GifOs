// Despliega los botones de Sailor Day & Sailor Night

//constantes
const dropdownPrincipal = document.getElementById('dropbtn');
const dropdownSecundario = document.getElementById('myDropdown');
const day = document.getElementById('day');
const night = document.getElementById('night');

//Desplegar day & night
dropdownPrincipal.addEventListener('click', (e) => {
    e.preventDefault();
    if (dropdownSecundario.style.display == "none") {
        dropdownSecundario.style.display = "block";
    } else if (dropdownSecundario.style.display = "block") {
        dropdownSecundario.style.display = "none"
    }
})

//Cerrar al presionar day
day.addEventListener('click', (e) => {
    e.preventDefault();
    if (dropdownSecundario.style.display == "block") {
        dropdownSecundario.style.display = "none";
    }
})

//Cerrar al presionar Night
night.addEventListener('click', (e) => {
    e.preventDefault();
    if (dropdownSecundario.style.display == "block") {
        dropdownSecundario.style.display = "none";
    }
})