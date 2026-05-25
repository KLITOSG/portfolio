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

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Fallback: if mailto doesn't open a mail client, offer to open Gmail compose
const contactEmail = document.getElementById('contact-email');
if (contactEmail) {
  contactEmail.addEventListener('click', () => {
    const to = contactEmail.getAttribute('href').replace('mailto:', '');
    // Let the default mailto behavior happen; after a short delay, prompt fallback
    setTimeout(() => {
      if (!document.hidden) {
        const useGmail = confirm('If no mail client opened, open Gmail compose in a new tab?');
        if (useGmail) {
          const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(to);
          window.open(gmailUrl, '_blank');
        }
      }
    }, 700);
  });
}