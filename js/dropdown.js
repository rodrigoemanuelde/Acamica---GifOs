// Dropdown cambio de color

// Despliega los botones de Sailor Day & Sailor Night
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Cierra el menú cuando el usuario hace click fuera del botón de "Elegir Tema".
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn") && !event.target.matches("img")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};