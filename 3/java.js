document.addEventListener("DOMContentLoaded", () => {
  const chatLog = document.getElementById("chat-log");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  let studentName = prompt("¡Hola! ¿Cuál es tu nombre?");
  if (!studentName) studentName = "Estudiante";

  const responses = [
    "Argentina ganó la Copa Mundial de la FIFA 2022.",
    "Cada equipo tiene 11 jugadores en el campo.",
    "Cristiano Ronaldo es el máximo goleador del fútbol profesional.",
    "Es cuando un jugador está más cerca del arco rival que el penúltimo defensor y recibe el balón.",
    "Dura 90 minutos, divididos en dos tiempos de 45 minutos.",
    "Uruguay ganó la primera Copa Mundial en 1930.",
    "Es el torneo de clubes más importante de Europa, organizado por la UEFA.",
    "Messi es un futbolista argentino, campeón del mundo y múltiple Balón de Oro.",
    "El Real Madrid tiene más Champions League ganadas.",
    "Es un tiro directo desde los 11 metros tras una falta dentro del área."
  ];

  function appendMessage(sender, text) {
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = (sender === "user" ? `${studentName}: ` : "Bot: ") + text;
    chatLog.appendChild(message);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function handleUserInput() {
    const input = parseInt(userInput.value.trim());

    if (isNaN(input)) {
      appendMessage("user", userInput.value);
      appendMessage("bot", "Por favor escribe un número del 1 al 10.");
    } else if (input >= 1 && input <= 10) {
      appendMessage("user", `Pregunta ${input}`);
      appendMessage("bot", responses[input - 1]);
    } else {
      appendMessage("user", `Número ${input}`);
      appendMessage("bot", "Ese número no corresponde a una pregunta válida.");
    }

    userInput.value = "";
  }

  sendBtn.addEventListener("click", handleUserInput);
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") handleUserInput();
  });

  appendMessage("bot", `Hola ${studentName}, escribe el número de una pregunta del 1 al 10 para obtener la respuesta.`);
});
