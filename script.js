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


function themeToggle(event) {
  event.preventDefault();
  alert("Oups 😒, le changement de thème n'est pas encore disponible.");
  event.stopPropagation();
}

function prog(event) {
  event.preventDefault();
  alert("Oups 😒, les programmes ne sont pas encore disponibles.");
  event.stopPropagation();
}

function planning(event) {
  event.preventDefault();
  alert("Oups 😒, cette fonctionnalité n'est pas encore disponible.");
  event.stopPropagation();
}

// Filtrage des cours via btn
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.cours-card');

function setActive(btn) {
    buttons.forEach(b => {
      b.classList.remove('bg-primary', 'text-white');
      b.classList.add('bg-white/10');
    });
    btn.classList.remove('bg-white/10');
    btn.classList.add('bg-primary', 'text-white');
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter; // 'all' | 'debutant' | 'intermediaire' | 'avance'
      setActive(btn);

      cards.forEach(card => {
        const show = filter === 'all' || card.classList.contains(filter);
        card.classList.toggle('hidden', !show);
      });
    });
  });




// script pour l'évaluation 

  let fitCurrent = 1;
  const fitTotal = 8;
  const fitData = {};

  const fitQuestions = [
    {
      key: "objectif",
      question: "Quel est ton objectif principal ?",
      options: [
        { value: "perte", text: "Perte de poids" },
        { value: "masse", text: "Prise de masse" },
        { value: "tonicite", text: "Tonicité et silhouette" },
        { value: "endurance", text: "Améliorer l’endurance" },
        { value: "bienetre", text: "Bien‑être et mobilité" }
      ]
    },
    {
      key: "niveau",
      question: "Quel est ton niveau actuel ?",
      options: [
        { value: "debutant", text: "Débutant" },
        { value: "intermediaire", text: "Intermédiaire" },
        { value: "avance", text: "Avancé" }
      ]
    },
    {
      key: "frequence",
      question: "Combien de séances par semaine peux‑tu faire ?",
      options: [
        { value: "1-2", text: "1–2 séances" },
        { value: "3-4", text: "3–4 séances" },
        { value: "5+", text: "5+ séances" }
      ]
    },
    {
      key: "duree",
      question: "Durée préférée d’une séance",
      options: [
        { value: "30", text: "30 minutes" },
        { value: "45-60", text: "45–60 minutes" },
        { value: "75+", text: "75+ minutes" }
      ]
    },
    {
      key: "contraintes",
      question: "As‑tu des contraintes ou douleurs actuelles ?",
      options: [
        { value: "aucune", text: "Aucune" },
        { value: "dos", text: "Dos" },
        { value: "genou", text: "Genou" },
        { value: "epaule", text: "Épaule" },
        { value: "autre", text: "Autre" }
      ]
    },
    {
      key: "sommeil",
      question: "Comment évalues‑tu la qualité de ton sommeil ?",
      options: [
        { value: "faible", text: "Faible" },
        { value: "moyen", text: "Moyenne" },
        { value: "bonne", text: "Bonne" }
      ]
    },
    {
      key: "stress",
      question: "Quel est ton niveau de stress actuel ?",
      options: [
        { value: "faible", text: "Faible" },
        { value: "moyen", text: "Moyen" },
        { value: "eleve", text: "Élevé" }
      ]
    },
    {
      key: "preference",
      question: "Quelle est ta préférence de séance ?",
      options: [
        { value: "solo", text: "En autonomie" },
        { value: "coach", text: "Avec coach personnel" },
        { value: "collectif", text: "Cours collectifs" }
      ]
    }
  ];

  function startFitAssessment() {
    document.getElementById('fit-start').classList.add('hidden');
    document.getElementById('fit-questions').classList.remove('hidden');
    document.getElementById('fit-total').textContent = fitTotal;
    renderFitQuestion(1);
  }

  function renderFitQuestion(n) {
    fitCurrent = n;
    const q = fitQuestions[n - 1];
    document.getElementById('fit-current').textContent = n;
    document.getElementById('fit-progress').style.width = `${(n / fitTotal) * 100}%`;

    const saved = fitData[q.key] || "";
    const html = [
      `<h4 class="text-lg font-medium mb-3">${q.question}</h4>`,
      `<div class="space-y-3">`,
      ...q.options.map(o => `
        <label class="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer">
          <input type="radio" name="fit-q${n}" value="${o.value}" ${saved === o.value ? "checked" : ""} class="accent-[var(--color-primary)]">
          <span>${o.text}</span>
        </label>
      `),
      `</div>`
    ].join("");

    document.getElementById('fit-question-content').innerHTML = html;

    const prev = document.getElementById('fit-prev');
    const next = document.getElementById('fit-next');
    prev.disabled = n === 1;
    prev.classList.toggle('opacity-50', n === 1);
    next.textContent = n === fitTotal ? 'Envoyer mes réponses' : 'Suivant →';
    prev.onclick = () => { if (fitCurrent > 1) renderFitQuestion(fitCurrent - 1); };
    next.onclick = () => fitNext();
  }

  function fitNext() {
    const sel = document.querySelector(`input[name="fit-q${fitCurrent}"]:checked`);
    if (!sel) { alert('Sélectionnez une option avant de continuer.'); return; }
    const key = fitQuestions[fitCurrent - 1].key;
    fitData[key] = sel.value;
    if (fitCurrent < fitTotal) renderFitQuestion(fitCurrent + 1);
    else showLeadForm();
  }


  function showLeadForm() {
  const container = document.getElementById('fit-assessment');
  container.innerHTML = `
    <div class="space-y-4 max-w-xl mx-auto">
      <div class="text-center space-y-2">
        <h3 class="text-2xl font-bold">Dernière étape</h3>
        <p class="text-muted">Entrez vos coordonnées pour recevoir vos recommandations personnalisées par email.</p>
      </div>
      <div class="grid gap-3">
        <input id="fit-name" type="text" autocomplete="name" placeholder="Votre nom complet"
               class="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
        <input id="fit-email" type="email" autocomplete="email" placeholder="Votre adresse email"
               class="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
        <label class="flex items-start gap-2 text-sm">
          <input id="fit-consent" type="checkbox" class="mt-1 h-4 w-4 rounded border-white/20 bg-white/5">
          <span>J’accepte de recevoir par email mon bilan et des conseils FitZone.</span>
        </label>
      </div>
      <button type="button" onclick="submitFitEvaluation()"
              class="w-full inline-flex justify-center px-4 py-3 rounded bg-primary text-white font-semibold hover:opacity-90 transition">
        Soumettre les données
      </button>
    </div>
  `;
}

function submitFitEvaluation() {
  const name = (document.getElementById('fit-name')?.value || '').trim();
  const email = (document.getElementById('fit-email')?.value || '').trim();
  const consent = document.getElementById('fit-consent')?.checked;

  if (!name || !email) {
    alert("Veuillez renseigner votre nom et votre email.");
    return;
  }
  if (!consent) {
    alert("Veuillez accepter l’envoi par email.");
    return;
  }

  // TODO: remplace l’URL par ton endpoint backend si disponible
  // Ex: '/api/evaluation' côté serveur, qui enverra l’email
  fetch('/api/evaluation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nom: name,
      email: email,
      reponses: fitData
    })
  })
  .then(() => showFitDone())
  alert("✅ Réponses enregistrées avec succès.")
  .catch(() => showFitDone()); // On affiche le message même si pas de backend pour l’instant
}

function showFitDone() {
  const container = document.getElementById('fit-assessment');
  container.innerHTML = `
    <div class="text-center space-y-6">
      <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
        <i class="fa-solid fa-check text-primary text-2xl"></i>
      </div>
      <h3 class="text-2xl font-bold">Évaluation terminée !</h3>
      <p class="text-muted">
        Merci d'avoir complété notre évaluation. Votre profil personnalisé et nos recommandations vous seront envoyés par email dans les prochaines minutes.
      </p>
      <div class="rounded-lg border border-white/10 bg-white/5 p-4">
        <p class="text-primary font-medium">
          💡 En attendant, consultez nos parcours recommandés ci-dessous !
        </p>
      </div>
      <button type="button" onclick="location.reload()" class="mt-2 px-4 py-2 rounded border border-white/20 text-sm hover:border-primary hover:text-primary transition">
        Refaire l'évaluation
      </button>
    </div>
  `;
}


const scrollContainer = document.getElementById("scroll-container"); 
const scrollMessage = document.getElementById("scroll-indicator");

scrollContainer.addEventListener("scroll", () => {
  scrollMessage.style.display = "none";
});




// Loader
const appLoader = document.querySelector('#app-loader');
const LOADER_MIN_MS = 3000;
let loaderShownAt = 0;

function lockScroll() {
  document.documentElement.classList.add('overflow-hidden', 'overscroll-none');
  document.body.classList.add('overflow-hidden', 'overscroll-none');
  document.body.setAttribute('aria-busy', 'true');
}

function unlockScroll() {
  document.documentElement.classList.remove('overflow-hidden', 'overscroll-none');
  document.body.classList.remove('overflow-hidden', 'overscroll-none');
  document.body.removeAttribute('aria-busy');
}

function showLoader() {
  if (!appLoader) return;
  appLoader.style.display = 'flex';
  if (!loaderShownAt) loaderShownAt = Date.now();
  lockScroll();
}

function hideLoader() {
  if (!appLoader) return;
  appLoader.style.display = 'none';
  unlockScroll();
}

showLoader();

window.addEventListener('load', () => {
  const elapsed = Date.now() - loaderShownAt;
  const remaining = Math.max(0, LOADER_MIN_MS - elapsed);
  setTimeout(hideLoader, remaining);
});