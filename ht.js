/**
 * Eng. Adham Mohamed — Interactive Portfolio & Web Studio Scripts
 * Phone: +201013984024
 * GitHub: https://github.com/ADHAmmk
 * LinkedIn: https://www.linkedin.com/in/eng-adham-mohamed-16ab2240a/
 */

const WHATSAPP_PHONE = "201013984024";

// ── Open WhatsApp Helper ──
function openWhatsAppWithMessage(message) {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ── Legacy Compatibility & CTA Functions ──
function sendWhatsApp() {
  openWhatsAppWithMessage("Hello Eng. Adham, I'd like to inquire about your web design and development services.");
}

function sendWhatsApp5() {
  openWhatsAppWithMessage("Hello Eng. Adham, I'd like to know more about your website packages and pricing.");
}

function sendWhatsApp6() {
  openWhatsAppWithMessage("Hello Eng. Adham, I'd like to start a new professional website project with you.");
}

function sendWhatsApp9() {
  openWhatsAppWithMessage("Hello Eng. Adham, I'm ready to kick off my website development right away.");
}

function sendServiceWhatsApp(serviceName) {
  const message = `Hello Eng. Adham, I'm interested in your "${serviceName}" service and would love to discuss the details.`;
  openWhatsAppWithMessage(message);
}

function submitOrderForm(event) {
  if (event) event.preventDefault();

  const siteType = document.getElementById("order-site-type")?.value || "Custom Website";
  const clientName = document.getElementById("order-name")?.value.trim() || "Client";
  const notes = document.getElementById("order-notes")?.value.trim() || "No additional notes";

  const message = `Hello Eng. Adham 👋\n\nName: ${clientName}\nProject Type: ${siteType}\nDetails / Notes: ${notes}\n\nPlease share the estimated timeline and quote to get started.`;

  openWhatsAppWithMessage(message);
}

// ── 1. Interactive Golden Constellation Particles Canvas ──
function initParticlesCanvas() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  const mouse = { x: null, y: null, radius: 135 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 22000), 65);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 1,
        isGold: Math.random() > 0.3
      });
    }
  }

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener("resize", resize);
  resize();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.4;
          p.y -= (dy / dist) * force * 1.4;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.isGold ? "rgba(229, 190, 83, 0.55)" : "rgba(56, 189, 248, 0.45)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 130) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(201, 168, 76, ${(1 - dist / 130) * 0.16})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ── 2. Ambient Cursor Glow & Tool Card Spotlight ──
function initCursorEffects() {
  const cursorGlow = document.getElementById("cursor-glow");
  const spotlightCards = document.querySelectorAll(".tool-card");

  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (e) => {
      cursorGlow.style.opacity = "1";
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });

    document.addEventListener("mouseleave", () => {
      cursorGlow.style.opacity = "0";
    });
  }

  spotlightCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--spotlight-x", `${x}%`);
      card.style.setProperty("--spotlight-y", `${y}%`);
    });
  });
}

// ── 3. Animated Typewriter Effect (English) ──
function initTypewriter() {
  const target = document.getElementById("typing-role");
  if (!target) return;

  const roles = [
    "Front-End Web Developer & UI Designer",
    "Building Fast, Interactive & Animated Websites",
    "Crafting Responsive Stores & Landing Pages"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function tick() {
    const currentText = roles[roleIdx];
    if (isDeleting) {
      charIdx--;
      target.textContent = currentText.substring(0, charIdx);
    } else {
      charIdx++;
      target.textContent = currentText.substring(0, charIdx);
    }

    let delay = isDeleting ? 30 : 58;

    if (!isDeleting && charIdx === currentText.length) {
      delay = 1900;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 420;
    }

    setTimeout(tick, delay);
  }

  tick();
}

// ── 4. 3D Tilt Effect for Hero Photo Card ──
function init3DTilt() {
  const card = document.getElementById("hero-photo-tilt");
  if (!card || !window.matchMedia("(pointer: fine)").matches) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });
}

// ── 5. Scroll Reveals, Animated Skill Bars & Stat Counters ──
function initScrollReveals() {
  const revealEls = document.querySelectorAll("[data-reveal]");
  const skillFills = document.querySelectorAll(".tool-progress-fill");
  const statCounters = document.querySelectorAll(".stat-num[data-count]");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay");
          if (delay) {
            entry.target.style.transitionDelay = `${delay}ms`;
          }
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute("data-width") || "90%";
          entry.target.style.width = width;
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  skillFills.forEach((bar) => skillObserver.observe(bar));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const targetVal = parseFloat(el.getAttribute("data-count"));
        const prefix = el.getAttribute("data-prefix") || "";
        const suffix = el.getAttribute("data-suffix") || "";
        const isDecimal = String(targetVal).includes(".");
        const duration = 1400;
        const startTime = performance.now();

        function updateCount(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = targetVal * eased;
          el.textContent = `${prefix}${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = `${prefix}${targetVal}${suffix}`;
          }
        }

        requestAnimationFrame(updateCount);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  statCounters.forEach((counter) => counterObserver.observe(counter));
}

// ── 6. Interactive Tools Filter Tabs ──
function initToolsFilter() {
  const tabs = document.querySelectorAll(".tool-tab-btn");
  const cards = document.querySelectorAll(".tool-card");
  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.getAttribute("data-filter");
      cards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.classList.remove("hidden-tool");
          card.classList.add("revealed");
        } else {
          card.classList.add("hidden-tool");
        }
      });
    });
  });
}

// ── 7. Button Click Ripple Effect ──
function initButtonRipples() {
  const buttons = document.querySelectorAll(".btn, .social-pill-btn, .nav-cta-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const circle = document.createElement("span");
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add("btn-ripple");

      const existing = this.querySelector(".btn-ripple");
      if (existing) existing.remove();

      this.appendChild(circle);
      setTimeout(() => circle.remove(), 620);
    });
  });
}

// ── 8. Scroll Progress, Navbar Blur & Active ScrollSpy ──
function initScrollEffects() {
  const header = document.querySelector("header");
  const backToTopBtn = document.getElementById("back-to-top");
  const scrollBar = document.getElementById("scroll-progress");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a.nav-link");

  function onScroll() {
    const scrollPos = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollBar && docHeight > 0) {
      const progress = Math.min((scrollPos / docHeight) * 100, 100);
      scrollBar.style.width = `${progress}%`;
    }

    if (header) {
      header.classList.toggle("scrolled", scrollPos > 50);
    }

    if (backToTopBtn) {
      backToTopBtn.classList.toggle("visible", scrollPos > 400);
    }

    let currentId = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 130;
      if (scrollPos >= top) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active-link");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// ── 9. Mobile Menu & FAQ Accordion ──
function initNavAndFaq() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const isOpen = navMenu.classList.contains("active");
      menuToggle.innerHTML = isOpen ? "✕" : "☰";
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.innerHTML = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isCurrentActive = item.classList.contains("active");
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) otherItem.classList.remove("active");
        });
        item.classList.toggle("active", !isCurrentActive);
      });
    }
  });
}

// ── 10. Continuous Moving "What Clients Say" Reviews Chat Stream ──
function initInteractiveReviews() {
  const viewport = document.getElementById("reviews-viewport");
  const track = document.getElementById("reviews-grid");
  const avgScoreEl = document.getElementById("reviews-avg-score");
  const totalCountEl = document.getElementById("reviews-total-count");
  const filterBtns = document.querySelectorAll(".review-filter-btn");
  const toggleFormBtn = document.getElementById("toggle-review-form");
  const closeFormBtn = document.getElementById("close-review-form");
  const composerWrap = document.getElementById("review-composer");
  const composerForm = document.getElementById("review-composer-form");
  const starPicker = document.getElementById("star-picker");
  const ratingLabel = document.getElementById("star-rating-label");
  const toastEl = document.getElementById("review-toast");

  if (!track || !viewport) return;

  const STORAGE_REVIEWS_KEY = "adham_custom_reviews_v1";
  const STORAGE_LIKES_KEY = "adham_review_likes_v1";

  const defaultReviews = [
    {
      id: "rev-1",
      name: "Karim Mansour",
      role: "E-Commerce Brand Founder",
      rating: 5,
      text: "The online store exceeded our expectations. Mobile speed is blazing fast, and the WhatsApp checkout flow immediately lifted our daily conversions.",
      badge: "Khamsat · Verified",
      time: "2 days ago",
      likes: 18,
      isCustom: false
    },
    {
      id: "rev-2",
      name: "Nour El-Din Tarek",
      role: "Operations Lead — El Sadat School",
      rating: 5,
      text: "An exceptional experience from kickoff to launch. Adham delivered our school portal with crisp layout structure and handled every edit smoothly.",
      badge: "Verified Client",
      time: "1 week ago",
      likes: 15,
      isCustom: false
    },
    {
      id: "rev-3",
      name: "Salma Nabil",
      role: "Digital Marketing Specialist",
      rating: 5,
      text: "Clean typography, sharp animations, and on-time delivery. Our landing page converts noticeably better since migrating to Adham's build.",
      badge: "Khamsat · Verified",
      time: "2 weeks ago",
      likes: 22,
      isCustom: false
    },
    {
      id: "rev-4",
      name: "Youssef Haddad",
      role: "Founder — Gaming Top-Up Store",
      rating: 5,
      text: "Super responsive across all devices and great taste in dark UI aesthetics. Support after handover was genuinely quick and helpful.",
      badge: "Verified Client",
      time: "3 weeks ago",
      likes: 13,
      isCustom: false
    },
    {
      id: "rev-5",
      name: "David Mercer",
      role: "Startup Product Advisor",
      rating: 5,
      text: "Clear communication, semantic code, and zero bloat. Adham turns design ideas into smooth interactive web pages reliably.",
      badge: "LinkedIn Client",
      time: "1 month ago",
      likes: 11,
      isCustom: false
    },
    {
      id: "rev-6",
      name: "Ramy El-Gamal",
      role: "Tech Community Entrepreneur",
      rating: 4,
      text: "Very solid front-end build and fast Lighthouse scores. Needed one tiny spacing tweak on mobile which Adham fixed in minutes.",
      badge: "Khamsat · Verified",
      time: "1 month ago",
      likes: 9,
      isCustom: false
    },
    {
      id: "rev-7",
      name: "Mazen Adel",
      role: "Freelance Web Client",
      rating: 4,
      text: "Great layout and crisp animations across desktop and phone. Delivered right on schedule with helpful guidance on hosting.",
      badge: "Khamsat · Verified",
      time: "1 month ago",
      likes: 7,
      isCustom: false
    }
  ];

  function loadCustomReviews() {
    try {
      const raw = localStorage.getItem(STORAGE_REVIEWS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveCustomReviews(customList) {
    try {
      localStorage.setItem(STORAGE_REVIEWS_KEY, JSON.stringify(customList));
    } catch {
      // Ignore storage quota errors
    }
  }

  function loadLikesState() {
    try {
      const raw = localStorage.getItem(STORAGE_LIKES_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  function saveLikesState(state) {
    try {
      localStorage.setItem(STORAGE_LIKES_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage quota errors
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  let customReviews = loadCustomReviews();
  let likesState = loadLikesState();
  let activeFilter = "all";
  let selectedStars = 5;
  let scrollOffset = 0;
  let singleSetWidth = 0;
  let lastFrameTime = null;
  const STREAM_SPEED_PX_PER_SEC = 48;

  function getAllReviews() {
    return [...customReviews, ...defaultReviews];
  }

  function getFilteredReviews() {
    const all = getAllReviews();
    if (activeFilter === "5") return all.filter((r) => Number(r.rating) === 5);
    if (activeFilter === "4") return all.filter((r) => Number(r.rating) === 4);
    return all;
  }

  function updateSummaryStats() {
    const all = getAllReviews();
    const count = all.length;
    const avg = count
      ? (all.reduce((sum, r) => sum + Number(r.rating || 5), 0) / count).toFixed(1)
      : "5.0";
    if (avgScoreEl) avgScoreEl.textContent = avg;
    if (totalCountEl) totalCountEl.textContent = `${count} Review${count === 1 ? "" : "s"}`;
  }

  function renderStarsHtml(rating) {
    const count = Math.max(1, Math.min(5, Number(rating) || 5));
    let out = "";
    for (let i = 1; i <= count; i++) {
      out += "<span>★</span>";
    }
    return out;
  }

  function buildCardHtml(rev) {
    const isLiked = Boolean(likesState[rev.id]);
    const likeCount = (rev.likes || 0) + (isLiked ? 1 : 0);
    const initial = escapeHtml((rev.name || "C").trim().charAt(0).toUpperCase());
    const badgeClass = rev.isCustom ? "review-badge new-badge" : "review-badge";

    return `
      <div class="review-card" data-rev-id="${escapeHtml(rev.id)}">
        <div>
          <div class="review-card-top">
            <div class="review-stars" aria-label="${rev.rating} out of 5 stars">${renderStarsHtml(rev.rating)}</div>
            <span class="${badgeClass}">${escapeHtml(rev.badge || "Client")}</span>
          </div>
          <div class="review-bubble">
            <p class="review-text">"${escapeHtml(rev.text)}"</p>
            <div class="review-chat-meta">
              <span><i class="fa-solid fa-check-double"></i> Verified feedback</span>
              <span>${escapeHtml(rev.time || "Just now")}</span>
            </div>
          </div>
        </div>
        <div class="review-footer-bar">
          <div class="reviewer-meta">
            <div class="reviewer-avatar">${initial}</div>
            <div style="min-width:0;">
              <div class="reviewer-name">${escapeHtml(rev.name)}</div>
              <div class="reviewer-role">${escapeHtml(rev.role || "Web Client")}</div>
            </div>
          </div>
          <div class="review-actions-mini">
            <button type="button" class="like-review-btn ${isLiked ? "liked" : ""}" data-like-id="${escapeHtml(rev.id)}" aria-label="Like review">
              <i class="fa-${isLiked ? "solid" : "regular"} fa-heart"></i>
              <span>${likeCount}</span>
            </button>
            ${
              rev.isCustom
                ? `<button type="button" class="delete-review-btn" data-delete-id="${escapeHtml(rev.id)}" title="Remove your review" aria-label="Remove review"><i class="fa-solid fa-trash-can"></i></button>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  function measureSingleSetWidth(baseCount, totalCopies) {
    if (!baseCount || !totalCopies) {
      singleSetWidth = 0;
      return;
    }
    const cards = track.querySelectorAll(".review-card");
    if (!cards.length) {
      singleSetWidth = 0;
      return;
    }
    const gapPx = parseFloat(getComputedStyle(track).gap) || 24;
    const cardWidth = cards[0].getBoundingClientRect().width;
    singleSetWidth = baseCount * (cardWidth + gapPx);
  }

  let currentBaseCount = 0;
  let currentCopies = 2;

  function renderReviews(resetOffset = true) {
    const list = getFilteredReviews();
    updateSummaryStats();

    if (!list.length) {
      currentBaseCount = 0;
      singleSetWidth = 0;
      scrollOffset = 0;
      track.style.transform = "translate3d(0, 0, 0)";
      track.innerHTML = '<div class="reviews-empty-state">No reviews match this filter yet. Be the first to add one!</div>';
      return;
    }

    currentBaseCount = list.length;
    currentCopies = list.length === 1 ? 4 : list.length === 2 ? 3 : 2;

    let html = "";
    for (let c = 0; c < currentCopies; c++) {
      html += list.map(buildCardHtml).join("");
    }
    track.innerHTML = html;

    if (resetOffset) {
      scrollOffset = 0;
    }

    requestAnimationFrame(() => {
      measureSingleSetWidth(currentBaseCount, currentCopies);
    });
  }

  // Continuous Non-Stop Stream Animation Loop
  function streamTick(now) {
    if (lastFrameTime === null) lastFrameTime = now;
    const dt = Math.min((now - lastFrameTime) / 1000, 0.05);
    lastFrameTime = now;

    if (singleSetWidth > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollOffset += STREAM_SPEED_PX_PER_SEC * dt;
      if (scrollOffset >= singleSetWidth) {
        scrollOffset -= singleSetWidth;
      }
      track.style.transform = `translate3d(-${scrollOffset}px, 0, 0)`;
    }

    requestAnimationFrame(streamTick);
  }

  // Event delegation on track (in-place Like updates so stream NEVER stops or resets!)
  track.addEventListener("click", (e) => {
    const likeBtn = e.target.closest("[data-like-id]");
    if (likeBtn) {
      e.stopPropagation();
      const id = likeBtn.getAttribute("data-like-id");
      likesState[id] = !likesState[id];
      saveLikesState(likesState);

      const all = getAllReviews();
      const targetRev = all.find((r) => r.id === id);
      const isLiked = Boolean(likesState[id]);
      const updatedCount = (targetRev?.likes || 0) + (isLiked ? 1 : 0);

      track.querySelectorAll(`[data-like-id="${CSS.escape(id)}"]`).forEach((btn) => {
        btn.classList.toggle("liked", isLiked);
        btn.innerHTML = `<i class="fa-${isLiked ? "solid" : "regular"} fa-heart"></i><span>${updatedCount}</span>`;
      });
      return;
    }

    const delBtn = e.target.closest("[data-delete-id]");
    if (delBtn) {
      e.stopPropagation();
      const id = delBtn.getAttribute("data-delete-id");
      customReviews = customReviews.filter((r) => r.id !== id);
      saveCustomReviews(customReviews);
      renderReviews(true);
    }
  });

  window.addEventListener("resize", () => {
    measureSingleSetWidth(currentBaseCount, currentCopies);
  });

  // Filters
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-rating-filter") || "all";
      renderReviews(true);
    });
  });

  // Toggle Write a Review Composer
  function setComposerOpen(open) {
    if (!composerWrap || !toggleFormBtn) return;
    composerWrap.classList.toggle("open", open);
    composerWrap.setAttribute("aria-hidden", String(!open));
    toggleFormBtn.setAttribute("aria-expanded", String(open));
  }

  if (toggleFormBtn) {
    toggleFormBtn.addEventListener("click", () => {
      setComposerOpen(!composerWrap?.classList.contains("open"));
    });
  }

  if (closeFormBtn) {
    closeFormBtn.addEventListener("click", () => setComposerOpen(false));
  }

  // Interactive 5-Star Picker
  const ratingLabels = {
    1: "1/5 — Needs Work",
    2: "2/5 — Fair",
    3: "3/5 — Good",
    4: "4/5 — Very Good",
    5: "5/5 — Outstanding!"
  };

  function paintStars(activeCount, hoveredCount = 0) {
    if (!starPicker) return;
    starPicker.querySelectorAll(".star-pick-btn").forEach((btn) => {
      const val = Number(btn.getAttribute("data-star"));
      btn.classList.toggle("active", val <= activeCount);
      btn.classList.toggle("hovered", hoveredCount > 0 && val <= hoveredCount);
    });
    const displayVal = hoveredCount || activeCount;
    if (ratingLabel) ratingLabel.textContent = ratingLabels[displayVal] || ratingLabels[5];
  }

  if (starPicker) {
    starPicker.querySelectorAll(".star-pick-btn").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        paintStars(selectedStars, Number(btn.getAttribute("data-star")));
      });
      btn.addEventListener("click", () => {
        selectedStars = Number(btn.getAttribute("data-star"));
        paintStars(selectedStars, 0);
      });
    });

    starPicker.addEventListener("mouseleave", () => {
      paintStars(selectedStars, 0);
    });
  }

  // Submit New Review
  if (composerForm) {
    composerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("rev-name");
      const roleInput = document.getElementById("rev-role");
      const commentInput = document.getElementById("rev-comment");

      const name = nameInput?.value.trim();
      const role = roleInput?.value.trim() || "Website Visitor";
      const text = commentInput?.value.trim();

      if (!name || !text) return;

      const newRev = {
        id: `custom-${Date.now()}`,
        name,
        role,
        rating: selectedStars,
        text,
        badge: "New Review",
        time: "Just now",
        likes: 0,
        isCustom: true
      };

      customReviews.unshift(newRev);
      saveCustomReviews(customReviews);

      activeFilter = "all";
      filterBtns.forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-rating-filter") === "all");
      });
      renderReviews(true);

      composerForm.reset();
      selectedStars = 5;
      paintStars(5, 0);

      if (toastEl) {
        toastEl.textContent = "✓ Thanks! Your review is now live.";
        setTimeout(() => {
          toastEl.textContent = "";
          setComposerOpen(false);
        }, 1600);
      } else {
        setComposerOpen(false);
      }
    });
  }

  paintStars(5, 0);
  renderReviews(true);
  requestAnimationFrame(streamTick);
}

// ── Initialize Everything on DOM Ready ──
document.addEventListener("DOMContentLoaded", () => {
  initParticlesCanvas();
  initCursorEffects();
  initTypewriter();
  init3DTilt();
  initScrollReveals();
  initToolsFilter();
  initButtonRipples();
  initScrollEffects();
  initNavAndFaq();
  initInteractiveReviews();
});
