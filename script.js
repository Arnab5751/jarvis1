function startListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    document.getElementById('response').textContent = `You said: "${command}"`;

    // Basic response logic
    if (command.includes("hello")) {
      speak("Hi Arnab, how can I assist you?");
    } else if (command.includes("time")) {
      const time = new Date().toLocaleTimeString();
      speak(`It is currently ${time}`);
    } else {
      speak("I'm not sure I understand, but I'm learning every day.");
    }
  };
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}
