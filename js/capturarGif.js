const image = document.querySelector('#video');
const btnGrabar = document.getElementById('btn-start-recording');
const btnParar = document.getElementById('btn-stop-recording');
const btnComenzarPimero = document.getElementById('comenzarPrimero');
const btnCancelarPrimero = document.getElementById('cancelarPrimero');


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
        document.querySelector('h1').innerHTML =
            'Waiting for Gif Recorder to start...';
        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: () => {
                document.querySelector('h1').innerHTML =
                    'Gif recording started.';
            },
            onGifPreview: function (gifURL) {
                image.src = gifURL;
            },
        });

        recorder.startRecording();

        // release camera on stopRecording
        recorder.camera = camera;

        btnParar.disabled = false;
    });
})


btnParar.addEventListener('click', () => {
    btnParar.disabled = true;
    recorder.stopRecording(stopRecordingCallback);
})