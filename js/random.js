 import {
     search
 } from './search.js';

 const url = 'https://api.giphy.com/v1/gifs/random?';
 const apiKey = 'kCXSuCq9QhFJiAvhwKi1VyIP6LZWnZTY';
 const btnRandom0 = document.getElementById('btn-random0');
 const btnRandom1 = document.getElementById('btn-random1');
 const btnRandom2 = document.getElementById('btn-random2');
 const btnRandom3 = document.getElementById('btn-random3');

 fetch(url + "&api_key=" + apiKey)
     .then(res => res.json())
     .then(data => {
         const element0 = document.getElementById('random0')
         element0.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`

         //# del gif
         const nombre0 = document.getElementById('tituloGif0');
         if (data.data.title === '' || data.data.title === ' ') {
             //Si no tiene título le agrego uno
             nombre0.innerHTML = `<p id="tituloGif0">#GIF by Giphy<p>`

         } else {
             //traigo el título y lo corto en 4 palabras
             const titulo = data.data.title.split(" ", 4);
             //uno el array como string
             const tituloCortado = titulo.join("");
             //inserto el titulo Cortado
             nombre0.innerHTML = `<p id="tituloGif0">#${tituloCortado}</>`
         }
         //busco el nombre de la categoría
         const data0 = data.data.user.display_name;
         //escucho el click del botón
         btnRandom0.addEventListener('click', (e) => {
             e.preventDefault();
             search(data0);
             window.scroll({
                 top: 0,
                 left: 0,
                 behavior: 'smooth'
             });
         });

     })
     .catch(err => console.log(err))



 fetch(url + "&api_key=" + apiKey)
     .then(res => res.json())
     .then(data => {
         const element2 = document.getElementById('random1')
         element2.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`

         //# del gif
         const nombre1 = document.getElementById('tituloGif1');
         if (data.data.title === '' || data.data.title === ' ') {
             //Si no tiene título le agrego uno
             nombre1.innerHTML = `<p id="tituloGif1">#GIF by Giphy<p>`

         } else {
             //traigo el título y lo corto en 4 palabras
             const titulo = data.data.title.split(" ", 4);
             //uno el array como string
             const tituloCortado = titulo.join("");
             //inserto el titulo Cortado
             nombre1.innerHTML = `<p id="tituloGif1">#${tituloCortado}</>`
         }
         //busco el nombre de la categoría
         const data1 = data.data.user.display_name;
         //escucho el click del botón
         btnRandom1.addEventListener('click', (e) => {
             e.preventDefault();
             search(data1);
             window.scroll({
                 top: 0,
                 left: 0,
                 behavior: 'smooth'
             });
         });

     })
     .catch(err => console.log(err))



 fetch(url + "&api_key=" + apiKey)
     .then(res => res.json())
     .then(data => {
         const element2 = document.getElementById('random2')
         element2.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`

         //# del gif
         const nombre2 = document.getElementById('tituloGif2');
         if (data.data.title === '' || data.data.title === ' ') {
             //Si no tiene título le agrego uno
             nombre2.innerHTML = `<p id="tituloGif2">#GIF by Giphy<p>`

         } else {
             //traigo el título y lo corto en 4 palabras
             const titulo = data.data.title.split(" ", 4);
             //uno el array como string
             const tituloCortado = titulo.join("");
             //inserto el titulo Cortado
             nombre2.innerHTML = `<p id="tituloGif2">#${tituloCortado}</>`
         }
         //busco el nombre de la categoría
         const data2 = data.data.user.display_name;
         //escucho el click del botón
         btnRandom2.addEventListener('click', (e) => {
             e.preventDefault();
             search(data2);
             window.scroll({
                 top: 0,
                 left: 0,
                 behavior: 'smooth'
             });
         });
     })
     .catch(err => console.log(err))


 fetch(url + "&api_key=" + apiKey)
     .then(res => res.json())
     .then(data => {
         const element3 = document.getElementById('random3')
         element3.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`

         //# del gif
         const nombre3 = document.getElementById('tituloGif3');
         if (data.data.title === '' || data.data.title === ' ') {
             //Si no tiene título le agrego uno
             nombre3.innerHTML = `<p id="tituloGif3" >#GIF by Giphy<p>`

         } else {
             //traigo el título y lo corto en 4 palabras
             const titulo = data.data.title.split(" ", 4);
             //uno el array como string
             const tituloCortado = titulo.join("");
             //inserto el titulo Cortado
             nombre3.innerHTML = `<p id="tituloGif3">#${tituloCortado}</>`
         }
         //busco el nombre de la categoría
         const data3 = data.data.user.display_name;
         //escucho el click del botón
         btnRandom3.addEventListener('click', (e) => {
             e.preventDefault();
             search(data3);
             window.scroll({
                 top: 0,
                 left: 0,
                 behavior: 'smooth'
             });
         });
     })
     .catch(err => console.log(err))
