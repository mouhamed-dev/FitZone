// funtion Oups
function oups(e) {
  e.preventDefault();
  alert("Oups 😒, les liens ne sont pas encore disponibles.");
  e.stopPropagation();
}

function oupsBlog(e) {
  e.preventDefault();
  alert("Oups 😒, l'article n'est pas encore disponible.");
  e.stopPropagation();
}

document.addEventListener("DOMContentLoaded", () => {
  // --- ELEMENTS ---
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  const pagesDropdown = document.getElementById("pagesDropdown");
  const pagesBtn = document.getElementById("pagesBtn");
  const pagesMenu = document.getElementById("pagesMenu");
  const pagesChevron = document.getElementById("pagesChevron");
  const mPagesBtn = document.getElementById("mPagesBtn");
  const mPagesPanel = document.getElementById("mPagesPanel");
  const mPagesChevron = document.getElementById("mPagesChevron");

  // --- TOGGLE MENU MOBILE ---
  function toggleMenu(force = null) {
    const willHide =
      force !== null ? force : !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", willHide);

    if (willHide) {
      // Ferme le sous-menu Pages mobile si menu se ferme
      mPagesPanel?.classList.add("hidden");
      mPagesChevron?.classList.remove("rotate-180");
    }
  }

  // --- Bouton hamburger ---
  btn?.addEventListener("click", () => toggleMenu());

  // Fermer menu mobile au clic sur un lien
  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(true));
  });

  // Fermer menu mobile en scrollant
  window.addEventListener("scroll", () => {
    if (!menu.classList.contains("hidden")) toggleMenu(true);
  });

  // --- DROPDOWN DESKTOP "Pages" ---
  if (pagesDropdown && pagesBtn && pagesMenu) {
    // Ouvre/Ferme sur clic
    pagesBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = pagesMenu.classList.contains("hidden");
      pagesMenu.classList.toggle("hidden", !isHidden);
      pagesChevron?.classList.toggle("rotate-180", isHidden);
    });

    // Ouvre sur hover (desktop uniquement)
    pagesDropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        pagesMenu.classList.remove("hidden");
        pagesChevron?.classList.add("rotate-180");
      }
    });

    pagesDropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth >= 1024) {
        pagesMenu.classList.add("hidden");
        pagesChevron?.classList.remove("rotate-180");
      }
    });

    // Fermer si clic à l’extérieur
    document.addEventListener("click", (e) => {
      if (!pagesDropdown.contains(e.target)) {
        pagesMenu.classList.add("hidden");
        pagesChevron?.classList.remove("rotate-180");
      }
    });

    // Fermer dropdown si clic sur un lien interne
    pagesMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        pagesMenu.classList.add("hidden");
        pagesChevron?.classList.remove("rotate-180");
      });
    });
  }

  // --- DROPDOWN MOBILE "Pages" ---
  if (mPagesBtn && mPagesPanel) {
    mPagesBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = mPagesPanel.classList.contains("hidden");
      mPagesPanel.classList.toggle("hidden");
      mPagesChevron?.classList.toggle("rotate-180", willOpen);
    });
  }
});

// contact form
document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      var firstName = document.getElementById("prenom").value;
      var lastName = document.getElementById("nom").value;
      e.preventDefault();
      contactForm.reset();
      alert("✅ Merci pour votre message " + firstName + " " + lastName + " !");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var newsletterForm = document.getElementById("newsletter-form");
  
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      let nameInput = document.getElementById("newsletter-nom").value;
      e.preventDefault();
      newsletterForm.reset();
      alert("✅ Merci pour votre inscription " + nameInput + " ! ");
      
    });
  }
});