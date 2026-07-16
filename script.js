const root = document.documentElement;
const body = document.body;
const loader = document.querySelector('.loader');
const progressBar = document.querySelector('.progress-bar');
const cursorGlow = document.querySelector('.cursor-glow');
const canvas = document.querySelector('.neural-canvas');
const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const toggleTheme = document.querySelector('.theme-toggle');
const heroTyping = document.querySelector('.typing');
const reveals = Array.from(document.querySelectorAll('.reveal'));
const counters = Array.from(document.querySelectorAll('[data-counter]'));
const faqItems = Array.from(document.querySelectorAll('.faq-item'));
const form = document.querySelector('.contact-form');
const progressLabel = document.querySelector('.reading-progress');

const themeState = localStorage.getItem('awakening-theme') || 'dark';
body.classList.toggle('light', themeState === 'light');

function setTheme(mode) {
  body.classList.toggle('light', mode === 'light');
  localStorage.setItem('awakening-theme', mode);
  toggleTheme.textContent = mode === 'light' ? '☀' : '☾';
}
if (toggleTheme) {
  toggleTheme.addEventListener('click', () => setTheme(body.classList.contains('light') ? 'dark' : 'light'));
}
setTheme(themeState);

function initLoader() {
  window.addEventListener('load', () => {
    window.setTimeout(() => loader?.classList.add('is-hidden'), 540);
  });
}

function initProgressBar() {
  const update = () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0;
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (progressLabel) progressLabel.textContent = `${Math.round(percent)}%`;
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

function initCursorGlow() {
  if (!cursorGlow) return;
  window.addEventListener('pointermove', (event) => {
    cursorGlow.animate({ left: `${event.clientX}px`, top: `${event.clientY}px` }, { duration: 300, fill: 'forwards' });
    cursorGlow.style.opacity = '1';
  });
  window.addEventListener('pointerleave', () => {
    cursorGlow.style.opacity = '0';
  });
}

function initTyping() {
  if (!heroTyping) return;
  const words = ['cognition', 'consciousness', 'emergence', 'synthetic thought'];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const type = () => {
    const current = words[wordIndex];
    heroTyping.textContent = current.slice(0, charIndex);
    if (!deleting && charIndex < current.length) {
      charIndex += 1;
    } else if (!deleting && charIndex === current.length) {
      deleting = true;
      window.setTimeout(type, 1200);
      return;
    } else if (deleting && charIndex > 0) {
      charIndex -= 1;
    } else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
    window.setTimeout(type, deleting ? 45 : 90);
  };
  type();
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  reveals.forEach((item) => observer.observe(item));
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.counter || 0);
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const current = Math.floor(target * progress);
        entry.target.textContent = `${current}${entry.target.dataset.suffix || ''}`;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.8 });
  counters.forEach((counter) => observer.observe(counter));
}

function initFaq() {
  faqItems.forEach((item) => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach((entry) => entry.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });
}

function validateForm() {
  if (!form) return;
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const email = data.get('email')?.toString() || '';
    const message = data.get('message')?.toString() || '';
    if (!email.includes('@') || message.trim().length < 12) {
      status.textContent = 'A valid address and a longer note are required before transmission.';
      return;
    }
    status.textContent = 'Transmission accepted. The network will acknowledge your intent shortly.';
    form.reset();
  });
}

function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function initPageTransition() {
  document.addEventListener('click', (event) => {
    const target = event.target.closest('a');
    if (!target || target.target === '_blank' || target.getAttribute('href')?.startsWith('#')) return;
    const href = target.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;
    event.preventDefault();
    body.classList.add('page-transitioning');
    window.setTimeout(() => {
      window.location.href = href;
    }, 320);
  });
}

function buildCanvasScene() {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let particles = [];
  let hue = 180;

  const resize = () => {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    particles = Array.from({ length: Math.min(45, Math.floor((window.innerWidth + window.innerHeight) / 70)) }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.6,
    }));
  };

  const animate = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    hue = (hue + 0.02) % 360;
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20 || p.x > window.innerWidth + 20) p.x = Math.random() * window.innerWidth;
      if (p.y < -20 || p.y > window.innerHeight + 20) p.y = Math.random() * window.innerHeight;
      ctx.beginPath();
      ctx.fillStyle = `hsla(${hue}, 80%, 70%, 0.5)`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  };

  resize();
  animate();
  window.addEventListener('resize', resize);
}

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initProgressBar();
  initCursorGlow();
  initTyping();
  initReveal();
  initCounters();
  initFaq();
  validateForm();
  initActiveNav();
  initPageTransition();
  buildCanvasScene();
});
