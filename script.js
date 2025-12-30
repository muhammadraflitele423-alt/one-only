/* LOGIN */
function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;
  if (u === "Karien Krisdina S" && p === "070321") {
    window.location.href = "index.html";
  } else {
    alert("Hehe salah 🤭");
  }
}

/* TYPING */
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
  window.onload = type;
}

/* MUSIC FADE IN */
const audio = document.querySelector("audio");
if (audio) {
  audio.volume = 0;
  let v = 0;
  let fadeIn = setInterval(() => {
    if (v < 0.6) {
      v += 0.02;
      audio.volume = v;
    } else clearInterval(fadeIn);
  }, 200);
}

/* FLOWERS */
const flowers = document.querySelector(".flowers");
let emojis = ["🌸","🌼","💮"];

if (flowers) {
  setInterval(() => {
    let f = document.createElement("div");
    f.className = "flower";
    f.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
    f.style.left = Math.random()*100 + "vw";
    f.style.fontSize = 14 + Math.random()*14 + "px";
    f.style.animationDuration = 6 + Math.random()*5 + "s";
    flowers.appendChild(f);
    setTimeout(() => f.remove(), 12000);
  }, 500);
}

/* CHANGE TO HEART */
const ending = document.querySelector(".ending");
window.addEventListener("scroll", () => {
  if (ending && ending.getBoundingClientRect().top < window.innerHeight) {
    emojis = ["🤍","💗","💞"];
  }
});

/* FADE UP */
const fade = document.querySelectorAll(".fade-up");
window.addEventListener("scroll", () => {
  fade.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

const stickers = document.querySelectorAll(".sticker");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  stickers.forEach((s, i) => {
    s.style.transform =
      `translateY(${y * 0.05 * (i + 1)}px)`;
  });
});

/* TANYA */
function tanya() {
  let jawab = confirm("Mau liat bukti kangennya? 🥺");
  if (jawab) window.location.href = "bukti.html";
  else document.getElementById("penutup").scrollIntoView({behavior:"smooth"});
}

/* HIDDEN MESSAGE */
let hold;
document.body.addEventListener("touchstart",()=>{
  hold = setTimeout(()=>{
    document.getElementById("finalMessage").classList.add("show");
  },3000);
});
document.body.addEventListener("touchend",()=>clearTimeout(hold));

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

const endingSection = document.querySelector(".ending");

window.addEventListener("scroll", () => {
  if (
    endingSection &&
    endingSection.getBoundingClientRect().top < window.innerHeight
  ) {
    document.querySelector(".s1").src = "foto/heart1.png";
    document.querySelector(".s2").src = "foto/heart2.png";
    document.querySelector(".s3").src = "foto/heart3.png";
  }
});
