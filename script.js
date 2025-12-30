/* LOGIN */
function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  if (u === "Karien Krisdina S" && p === "070321") {
    window.location.href = "index.html";
  } else {
    alert("Hehe salah 🤭");
  }
}

/* TYPING EFFECT */
const text = "Selamat Lulus Sidang Skripsi 🤍";
let i = 0;
const typing = document.getElementById("typing");
if (typing) {
  function type() {
    if (i < text.length) {
      typing.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  window.addEventListener("load", type); // safer than window.onload
}

/* MUSIC FADE IN */
const audio = document.querySelector("audio");
if (audio) {
  audio.volume = 0;
  let v = 0;
  const fadeIn = setInterval(() => {
    if (v < 0.6) {
      v += 0.02;
      audio.volume = v;
    } else clearInterval(fadeIn);
  }, 200);
}

/* FLOWERS FALLING */
const flowers = document.querySelector(".flowers");
let emojis = ["🌸","🌼","💮"];

if (flowers) {
  setInterval(() => {
    const f = document.createElement("div");
    f.className = "flower";
    f.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
    f.style.left = Math.random()*100 + "vw";
    f.style.fontSize = 14 + Math.random()*14 + "px";
    f.style.animationDuration = 6 + Math.random()*5 + "s";
    flowers.appendChild(f);
    setTimeout(() => f.remove(), 12000);
  }, 500);
}

/* CHANGE FLOWERS TO HEART WHEN SCROLLING TO ENDING */
const ending = document.querySelector(".ending");
window.addEventListener("scroll", () => {
  if (ending && ending.getBoundingClientRect().top < window.innerHeight) {
    emojis = ["🤍","💗","💞"];
  }
});

/* FADE-UP EFFECT */
const fadeElements = document.querySelectorAll(".fade-up");
window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

/* STICKERS PARALLAX */
const stickers = document.querySelectorAll(".sticker");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  stickers.forEach((s, i) => {
    s.style.transform = `translateY(${y * 0.05 * (i + 1)}px)`;
  });
});

/* TANYA BUTTON */
function tanya() {
  const jawab = confirm("Mau liat bukti kangennya? 🥺");
  if (jawab) {
    window.location.href = "bukti.html";
  } else {
    document.getElementById("penutup").scrollIntoView({behavior:"smooth"});
  }
}

/* HIDDEN FINAL MESSAGE */
let hold;
document.body.addEventListener("touchstart", () => {
  hold = setTimeout(() => {
    const msg = document.getElementById("finalMessage");
    if(msg) msg.classList.add("show");
  }, 3000);
});
document.body.addEventListener("touchend", () => clearTimeout(hold));

// Optional for desktop users
document.body.addEventListener("mousedown", () => {
  hold = setTimeout(() => {
    const msg = document.getElementById("finalMessage");
    if(msg) msg.classList.add("show");
  }, 3000);
});
document.body.addEventListener("mouseup", () => clearTimeout(hold));

/* SECTIONS ACTIVE ON SCROLL */
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight/2) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });
});

/* ENDING STICKERS CHANGE */
const endingSection = document.querySelector(".ending");
window.addEventListener("scroll", () => {
  if (endingSection && endingSection.getBoundingClientRect().top < window.innerHeight) {
    const s1 = document.querySelector(".s1");
    const s2 = document.querySelector(".s2");
    const s3 = document.querySelector(".s3");
    if (s1) s1.src = "foto/heart1.png";
    if (s2) s2.src = "foto/heart2.png";
    if (s3) s3.src = "foto/heart3.png";
  }
});
