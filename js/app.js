/**
 * MOSAIC 2.0 / Flat Camp Mountain Retreat Engine
 * Pure Vanilla JavaScript with GPU-accelerated Parallax Scroll Effects
 */

document.addEventListener('DOMContentLoaded', () => {
  initParallaxScroll();
  initMorphingNav();
  initPolaroidTilt();
  initRubricTabs();
  initFaqAccordion();
  initMobileNav();
  initScrollSpy();
  initProblemStatementsPage();
  initSmoothScroll();
});

/**
 * High-Performance Parallax Scroll Controller
 * Uses requestAnimationFrame for jitter-free 60fps parallax movement
 */
function initParallaxScroll() {
  const layerFar = document.querySelector('.layer-far');
  const layerMid = document.querySelector('.layer-mid');
  const layerNear = document.querySelector('.layer-near');
  const layerFg = document.querySelector('.layer-foreground');
  const heroContent = document.querySelector('.hero-expedition-content');
  const heroContainer = document.querySelector('.hero-parallax-container');

  if (!heroContainer) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = heroContainer.offsetHeight;

    // Only apply parallax while hero is visible within viewport
    if (scrollY <= heroHeight + 100) {
      if (layerFar) {
        layerFar.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
      }
      if (layerMid) {
        layerMid.style.transform = `translate3d(0, ${scrollY * 0.22}px, 0)`;
      }
      if (layerNear) {
        layerNear.style.transform = `translate3d(0, ${scrollY * 0.35}px, 0)`;
      }
      if (layerFg) {
        layerFg.style.transform = `translate3d(0, ${scrollY * 0.48}px, 0)`;
      }
      if (heroContent) {
        const opacity = Math.max(0, 1 - (scrollY / (heroHeight * 0.85)));
        heroContent.style.transform = `translate3d(0, ${scrollY * 0.26}px, 0)`;
        heroContent.style.opacity = opacity;
      }
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  updateParallax();
}

/**
 * Morphing Sticky Navbar
 * Transitions from transparent on sunset sky to frosted glass on content
 */
function initMorphingNav() {
  const navbar = document.querySelector('.navbar-expedition');
  if (!navbar) return;

  function checkNav() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', checkNav, { passive: true });
  checkNav();
}

/**
 * Polaroid Scroll Interaction & Subtle 3D Tilt
 */
function initPolaroidTilt() {
  const polaroids = document.querySelectorAll('.polaroid-card');
  if (!polaroids.length) return;

  // Subtle mousemove 3D tilt on desktop
  polaroids.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/**
 * Evaluation Rubric Tabs
 */
function initRubricTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn-expedition');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`tab-panel-${targetId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/**
 * FAQ Accordion Toggling
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-expedition-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-expedition-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other items
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      // Toggle current
      item.classList.toggle('active', !isActive);
    });
  });
}

/**
 * Mobile Drawer Menu
 */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');

  if (!hamburgerBtn || !mobileDrawer || !mobileOverlay) return;

  function openMenu() {
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('open');
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', () => {
    if (mobileDrawer.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMenu);
  mobileOverlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * ScrollSpy to highlight active navigation link based on current section
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links-expedition .nav-link-item');
  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    let current = '';
    const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href === `#${current}` || href.endsWith(`#${current}`)) {
          link.classList.add('active');
        } else if (!href.includes('.html')) {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Problem Statements Page: Live Search & Category Filtering
 */
function initProblemStatementsPage() {
  const problemsListEl = document.getElementById('problems-list-container');
  const searchInput = document.getElementById('problem-search-input');
  const filterChipsContainer = document.getElementById('filter-chips-container');
  const activeCountEl = document.getElementById('active-problem-count');

  if (!problemsListEl || typeof PROBLEM_STATEMENTS === 'undefined') return;

  let activeTrack = 'all';
  let searchQuery = '';

  if (filterChipsContainer && typeof SDG_TRACKS !== 'undefined') {
    filterChipsContainer.innerHTML = `
      <button class="filter-chip-btn active" data-filter="all">All Tracks (${PROBLEM_STATEMENTS.length})</button>
      ${SDG_TRACKS.map(track => `
        <button class="filter-chip-btn" data-filter="${track.number}">
          SDG ${track.number}: ${track.name}
        </button>
      `).join('')}
    `;

    filterChipsContainer.querySelectorAll('.filter-chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterChipsContainer.querySelectorAll('.filter-chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeTrack = btn.getAttribute('data-filter');
        filterAndRenderProblems();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterAndRenderProblems();
    });
  }

  function filterAndRenderProblems() {
    const filtered = PROBLEM_STATEMENTS.filter(p => {
      const matchesTrack = (activeTrack === 'all') || (p.sdg.toString() === activeTrack);
      if (!matchesTrack) return false;
      if (!searchQuery) return true;

      const titleMatch = p.title.toLowerCase().includes(searchQuery);
      const challengeMatch = p.challenge.toLowerCase().includes(searchQuery);
      const techMatch = p.technologies.some(t => t.toLowerCase().includes(searchQuery));
      const beneficiaryMatch = p.beneficiaries.some(b => b.toLowerCase().includes(searchQuery));
      const trackMatch = p.track.toLowerCase().includes(searchQuery);

      return titleMatch || challengeMatch || techMatch || beneficiaryMatch || trackMatch;
    });

    if (activeCountEl) {
      activeCountEl.textContent = `Showing ${filtered.length} of ${PROBLEM_STATEMENTS.length} Field Challenges`;
    }

    if (filtered.length === 0) {
      problemsListEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border: 2px dashed rgba(28,24,20,0.2); border-radius: var(--radius-md);">
          <div style="font-size: 3rem; margin-bottom: 12px;">🧭</div>
          <h3 style="font-size: 1.4rem; margin-bottom: 8px;">No challenges match your search query</h3>
          <p style="color: var(--ink-muted);">Try adjusting your keywords or clearing the SDG track filter.</p>
        </div>
      `;
      return;
    }

    problemsListEl.innerHTML = filtered.map(p => {
      const trackInfo = SDG_TRACKS.find(t => t.number === p.sdg) || { color: '#C85A32' };
      return `
        <div class="problem-card-item">
          <div>
            <div class="problem-card-header">
              <span class="problem-sdg-tag" style="background-color: ${trackInfo.color};">SDG ${p.sdg}: ${p.track}</span>
              <span class="problem-num-badge">#${p.id < 10 ? '0' + p.id : p.id}</span>
            </div>
            <h3 class="problem-title">${p.title}</h3>
            <p class="problem-challenge">${p.challenge}</p>
            
            <div class="problem-beneficiaries-list">
              <strong>Frontline Beneficiaries:</strong> ${p.beneficiaries.join(', ')}
            </div>
          </div>

          <div>
            <div style="margin-bottom: 12px;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; color: var(--ink-muted); text-transform: uppercase;">Field Workshop Layers:</span>
              <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px;">
                ${p.workshopDomains.map(d => `<span class="tech-chip">Layer ${d}</span>`).join('')}
              </div>
            </div>

            <div class="ws-tech-chips">
              ${p.technologies.map(t => `<span class="tech-chip">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  filterAndRenderProblems();
}

/**
 * Smooth Anchor Scrolling
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.length <= 1) return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
