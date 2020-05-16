const insertarGif = document.getElementById('insertarMisGif')




const arrayGif = JSON.parse(localStorage.getItem('guifos'));

console.log(arrayGif);

arrayGif.forEach(() => {

    insertarGif.innerHTML += `<img src="${arrayGif}">`
})

