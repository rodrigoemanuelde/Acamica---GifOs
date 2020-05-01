const url = 'https://api.giphy.com/v1/gifs/random?';
const apiKey = 'DmRJY1L77G6uZ6eloQQd0cXSfD6OsEXC';

fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data)
        let element = document.getElementById('random')
        random.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`
        //console.log(data.data.fixed_width_downsampled_url)

    })
    .catch(err => console.log(err))

fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data.image_url)
        let element = document.getElementById('random1')
        random1.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`
    })
    .catch(err => console.log(err))

fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data.image_url)
        let element = document.getElementById('random2')
        random2.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`
    })
    .catch(err => console.log(err))

fetch(url + "&api_key=" + apiKey)
    .then(res => res.json())
    .then(data => {
        //console.log(data.data.image_url)
        let element = document.getElementById('random3')
        random3.innerHTML = `<img src="${data.data.fixed_width_downsampled_url}">`
    })
    .catch(err => console.log(err))