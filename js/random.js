const url = 'https://api.giphy.com/v1/gifs/random?';
const apiKey = 'DmRJY1L77G6uZ6eloQQd0cXSfD6OsEXC';

fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data)
        let element1 = document.getElementById('random0')
        element1.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`
        //console.log(data.data.fixed_width_downsampled_url)

    })
    .catch(err => console.log(err))

fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data.image_url)
        let element2 = document.getElementById('random1')
        element2.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`
    })
    .catch(err => console.log(err))

fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data.image_url)
        let element3 = document.getElementById('random2')
        element3.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`
    })
    .catch(err => console.log(err))

fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data.image_url)
        let element4 = document.getElementById('random3')
        element4.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`
    })
    .catch(err => console.log(err))