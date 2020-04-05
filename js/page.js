//para cambiar de pagina (misGuifos)

let misGuifos = document.getElementById("misGif");
misGuifos.addEventListener("click", () => {
    location.assign("/misgif.html");
});

//para cambiar de página (Crear Gifo)

let upload = document.getElementById("crear");
upload.addEventListener("click", () => {
    location.assign("//creargifo.html");
});


//para cambiar de página (Inicio)

let index = document.getElementById("logo");
index.addEventListener("click", () => {
    location.assign("//index.html");
});