const image = document.getElementById('video');
const btnGrabar = document.getElementById('btn-start-recording');
const btnParar = document.getElementById('btn-stop-recording');
const btnComenzarPimero = document.getElementById('comenzarPrimero');
const btnCancelarPrimero = document.getElementById('cancelarPrimero');
const back1 = document.getElementById('back');
const back2 = document.getElementById('logo');
const video = document.getElementById('videoPrevio');
const caja1 = document.getElementById('crearGifo');
/* const caja2 = document.getElementById('video'); */

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
  btnGrabar.disabled = true;
  captureCamera(function (camera) {
    /* document.querySelector('h1').innerHTML =
            'Waiting for Gif Recorder to start...'; */
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
  caja1.style.display = 'none';
  function videoPrevio() {
    navigator.getUserMedia(
      {
        video: {},
      },
      (stream) => (video.srcObject = stream),
      (err) => console.error(err)
    );
  }

  videoPrevio();
});
