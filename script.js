let speech = new SpeechSynthesisUtterance();

let voices = [];

let selectLan = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = (function () {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (selectLan.options[i] = new Option(voice.name, i)))
})

selectLan.addEventListener("change", function () {
    speech.voice = voices[selectLan.value]
})

document.querySelector("button").addEventListener("click", function () {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})