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

// Email chooser: ask the user whether to open their mail app or Gmail compose
const contactEmail = document.getElementById('contact-email');
if (contactEmail) {
  contactEmail.addEventListener('click', (e) => {
    e.preventDefault();
    const to = contactEmail.getAttribute('href').replace('mailto:', '');
    console.log('[contact-email] click handler fired, to=', to);
    const openMailApp = confirm('Open your default mail app? Press OK to open it, Cancel to open Gmail compose.');
    console.log('[contact-email] user chose openMailApp=', openMailApp);
    if (openMailApp) {
      // Try opening the default mail client
      console.log('[contact-email] opening default mail client');
      window.location.href = 'mailto:' + encodeURIComponent(to);
    } else {
      // Open Gmail compose in a new tab; if popup is blocked, navigate current tab
      console.log('[contact-email] opening Gmail compose');
      const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(to);
      const newWin = window.open(gmailUrl, '_blank');
      if (!newWin) {
        console.log('[contact-email] popup blocked, navigating current tab to Gmail');
        window.location.href = gmailUrl;
      }
    }
  });
}

