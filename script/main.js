// 🎵 MUSIC TRIGGER
window.addEventListener("load", () => {
  Swal.fire({
    title: "Do you want to play music in the background?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
    }
    animationTimeline();
  });
});


// 🎂 DATE + AGE CINEMATIC ANIMATION
document.addEventListener("DOMContentLoaded", function () {

  const dayElement = document.getElementById("day");
  const monthElement = document.getElementById("month");
  const yearElement = document.getElementById("year");
  const ageElement = document.getElementById("age");

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const birthDate = new Date(1996, 2, 21); // 21 March 1996
  const targetDate = new Date(2026, 2, 21); // 21 March 2026

  let currentDate = new Date(birthDate);

  function calculateAge(from, to) {
    let years = to.getFullYear() - from.getFullYear();
    let months = to.getMonth() - from.getMonth();
    let days = to.getDate() - from.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  }

  function animateDate() {

    // Update UI
    dayElement.textContent = currentDate.getDate();
    monthElement.textContent = months[currentDate.getMonth()];
    yearElement.textContent = currentDate.getFullYear();

    const age = calculateAge(birthDate, currentDate);

    // 🎯 FINAL MOMENT
    if (currentDate >= targetDate) {
      ageElement.textContent = "30 🎂";

      // 💓 Heartbeat effect
      ageElement.style.transform = "scale(1.3)";
      setTimeout(() => {
        ageElement.style.transform = "scale(1)";
      }, 300);

      // 🎉 Confetti burst
      for (let i = 0; i < 30; i++) {
        let confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        confetti.style.top = "50%";
        confetti.style.left = "50%";
        confetti.style.borderRadius = "50%";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        let x = (Math.random() - 0.5) * 600;
        let y = (Math.random() - 0.5) * 600;

        confetti.animate([
          { transform: "translate(0,0)", opacity: 1 },
          { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], {
          duration: 1500,
          easing: "ease-out"
        });

        setTimeout(() => confetti.remove(), 1500);
      }

      return;
    }

    // Live age display
    ageElement.textContent = `${age.years}y ${age.months}m ${age.days}d`;

    // Move forward one day
    currentDate.setDate(currentDate.getDate() + 1);

    // 🎬 SPEED RAMP (cinematic)
    let remaining = targetDate - currentDate;

    let speed;
    if (remaining > 1000 * 60 * 60 * 24 * 365 * 10) {
      speed = 5; // very fast
    } else if (remaining > 1000 * 60 * 60 * 24 * 365 * 2) {
      speed = 15; // medium
    } else if (remaining > 1000 * 60 * 60 * 24 * 30) {
      speed = 40; // slower
    } else {
      speed = 120; // 🥹 very slow near birthday
    }

    setTimeout(animateDate, speed);
  }

  animateDate();
});


// 🎬 ANIMATION TIMELINE (UNCHANGED)
const animationTimeline = () => {

  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.6, { visibility: "visible" })
    .from(".one", 0.9, { opacity: 0, y: 10 })
    .from(".two", 0.9, { opacity: 0, y: 10 })
    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=3.5")
    .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=3")
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 1.5, { visibility: "visible" }, 0.05)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" }, "+=4")
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=1")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2, x: 10, backgroundColor: "rgb(21,161,237)", color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-5", 0.7, { rotationX:15, rotationZ:-10, y:50, opacity:0 }, "+=1.5")
    .to(".idea-5", 0.7, { scale:0.2, opacity:0 }, "+=2")
    .staggerFrom(".idea-6 span", 0.8, { scale:3, opacity:0 }, 0.2)
    .staggerTo(".idea-6 span", 0.8, { scale:3, opacity:0 }, 0.2, "+=1.5")
    .staggerFromTo(".baloons img", 2.5, { y:1400 }, { y:-1000 }, 0.2)
    .from(".profile-picture", 0.5, { scale:3.5, opacity:0 }, "-=2")
    .staggerFrom(".wish-hbd span", 0.7, { opacity:0, y:-50 }, 0.1)
    .from(".wish h5", 0.5, { opacity:0, y:10 })
    .to(".six", 0.5, { opacity:0, y:30 })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2);

  document.getElementById("replay").addEventListener("click", () => {
    tl.restart();
  });
};
