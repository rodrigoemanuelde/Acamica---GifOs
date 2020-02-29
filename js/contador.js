//Contador de páginas

const countEl = document.getElementById('contador')

updateVisitCount()

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/rodrigoemanuelde/rodrigo/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
};