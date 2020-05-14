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
const caja1 = document.getElementById('crearGifo');
//Segundo menú
const cuadroSegundo = document.getElementById('capturarGifo');
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
      alert(
        'Unable to capture your camera. Please check console logs.'
      );
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
  //Oculto los botones de comenzar a grabar
  grabar.style.display = 'none';
  //mostrar los botones de stop
  stopGrabar.style.display = 'inline-flex';
  //cerrar el video
  stream = video.srcObject;
  tracks = stream.getTracks();
  tracks.forEach(function (track) {
    track.stop();
  });
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
});

//Activar la cámara

btnComenzarPimero.addEventListener('click', () => {

  //oculto la botonera de grabación
  stopGrabar.style.display = 'none';
  // oculto la captura de video
  image.style.display = 'none';
  //Oculto la sección de Inicio
  caja1.style.display = 'none';
  cuadroSegundo.style.display = 'block';
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
      video.srcObject = mediaStream;
      video.onloadedmetadata = function () {
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
  cuadroSegundo.style.display = 'none';
  caja1.style.display = 'block';
});
