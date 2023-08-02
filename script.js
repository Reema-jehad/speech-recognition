function stt() {
  var output = document.getElementById("output");
  var action = document.getElementById("action");
  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.onstart = function () {
    action.innerHTML = "<small>listening, please speak...</small>";
  };
  recognition.onspeechend = function () {
    action.innerHTML = "<small>stopped listening</small>";
    recognition.stop();
  };
  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    output.innerHTML = transcript;
    output.classList.remove("hide");
  };
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "ar-AE";

  recognition.start();
}
