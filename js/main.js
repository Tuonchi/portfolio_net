// ========== DARK MODE TOGGLE ========== //
const toggleBtn = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");
const themeIcon = document.getElementById("theme-icon");

function updateIcon() {
  if (document.body.classList.contains("dark")) {
    themeIcon?.classList.remove("fa-moon");
    themeIcon?.classList.add("fa-sun");
  } else {
    themeIcon?.classList.remove("fa-sun");
    themeIcon?.classList.add("fa-moon");
  }
}

if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
  document.body.classList.add("dark");
}

window.addEventListener("DOMContentLoaded", () => {
  updateIcon();

  // ========== TIME-BASED GREETING ========== //
  const greeting = document.getElementById("greeting-message");
  if (greeting) {
    const hour = new Date().getHours();
    const message =
      hour >= 5 && hour < 12
        ? "Good morning, welcome to my portfolio!"
        : hour >= 12 && hour < 17
        ? "Good afternoon, glad you're here!"
        : hour >= 17 && hour < 21
        ? "Good evening, feel free to explore!"
        : "You're up late! Welcome to my portfolio 🌙";

    greeting.textContent = message;
  }
});

toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateIcon();
});

// ========== SCROLL REVEAL ========== //
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ========== SKILL BAR ANIMATION ========== //
function animateSkillBars() {
  const bars = document.querySelectorAll(".fill");
  bars.forEach((bar) => {
    const width = bar.dataset.fill;
    if (width) {
      bar.style.width = width;
      bar.style.transition = "width 2s ease-in-out";
    }
  });
}
window.addEventListener("load", animateSkillBars);

// ========== SCROLL TO TOP BUTTON ========== //
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
scrollBtn.title = "Go to top";
Object.assign(scrollBtn.style, {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  padding: "10px 15px",
  border: "none",
  borderRadius: "50%",
  backgroundColor: "var(--accent)",
  color: "white",
  fontSize: "20px",
  cursor: "pointer",
  display: "none",
  zIndex: "1000",
});
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
