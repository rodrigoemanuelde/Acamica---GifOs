//Buscador de Gif
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const resultEl = document.getElementById('results')

searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const q = searchInput.value
    search(q)
});

function search(q) {
    const apikey = 'DmRJY1L77G6uZ6eloQQd0cXSfD6OsEXC'
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`

    // Busqueda
    //https://api.giphy.com/v1/gifs/search?api_key=mmvn9BQ98KLdBeCFwNbuvaOUSu0MMeEx&q=cats

    fetch(path).then((res) => res.json())
        .then(function (json) {
            console.log(json.data[0].images.fixed_width.url)
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
        })
}