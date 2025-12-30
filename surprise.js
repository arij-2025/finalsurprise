function checkCode() {
  const userInput = document.getElementById("dateInput").value;
  const correctDate = "15/05";

  if (userInput === correctDate) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("surprise-screen").classList.remove("hidden");

    const music = document.getElementById("myMusic");
    if (music) music.play();

    startFallingHearts();
  } else {
    document.getElementById("error-msg").innerText =
      "ثبتوا في التاريخ يا بنات! ❤️";
  }
}

function startFallingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    const types = ["💖", "💕", "✨", "🌸"];
    heart.innerHTML = types[Math.floor(Math.random() * types.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}
function openBigSurprise() {
  const modal = document.getElementById("big-surprise-modal");
  modal.classList.remove("hidden");

  setInterval(createFallingHeart, 100);
}
function closeSurprise(event) {
  event.stopPropagation();
  document.getElementById("big-surprise-modal").classList.add("hidden");
}
