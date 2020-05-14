const insertarNumero = document.getElementById('hms');
const inicio = document.getElementById('btn-start-recording');
const final = document.getElementById('btn-stop-recording');

function init() {
  inicio.addEventListener('click', cronometrar());
  final.addEventListener('click', parar());
  h = 0;
  m = 0;
  s = 0;
  insertarNumero.innerText = '00:00:00';
}

function cronometrar() {
  escribir();
  id = setInterval(escribir(), 1000);
  inicio.removeEventListener('click', cronometrar());
}

function escribir() {
  let hAux, mAux, sAux;
  s++;
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  if (h > 24) {
    h = 0;
  }

  if (s < 10) {
    sAux = '0' + s;
  } else {
    sAux = s;
  }
  if (m < 10) {
    mAux = '0' + m;
  } else {
    mAux = m;
  }
  if (h < 10) {
    hAux = '0' + h;
  } else {
    hAux = h;
  }

  insertarNumero.innerHTML = `${hAux}:${mAux}:${sAux}`;
}

function parar() {
  clearInterval(id);
  inicio.addEventListener('click', cronometrar());
}
