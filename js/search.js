//Buscador de Gif
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const resultEl = document.getElementById('results')

searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const q = searchInput.value
    search(q)
});

async function search(q) {
    const apikey = 'DmRJY1L77G6uZ6eloQQd0cXSfD6OsEXC'
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`

    // Busqueda
    //https://api.giphy.com/v1/gifs/search?api_key=mmvn9BQ98KLdBeCFwNbuvaOUSu0MMeEx&q=cats

    await fetch(path).then((res) => res.json())
        .then(function (json) {
            //console.log(json.data[0].images.fixed_width.url)
            let resultsHTML = ''

            json.data.forEach(function (obj) {
                const url = obj.images.fixed_width.url
                const width = obj.images.fixed_width.width
                const height = obj.images.fixed_width.height
                const title = obj.title


                resultsHTML += `<img 
            class="item"
            src="${url}" 
            width="${width}" 
            height="${height}"
            alt="${title}">`
            });

            resultEl.innerHTML = resultsHTML
        }).catch(function (err) {
            console.log(err.message)
        });

}

/* searchForm.addEventListener('keypress', function (e) {
    e.preventDefault();
    const input = searchInput.value;

    console.log(input)
});
 */





const apikey = 'DmRJY1L77G6uZ6eloQQd0cXSfD6OsEXC';
const input = searchInput.value;

fetch(`https://api.giphy.com/v1/gifs/search/tags?q=${input}&api_key=${apikey}&limit=3`)
    .then(response => response.json())
    .then(data => {
        //console.log(data.data[1].name);

        sug1 = document.getElementById('sugerencias');
        sug1.innerHTML += `<p id="sugerencia1">${data.data[0].name}</p>`;

        sug2 = document.getElementById('sugerencias');
        sug2.innerHTML += `<p id="sugerencia2">${data.data[1].name}</p>`;

        sug3 = document.getElementById('sugerencias');
        sug3.innerHTML += `<p id="sugerencia3">${data.data[2].name}</p>`;

    })