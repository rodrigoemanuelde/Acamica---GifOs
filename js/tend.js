const api = 'api_key=mmvn9BQ98KLdBeCFwNbuvaOUSu0MMeEx';
const url2 = 'https://api.giphy.com/v1/gifs/trending?';

const gifsBox = document.querySelector('.tend');



fetch(url2 + api)
    .then(response => response.json())
    .then(data => {
        data.data.forEach(function (gif) {
            const img = document.createElement('img');
            img.src = gif.images.downsized.url;

            gifsBox.appendChild(img);
        })
    });
