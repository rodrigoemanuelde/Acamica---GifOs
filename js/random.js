const url = 'https://api.giphy.com/v1/gifs/random?';
const apiKey = 'DmRJY1L77G6uZ6eloQQd0cXSfD6OsEXC';


fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data)
        let element0 = document.getElementById('random0')
        element0.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`

        //# del gif
        let nombre0 = document.getElementById('tituloGif0');
        if (data.data.title === '') {
            nombre0.innerHTML = `<p id="tituloGif0">#GIF by Giphy<p>`

        } else {
            nombre0.innerHTML = `<p id="tituloGif0">#${data.data.title}</>`
        }
        //console.log(data)

    })
    .catch(err => console.log(err))



fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data)
        let element2 = document.getElementById('random1')
        element2.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`

        //# del gif
        let nombre1 = document.getElementById('tituloGif1');
        if (data.data.title === '') {
            nombre1.innerHTML = `<p id="tituloGif1">#GIF by Giphy<p>`

        } else {
            nombre1.innerHTML = `<p id="tituloGif1">#${data.data.title}</>`
        }
        //console.log(data)

    })
    .catch(err => console.log(err))



fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data)
        let element2 = document.getElementById('random2')
        element2.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`

        //# del gif
        let nombre2 = document.getElementById('tituloGif2');
        if (data.data.title === '') {
            nombre2.innerHTML = `<p id="tituloGif2">#GIF by Giphy<p>`

        } else {
            nombre2.innerHTML = `<p id="tituloGif2">#${data.data.title}</>`
        }
        //console.log(data)

    })
    .catch(err => console.log(err))



fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data)
        let element3 = document.getElementById('random3')
        element3.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`

        //# del gif
        let nombre3 = document.getElementById('tituloGif3');
        if (data.data.title === '') {
            nombre3.innerHTML = `<p id="tituloGif3">#GIF by Giphy<p>`

        } else {
            nombre3.innerHTML = `<p id="tituloGif3">#
            ${data.data.title}</>`
        }
        //console.log(data)

    })
    .catch(err => console.log(err))