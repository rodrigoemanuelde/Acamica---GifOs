// Dropdown cambio de color

// Despliega los botones de Sailor Day & Sailor Night
/* function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
} */

// Cierra el menú cuando el usuario hace click fuera del botón de "Elegir Tema".
/* window.onclick = function (event) {
    if (!event.target.matches("#dropbtn") && !event.target.matches("#arrow")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}; */


// Despliega los botones de Sailor Day & Sailor Night
const dropdown2 = document.getElementById('myDropdown')

// Cierra el menú cuando el usuario hace click fuera del botón de "Elegir Tema".

dropdown2.addEventListener('click', (e) => {
    e.preventDefault();
    const show = dropdown2.classList.toggle("show");
    if (!e.target.matches("#dropbtn") && !e.target.matches("#arrow")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
})