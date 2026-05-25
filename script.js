const button = document.getElementById("theme-toggle");
const body = document.body;

if (button) {
  button.addEventListener("click", () => {
    body.classList.toggle("light");

    button.textContent = body.classList.contains("light")
      ? "Dark Mode"
      : "Light Mode";
  });
}

function setupReveal(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => observer.observe(el));
}

setupReveal(".reveal");
setupReveal(".project-card");

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


