const image = document.getElementById('video');
const video = document.getElementById('videoPrevio');
const btnGrabar = document.getElementById('btn-start-recording');
const btnParar = document.getElementById('btn-stop-recording');
const btnComenzarPimero = document.getElementById('comenzarPrimero');
const btnCancelarPrimero = document.getElementById('cancelarPrimero');
const back1 = document.getElementById('back');
const back2 = document.getElementById('logo');
const caja1 = document.getElementById('crearGifo');
const cuadroSegundo = document.getElementById('capturarGifo');
const constraints = {
  audio: false,
  video: {
    width: 1100,
    height: 570
  }
};


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

let recorder; // globally accessible

btnGrabar.addEventListener('click', () => {
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
const cerrar = document.getElementById('closeButton');
cerrar.addEventListener('click', (e) => {
  e.preventDefault()
  cuadroSegundo.style.display = 'none'
  caja1.style.display = 'block'
})