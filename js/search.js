export {
  search
};

//Constantes ------------------------------------------------------------------
const apikey = 'mmvn9BQ98KLdBeCFwNbuvaOUSu0MMeEx';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultEl = document.getElementById('results');
const sug1 = document.getElementById('sugerencia1');
const sug2 = document.getElementById('sugerencia2');
const sug3 = document.getElementById('sugerencia3');
const mostrarMenu = document.getElementById('sugerencias');
const barra = document.getElementById('resultados');
const barraTexto = document.getElementById('nombreResultado');
const mostrarBotones = document.getElementById('botonesresultados');
const btn1result = document.getElementById('button1resultados');
const btn2result = document.getElementById('button2resultados');
const btn3result = document.getElementById('button3resultados');



//listener --------------------------------------------------------------------

// entrada de texto por barra buscadora
searchForm.addEventListener('input', function (e) {
  e.preventDefault();
  const input = searchInput.value;
  upDateImput(input);
  if (input !== '') {
    mostrarMenu.style.display = 'block';
  }
});

//envío de datos por barra buscadora
searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const q = searchInput.value;
  searchInput.value = '';
  search(q);
  mostrarMenu.style.display = 'none';
});

//botón buscador barra de sugerencias 1
sug1.addEventListener('click', function (e) {
  e.preventDefault();
  const valor1 = sug1.textContent;
  searchInput.value = '';
  search(valor1);
  mostrarMenu.style.display = 'none';
});

//botón buscador resultados 1
btn1result.addEventListener('click', (e) => {
  e.preventDefault();
  const btn1 = sug1.textContent;
  search(btn1);
});

//botón buscador barra de sugerencias 2
sug2.addEventListener('click', function (e) {
  e.preventDefault();
  const valor2 = sug2.textContent;
  searchInput.value = '';
  search(valor2);
  mostrarMenu.style.display = 'none';
});

//botón buscador resultados 2
btn2result.addEventListener('click', (e) => {
  e.preventDefault();
  const btn2 = sug2.textContent;
  search(btn2);
});

//botón buscador barra de sugerencias 3
sug3.addEventListener('click', function (e) {
  e.preventDefault();
  const valor3 = sug3.textContent;
  searchInput.value = '';
  search(valor3);
  mostrarMenu.style.display = 'none';
});

//botón buscador resultados 3
btn3result.addEventListener('click', (e) => {
  e.preventDefault();
  const btn3 = sug3.textContent;
  search(btn3);
});

//Fetch--------------------------------------------------------------------------------------------------

//buscador por texto
async function search(q) {
  const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;

  await fetch(path)
    .then((res) => res.json())
    .then(function (json) {
      //console.log(json.data[0])
      let resultsHTML = '';

      json.data.forEach(function (obj) {
        const url = obj.images.fixed_width.url;
        const width = obj.images.fixed_width.width;
        const height = obj.images.fixed_width.height;
        const title = obj.title;

        resultsHTML += `<img 
            class="item"
            src="${url}" 
            width="${width}" 
            height="${height}"
            alt="${title}">`;
      });

      resultEl.innerHTML = resultsHTML;
      //muestro la barra con el nombre del resultado
      barra.style.display = 'block';
      //asigno el nombre que corresponde al gif
      barraTexto.innerText = `${json.data[0].title} (resultados)`
      //mostrar botones de sugerencia
      mostrarBotones.style.display = 'block';

      //nombre boton 1
      btn1result.innerHTML = `#${sug1.textContent}`;
      //nombre boton 2
      btn2result.innerHTML = `#${sug2.textContent}`;
      //nombre boton 3
      btn3result.innerHTML = `#${sug3.textContent}`;

    })
    .catch(function (err) {
      console.log(err.message);
    });
}

//buscador de sugerencias por ingreso de texto en barra de búsqueda
async function autocomplete(input) {
  const reload = await fetch(
      `https://api.giphy.com/v1/gifs/search/tags?q=${input}&api_key=${apikey}&limit=3`
    )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return reload;
}

//autocompletado en botones de sugerencias
function upDateImput(input) {
  autocomplete(input)
    .then((data) => data.data)
    .then((obj) => {
      sug1.textContent = obj[0].name;
      sug2.textContent = obj[1].name;
      sug3.textContent = obj[2].name;
    });
}
