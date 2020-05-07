//Buscador de Gif
const apikey = 'DmRJY1L77G6uZ6eloQQd0cXSfD6OsEXC';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultEl = document.getElementById('results');
const sug1 = document.getElementById('sugerencia1');
const sug2 = document.getElementById('sugerencia2');
const sug3 = document.getElementById('sugerencia3');
const mostrarMenu = document.getElementById('sugerencias');

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const q = searchInput.value;
  search(q);
});

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

function upDateImput(input) {
  autocomplete(input)
    .then((data) => data.data)
    .then((obj) => {
      sug1.textContent = obj[0].name;
      sug2.textContent = obj[1].name;
      sug3.textContent = obj[2].name;
    });
}

const input = searchForm.addEventListener('input', function (e) {
  e.preventDefault();
  const input = searchInput.value;
  //autocomplete(input);
  upDateImput(input);
  //console.log(input);
});

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

const mostrar = sug1.addEventListener('click', function (e) {
  e.preventDefault();

  const valor1 = sug1.value;
  console.log(valor1);
});
