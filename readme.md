# FitZone Dakar — Cahier des charges & Documentation

Ce document réunit:
- Cahier des charges fonctionnel et technique.
- Documentation d’installation, d’usage et d’évolution (static → Django).

---

## 1) Contexte & objectifs

- **Contexte**
  - Site vitrine orienté acquisition pour une salle de sport à Dakar.
  - Design moderne: Tailwind, variables CSS, Font Awesome, effets sobres.

- **Objectifs business**
  - Générer des leads: inscription, contact, rendez‑vous, bilan bien‑être.
  - Renforcer la présence locale (SEO Local Dakar).
  - Préparer l’évolution vers des réservations et un back‑office Django.

---

## 2) Périmètre (version actuelle — front statique)

- **Sections/pages**
  - Accueil.
  - À propos (mission, valeurs, vision…).
  - Services/Programmes (cartes).
  - Tarifs (3 offres).
  - Notre équipe (coachs).
  - Planning du jour (filtres par niveau).
  - Galerie (visionneuse plein écran).
  - Avis (témoignages).
  - Blog (teasers).
  - Contact (formulaire + Google Maps).
  - Bilan forme & bien‑être (8 questions, collecte nom/email, message final).

- **Fonctionnalités clés**
  - Loader Tailwind (spinner) avec blocage de scroll, durée min affichage.
  - Menu desktop + mobile (dépliants/Pages).
  - Planning avec filtres:
    - Boutons `.filter-btn` avec `data-filter="all|debutant|intermediaire|avance"`.
    - Cartes `.cours-card` + classe niveau correspondante.
  - Bilan (questionnaire):
    - 8 questions (radios), progression, formulaire final Nom/Email, message de fin.
    - Point d’intégration `fetch('/api/evaluation')` prêt pour la phase Django.
  - Galerie: affichage plein écran (overlay).

- **Tech**
  - HTML + Tailwind (CDN) + Font Awesome + CSS utilitaire + JS Vanilla.
  - Déploiement statique (GitHub Pages, Netlify ou Vercel).

---

## 3) Évolutions (Phase 2 — Django)

- **Back‑office (Django admin)**
  - Modèles: Coach, Programme, Cours, Créneau (date/heure/lieu/coach/niveau/places), Témoignage, Article, Média.
  - CRUD et publication.

- **Fonctionnel**
  - Auth utilisateurs (membres), réservations de cours, liste d’attente, paiement local (Wave, PayDunya, PayTech).
  - Emailing/Notifications: confirmation, rappel, recommandations du bilan.
  - API JSON: planning du jour/semaine, programmes, coachs.

- **Intégrations**
  - SEO technique (sitemaps, Open Graph, schema.org LocalBusiness).
  - Analytics, Pixels (Meta/Google), conversions (WhatsApp, formulaires, réservations).

---

## 4) Exigences UX/UI & Design System

- **Principes**
  - Mobile‑first responsive.
  - Contrastes et lisibilité.
  - Animations légères (hover, focus, badges d’état).

- **Design System**
  - Variables CSS: `--color-primary`, `--color-accent`, `--color-bg`, etc.
  - Icônes: `<i>` Font Awesome.
  - Tailwind utilitaires: couleurs, layout, `animate-spin`, `backdrop-blur`, etc.

- **Accessibilité**
  - Libellés de formulaires.
  - États focus visibles.
  - Hiérarchie de titres.

---

## 5) Performances & SEO

- **Perf**
  - Images compressées; dimensions adaptées; lazy si nécessaire.
  - Minimiser JS tiers.

- **SEO**
  - Titre/description par page/section.
  - Open Graph.
  - SEO local: adresse, horaires, téléphone cohérents (NAP) + Google Maps.
  - Pages “quartier + fitness” (ex: “Salle de sport Sacré‑Cœur”).

---

## 6) Sécurité & conformité

- **Statique**
  - Pas de stockage sensible côté client.
  - Validation basique des formulaires (HTML5 + JS).

- **Django (à venir)**
  - Validation serveur, CSRF, rate limiting sur envois.
  - Politique de confidentialité (collecte email/nom).
  - Consentement et opt‑out pour emailing.

---

## 7) Analytics & suivi

- Google Analytics/Matomo.
- Suivi conversions: CTA WhatsApp, formulaires, clics planning, “Commencer”.
- Événements personnalisés: “Bilan complété”, “Filtre planning utilisé”.

---

## 8) Architecture des fichiers

- [index.html](cci:7://file:///c:/Users/DELL/Desktop/WebSite/FitZone/index.html:0:0-0:0) — sections principales + ancres.
- [style.css](cci:7://file:///c:/Users/DELL/Desktop/WebSite/FitZone/style.css:0:0-0:0) — variables + utilitaires (le reste en Tailwind).
- [script.js](cci:7://file:///c:/Users/DELL/Desktop/WebSite/FitZone/script.js:0:0-0:0) — interactions:
  - Menu mobile (prévention double toggle).
  - Loader (min durée, blocage scroll).
  - Planning: filtres + classes.
  - Bilan: moteur Q/A + formulaire final + message fin.
  - Galerie: plein écran.
- `images/` — assets.

---

## 9) Critères d’acceptation (MVP statique)

- Responsive.
- Loader visible, bloque scroll, se ferme après `window.load` + durée min.
- Planning:
  - Filtres opérationnels.
  - Cartes correctement taguées (niveaux).
- Bilan:
  - 8 questions.
  - Formulaire Nom/Email final.
  - Message de fin s’affiche (sans afficher les recommandations à l’écran).
- Galerie:
  - Visionneuse plein écran fonctionnelle.
- Navigation:
  - Ancres valides; menu mobile fiable.

---

# Documentation technique

## A) Prérequis

- Navigateur moderne.
- CDNs: Tailwind, Font Awesome (et lightbox si utilisée).
- Serveur statique pour tests: VS Code “Live Server”, par ex.

## B) Lancement local

1. Ouvrir le dossier du projet.
2. Lancer un serveur statique (Live Server).
3. Ouvrir [index.html](cci:7://file:///c:/Users/DELL/Desktop/WebSite/FitZone/index.html:0:0-0:0).

## C) Sections HTML (principales)

- `#accueil`
- `#apropos`
- `#services`
- `#tarifs`
- `#notre-equipe`
- `#planning`
- `#galerie`
- `#avis`
- `#blog`
- `#contact`
- `#bilan-personnel`

## D) Loader (Tailwind)

- Élément: `#app-loader` (spinner `animate-spin`).
- JS:
  - [showLoader()](cci:1://file:///c:/Users/DELL/Desktop/WebSite/FitZone/script.js:420:0-425:1) au démarrage.
  - [hideLoader()](cci:1://file:///c:/Users/DELL/Desktop/WebSite/FitZone/script.js:28:0-32:1) après `window.load` et durée min (réglable).
  - Blocage scroll via `overflow-hidden` sur `html, body`.

## E) Planning du jour (filtres)

- Boutons:
  - `.filter-btn` + `data-filter="all|debutant|intermediaire|avance"`.
- Cartes:
  - `.cours-card` + niveau correspondant.
- JS:
  - Au clic: active le bouton, masque/affiche les cartes par classe.

## F) Bilan forme & bien‑être

- 8 questions (tableau `fitQuestions` dans [script.js](cci:7://file:///c:/Users/DELL/Desktop/WebSite/FitZone/script.js:0:0-0:0)).
- Progression (compteur + barre).
- Après Q8:
  - Affichage formulaire Nom/Email (consentement).
  - Envoi (à brancher sur backend ensuite).
  - Message “Évaluation terminée!” affiché.
- Point d’intégration:
  - `fetch('/api/evaluation', { ... })` à remplacer par l’URL Django.

## G) SEO & Contenus

- Renseigner `og:title`, `og:description`, `og:image`.
- Titres hiérarchisés par section.
- Données locales cohérentes (adresse, horaires, tel).

## H) Déploiement (statique)

- GitHub Pages / Netlify / Vercel.
- Vérifier chemins d’images.
- Activer HTTPS.

## I) Roadmap technique Django

- Templates: découper [index.html](cci:7://file:///c:/Users/DELL/Desktop/WebSite/FitZone/index.html:0:0-0:0) en blocs réutilisables.
- Modèles:
  - `Coach`, `Programme`, `Cours`, `Creneau`, `Temoignage`, `Article`, `Media`.
- Vues/API:
  - `GET /api/planning?day=today|week`
  - `POST /api/reservations`
  - `POST /api/evaluation`
- Admin:
  - CRUD complet des contenus.
- Auth:
  - Membres + sessions.
- Paiement:
  - Intégration locale (Wave, PayDunya, PayTech).

## J) Tests & QA

- Responsive: iOS/Android, tablettes, desktop.
- Accessibilité: focus, labels, contraste.
- Performances: Lighthouse (viser > 90 mobile si possible).
- Navigation: vérifier ancres, menu mobile, scroll.

## K) Maintenance

- Mises à jour contenu: trimestriel minimum (tarifs, horaires).
- Mise à jour dépendances CDN si évolution majeure.
- Sauvegarde assets.

---

# Guide d’utilisation rapide

- Modifier le planning:
  - Dupliquer une carte, ajouter la classe niveau.
  - Les filtres fonctionneront automatiquement.

- Modifier le questionnaire:
  - Éditer `fitQuestions` (texte + options).
  - Ajuster `fitTotal` si le nombre de questions change.

- Brancher l’envoi email:
  - Côté client: remplacer URL dans `fetch('/api/evaluation', ...)`.
  - Côté Django: vue qui valide et envoie l’email, retourne `{ ok: true }`.

---

# Annexes (options/upsells)

- SEO local avancé + gestion d’avis.
- Campagnes Ads (Meta/Google) orientées leads.
- Shooting photo/vidéo (coachs, salle, cours).
- Réservations/paiement en ligne.
- CRM léger + automatisations email/WhatsApp.

---

© 2025 FitZone Dakar — Documentation projet