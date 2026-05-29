/**
 * Portfolio — Nur Iman Hanani
 * Main interactions: navigation, project modals (STAR), app gallery, footer year
 */

/* ---- Project case studies (STAR format) ----
 * REPLACE: Update github URLs for each project
 */
const PROJECTS = {
  1: {
    title: 'Tuition Management System',
    type: 'Full-Stack Web Application',
    stack: 'Laravel, PHP, HTML, CSS, JavaScript, MySQL',
    date: 'June 2025 – July 2025',
    github: 'https://github.com/iman890/tuition_management',
    galleryLayout: 'web',
    galleryButtonLabel: 'View Interface',
    screenshots: [
      { src: 'assets/projects/tuition-signin.png', alt: 'Sign in page' },
      { src: 'assets/projects/tuition-register.png', alt: 'Create account — role selection' },
      { src: 'assets/projects/tuition-staff-dashboard.png', alt: 'Staff dashboard' },
      { src: 'assets/projects/tuition-add-student.png', alt: 'Add new student form' },
      { src: 'assets/projects/tuition-view-student.png', alt: 'View student records' },
      { src: 'assets/projects/tuition-feedback-review.png', alt: 'Review feedback — staff' },
      { src: 'assets/projects/tuition-student-dashboard.png', alt: 'Student dashboard' },
      { src: 'assets/projects/tuition-submit-feedback.png', alt: 'Submit feedback — student' },
    ],
    situation:
      'Educational institutions need a centralized system to manage student records and collect feedback from students, with different access levels for each role.',
    task:
      'Design and build a full-stack web application with role-based authentication, CRUD operations for student data and feedback, and a structured database backend.',
    actions: [
      'Implemented MVC architecture using Laravel with RESTful routing',
      'Built authentication and role-based access for staff and students',
      'Designed MySQL database schema and integrated CRUD for records and feedback',
      'Developed responsive frontend with HTML, CSS, and JavaScript',
    ],
    result:
      'Demonstrated full-stack development skills using Laravel, MySQL, authentication, database integration, and structured MVC development.',
  },
  2: {
    title: 'World Explorer',
    type: 'Web Application',
    stack: 'HTML, CSS, JavaScript, REST Countries API',
    date: 'October 2025 – November 2025',
    github: 'https://github.com/iman890/world-explorer',
    galleryLayout: 'web',
    galleryButtonLabel: 'View Interface',
    screenshots: [
      { src: 'assets/projects/world-explorer-home.png', alt: 'Home page with country search' },
      { src: 'assets/projects/world-explorer-countries.png', alt: 'Popular countries grid' },
      { src: 'assets/projects/world-explorer-malaysia-hero.png', alt: 'Country view — Malaysia hero' },
      { src: 'assets/projects/world-explorer-malaysia-detail.png', alt: 'Country details — Malaysia info cards' },
      { src: 'assets/projects/world-explorer-new-trip.png', alt: 'Plan your trip page' },
      { src: 'assets/projects/world-explorer-plan.png', alt: 'Trip details form — United Kingdom' },
      { src: 'assets/projects/world-explorer-upcoming.png', alt: 'Upcoming trips dashboard' },
    ],
    situation:
      'Users planning trips need quick access to real-time country information and a way to save and manage personalized travel plans in the browser.',
    task:
      'Create a frontend web application that fetches live country data from an external API and supports personalized trip management with persistent local storage.',
    actions: [
      'Integrated REST Countries API using asynchronous Fetch API calls',
      'Built country search and dynamic UI updates based on API responses',
      'Implemented CRUD for trip plans with browser localStorage persistence',
      'Designed a responsive, user-friendly interface with HTML and CSS',
    ],
    result:
      'Demonstrated frontend development, API integration, async JavaScript, and dynamic UI design.',
  },
  3: {
    title: 'MyRecipeKitchen',
    type: 'Mobile Application',
    stack: 'Flutter, Dart, REST API, Android Studio',
    date: 'February 2026 – March 2026',
    github: 'https://github.com/iman890/Recipe_Book_App',
    galleryLayout: 'mobile',
    galleryButtonLabel: 'View App Interface',
    screenshots: [
      { src: 'assets/projects/myrecipekitchen-home.png', alt: 'Home screen' },
      { src: 'assets/projects/myrecipekitchen-recipes.png', alt: 'Recommended recipes' },
      { src: 'assets/projects/myrecipekitchen-search.png', alt: 'Search recipes — online API' },
      { src: 'assets/projects/myrecipekitchen-recipe-detail.png', alt: 'Online recipe detail — Ayam Percik' },
      { src: 'assets/projects/myrecipekitchen-add.png', alt: 'Add recipe form' },
      { src: 'assets/projects/myrecipekitchen-detail.png', alt: 'My recipe detail — Nasi Goreng' },
      { src: 'assets/projects/myrecipekitchen-list.png', alt: 'My recipes list' },
    ],
    situation:
      'Home cooks often use separate apps for searching online recipes and storing personal recipes, leading to a fragmented experience on mobile devices.',
    task:
      'Develop a cross-platform mobile app that combines online recipe search with personal recipe management, including media capture features.',
    actions: [
      'Built Flutter UI with Dart for recipe browsing and personal collections',
      'Integrated REST API for online recipe search with JSON parsing',
      'Added camera and gallery features for recipe images',
      'Tested and refined mobile UX using Android Studio',
    ],
    result:
      'Demonstrated mobile development skills, API integration, JSON handling, and user interface design.',
  },
  4: {
    title: 'Network Infrastructure & Security Project',
    type: 'Cisco Packet Tracer Project',
    stack: 'Cisco Packet Tracer',
    date: 'February 2026 – March 2026',
    hideGithub: true,
    galleryLayout: 'web',
    galleryButtonLabel: 'View Interface',
    screenshots: [
      { src: 'assets/projects/network-topology.png', alt: 'Multi-site network topology — HQ, Branch 1 & Branch 2' },
    ],
    situation:
      'A multi-site enterprise requires a secure, segmented network with wireless access, guest isolation, and reliable routing between VLANs across locations.',
    task:
      'Design and simulate a complete enterprise network topology with VLAN segmentation, dynamic routing, security policies, and connectivity verification.',
    actions: [
      'Configured VLAN segmentation with inter-VLAN routing and router-on-a-stick',
      'Implemented DHCP, OSPF dynamic routing, VTP, and EtherChannel',
      'Set up wireless networking with guest isolation and ACL security rules',
      'Verified connectivity and troubleshooting across multiple network segments',
    ],
    result:
      'Demonstrated routing, switching, network security, IP addressing, troubleshooting, and connectivity verification across multiple VLANs and network segments.',
  },
};

/* ---- DOM refs ---- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');
const galleryOverlay = document.getElementById('galleryOverlay');
const galleryClose = document.getElementById('galleryClose');
const galleryImage = document.getElementById('galleryImage');
const galleryTitle = document.getElementById('galleryTitle');
const galleryCaption = document.getElementById('galleryCaption');
const galleryCounter = document.getElementById('galleryCounter');
const galleryThumbs = document.getElementById('galleryThumbs');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
const galleryFrame = document.getElementById('galleryFrame');
const yearEl = document.getElementById('year');

let galleryIndex = 0;
let galleryScreens = [];

/* ---- Mobile navigation ---- */
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function setActiveNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach((section) => {
    const id = section.getAttribute('id');
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      navAnchors.forEach((a) => {
        a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}

window.addEventListener('scroll', setActiveNav, { passive: true });

/* ---- App interface gallery ---- */
function renderGalleryThumbs() {
  if (!galleryThumbs) return;
  galleryThumbs.innerHTML = galleryScreens
    .map(
      (s, i) =>
        `<button type="button" class="gallery-thumb${i === galleryIndex ? ' is-active' : ''}" data-index="${i}" aria-label="${s.alt}">
          <img src="${s.src}" alt="">
        </button>`
    )
    .join('');

  galleryThumbs.querySelectorAll('.gallery-thumb').forEach((btn) => {
    btn.addEventListener('click', () => setGallerySlide(Number(btn.dataset.index)));
  });
}

function setGallerySlide(index) {
  if (!galleryScreens.length) return;
  galleryIndex = (index + galleryScreens.length) % galleryScreens.length;
  const slide = galleryScreens[galleryIndex];
  if (galleryImage) {
    galleryImage.src = slide.src;
    galleryImage.alt = slide.alt;
  }
  if (galleryCaption) galleryCaption.textContent = slide.alt;
  if (galleryCounter) {
    galleryCounter.textContent = `${galleryIndex + 1} / ${galleryScreens.length}`;
  }
  galleryThumbs?.querySelectorAll('.gallery-thumb').forEach((btn, i) => {
    btn.classList.toggle('is-active', i === galleryIndex);
  });
}

function openGallery(id, startIndex = 0) {
  const project = PROJECTS[id];
  if (!project?.screenshots?.length || !galleryOverlay) return;
  closeModal();
  galleryScreens = project.screenshots;
  if (galleryTitle) galleryTitle.textContent = project.title;
  if (galleryFrame) {
    galleryFrame.classList.toggle('gallery-frame--web', project.galleryLayout === 'web');
    galleryFrame.classList.toggle('gallery-frame--mobile', project.galleryLayout !== 'web');
  }
  galleryOverlay.classList.toggle('gallery-overlay--web', project.galleryLayout === 'web');
  galleryOverlay.classList.toggle('gallery-overlay--mobile', project.galleryLayout !== 'web');
  renderGalleryThumbs();
  setGallerySlide(startIndex);
  galleryOverlay.classList.add('is-open');
  galleryOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  if (!galleryOverlay) return;
  galleryOverlay.classList.remove('is-open');
  galleryOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-gallery-btn').forEach((btn) => {
  btn.addEventListener('click', () => openGallery(btn.dataset.gallery));
});

if (galleryClose) galleryClose.addEventListener('click', closeGallery);
if (galleryPrev) galleryPrev.addEventListener('click', () => setGallerySlide(galleryIndex - 1));
if (galleryNext) galleryNext.addEventListener('click', () => setGallerySlide(galleryIndex + 1));
if (galleryOverlay) {
  galleryOverlay.addEventListener('click', (e) => {
    if (e.target === galleryOverlay) closeGallery();
  });
}

/* ---- Project modal (STAR) ---- */
function renderProjectModal(project, id) {
  const actionsList = project.actions.map((a) => `<li>${a}</li>`).join('');
  const galleryLabel = project.galleryButtonLabel || 'View Interface';
  const galleryBtn = project.screenshots
    ? `<button type="button" class="btn btn-sm btn-primary modal-gallery-btn" data-gallery="${id}">${galleryLabel}</button>`
    : '';
  const githubLink = project.github && !project.hideGithub
    ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub Repo</a>`
    : '';
  return `
    <p class="modal-type">${project.type}</p>
    <h2 id="modalTitle">${project.title}</h2>
    <p class="modal-stack">${project.stack}</p>
    <p class="modal-date">${project.date}</p>
    <div class="modal-links">
      ${galleryBtn}
      ${githubLink}
    </div>
    <div class="star-block">
      <h4>Situation</h4>
      <p>${project.situation}</p>
    </div>
    <div class="star-block">
      <h4>Task</h4>
      <p>${project.task}</p>
    </div>
    <div class="star-block">
      <h4>Action</h4>
      <ul>${actionsList}</ul>
    </div>
    <div class="star-block modal-result">
      <h4>Result</h4>
      <p>${project.result}</p>
    </div>
  `;
}

function openModal(id) {
  const project = PROJECTS[id];
  if (!project || !modalOverlay || !modalContent) return;
  modalContent.innerHTML = renderProjectModal(project, id);
  modalContent.querySelector('.modal-gallery-btn')?.addEventListener('click', () => {
    openGallery(id);
  });
  modalOverlay.classList.add('is-open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('is-open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  if (!galleryOverlay?.classList.contains('is-open')) {
    document.body.style.overflow = '';
  }
}

document.querySelectorAll('.project-detail-btn').forEach((btn) => {
  btn.addEventListener('click', () => openModal(btn.dataset.open));
});

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (galleryOverlay?.classList.contains('is-open')) closeGallery();
    else closeModal();
    return;
  }
  if (!galleryOverlay?.classList.contains('is-open')) return;
  if (e.key === 'ArrowLeft') setGallerySlide(galleryIndex - 1);
  if (e.key === 'ArrowRight') setGallerySlide(galleryIndex + 1);
});

/* ---- Footer year ---- */
if (yearEl) yearEl.textContent = new Date().getFullYear();
