//video
const image = document.getElementById('video');
const video = document.getElementById('videoPrevio');
//botones de grabación
const btnGrabar = document.getElementById('btn-start-recording');
const btnParar = document.getElementById('btn-stop-recording');
//comenzar grabación
const btnComenzarPimero = document.getElementById('comenzarPrimero');
//Finalizar grabación
const btnCancelarPrimero = document.getElementById('cancelarPrimero');
//volver a la pantalla anterior
const back1 = document.getElementById('back');
const back2 = document.getElementById('logo');
//Pirmer menú
const crearGifo = document.getElementById('crearGifo');
//Segundo menú
const capturarGifo = document.getElementById('capturarGifo');
//calidad de imágen previa
const constraints = {
  audio: false,
  video: {
    width: 1100,
    height: 570,
  },
};
//cerrar segundo menú
const cerrar = document.getElementById('closeButton');

//botones de Capturar y de Grabar
const grabar = document.getElementById('grabar');
const stopGrabar = document.getElementById('stop');

//Ultimos botones
const botonesFinales = document.getElementById('botonesFinales');
const repetirCaptura = document.getElementById('repetirCaptura');
const subriGifo = document.getElementById('subirGifo');

//Insertar contador
let horaComienzo;
const timer = document.getElementById('hms');
//--------------------------------------------------------------
//Regresar a la página index
back1.addEventListener('click', () => {
  location.assign('..//index.html');
});

back2.addEventListener('click', () => {
  location.assign('..//index.html');
});

btnCancelarPrimero.addEventListener('click', () => {
  location.assign('..//index.html');
});

//-------------------------------------------------------------
//Capturar el video

function captureCamera(callback) {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
    })
    .then(function (camera) {
      callback(camera);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function stopRecordingCallback() {
  image.src = URL.createObjectURL(recorder.getBlob());
  recorder.camera.stop();
  recorder.destroy();
  recorder = null;
}

let recorder;

btnGrabar.addEventListener('click', () => {

  //Hora de comienzo
  horaComienzo = new Date().getTime();
  //Inicio el timer
  temporizador();
  //Oculto los botones de comenzar a grabar
  grabar.style.display = 'none';
  //mostrar los botones de stop
  stopGrabar.style.display = 'inline-flex';
  //cerrar el video
  cerrarVideo();
  //Elimino del Dom
  image.style.display = 'block';
  video.style.display = 'none';
  //Inicio Grabación
  btnGrabar.disabled = true;
  captureCamera(function (camera) {
    recorder = RecordRTC(camera, {
      type: 'gif',
      frameRate: 1,
      quality: 10,
      width: 720,
      hidden: 560,
      onGifPreview: function (gifURL) {
        image.src = gifURL;
      },
    });

    recorder.startRecording();

    // release camera on stopRecording
    recorder.camera = camera;

    btnParar.disabled = false;
  });
});

btnParar.addEventListener('click', () => {
  btnParar.disabled = true;
  recorder.stopRecording(stopRecordingCallback);
  botonesFinales.style.display = 'inline-flex';
  stopGrabar.style.display = 'none';
  //Finalizo el timer
  temporizador()
});

//Activar la cámara

btnComenzarPimero.addEventListener('click', () => {
  //Oculto botones de Repetir y Subir Gifo
  botonesFinales.style.display = 'none';
  //oculto la botonera de grabación
  stopGrabar.style.display = 'none';
  // oculto la captura de video
  image.style.display = 'none';
  //Oculto la sección de Inicio
  crearGifo.style.display = 'none';
  capturarGifo.style.display = 'block';
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
      video.srcObject = mediaStream;
      video.onloadedmetadata = () => {
        video.play();
      };
    })
    .catch(function (err) {
      console.log(err.name + ': ' + err.message);
    });
});

//Para volver al inicio

cerrar.addEventListener('click', (e) => {
  e.preventDefault();
  capturarGifo.style.display = 'none';
  crearGifo.style.display = 'block';
  //cerrar el video
  cerrarVideo();
});

//Botón para repetir Captura
repetirCaptura.addEventListener('click', (e) => {
  e.preventDefault()
  crearGifo.style.display = 'block';
  capturarGifo.style.display = 'none';
})


//Función para cerrar Video
function cerrarVideo() {
  stream = video.srcObject;
  tracks = stream.getTracks();
  tracks.forEach(function (track) {
    track.stop();
  });
}

//contador de tiempo
function temporizador() {

  //si no esxiste , no hago nada 
  if (!recorder) {
    return;
  }

  timer.innerText = calcularDuracion((new Date().getTime() - horaComienzo) / 1000);

  setTimeout(temporizador, 1000);

}

function calcularDuracion(segundos) {

  var hr = Math.floor(segundos / 3600);
  var min = Math.floor((segundos - (hr * 3600)) / 60);
  var seg = Math.floor(segundos - (hr * 3600) - (min * 60));

  if (min < 10) {
    min = "0" + min;
  }

  if (seg < 10) {
    seg = "0" + seg;
  }

  if (hr <= 0) {
    return min + ':' + seg;
  }

  return hr + ':' + min + ':' + seg;
}