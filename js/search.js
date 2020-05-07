//Constantes ------------------------------------------------------------------
const apikey = 'DmRJY1L77G6uZ6eloQQd0cXSfD6OsEXC';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultEl = document.getElementById('results');
const sug1 = document.getElementById('sugerencia1');
const sug2 = document.getElementById('sugerencia2');
const sug3 = document.getElementById('sugerencia3');
const mostrarMenu = document.getElementById('sugerencias');

//listener --------------------------------------------------------------------

// entrada de texto por barra buscadora
const input = searchForm.addEventListener('input', function (e) {
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
  search(q);
  mostrarMenu.style.display = 'none';
});

//botón buscador de sugerencias 1
const mostrar1 = sug1.addEventListener('click', function (e) {
  e.preventDefault();
  const valor1 = sug1.textContent;
  search(valor1);
  mostrarMenu.style.display = 'none';
});

//botón buscador de sugerencias 1
const mostrar2 = sug2.addEventListener('click', function (e) {
  e.preventDefault();
  const valor2 = sug2.textContent;
  search(valor2);
  mostrarMenu.style.display = 'none';
});

//botón buscador de sugerencias 1
const mostrar3 = sug3.addEventListener('click', function (e) {
  e.preventDefault();
  const valor3 = sug3.textContent;
  search(valor3);
  mostrarMenu.style.display = 'none';
});

//Fetch--------------------------------------------------------------------------------------------------

//buscador por texto
async function search(q) {
  const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;

  await fetch(path)
    .then((res) => res.json())
    .then(function (json) {
      //console.log(json.data[0].images.fixed_width.url)
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
