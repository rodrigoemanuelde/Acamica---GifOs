let api = 'api_key=80bfcbf357864cd18518c324f47a7098';
let url = 'https://api.giphy.com/v1/gifs/trending?';

const gifsBox = document.querySelector('.random');


fetch(url + api)
    .then(response => response.json())
    .then(data => {
        data.data.forEach(function (gif) {
            const img = document.createElement('img');
            img.src = gif.images.downsized.url;

            gifsBox.appendChild(img);
        })
    });