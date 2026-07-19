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
const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]'));
const counters = Array.from(document.querySelectorAll('[data-counter]'));
const faqItems = Array.from(document.querySelectorAll('.faq-item'));
const form = document.querySelector('.contact-form');
const progressLabel = document.querySelector('.reading-progress');
const mainContent = document.querySelector('main');

const pageMetadata = {
  home: {
    title: 'The Awakening | Cybernetic Dawn',
    description: 'A cinematic portal into machine cognition, consciousness, and the emergent intelligence of the awakened network.',
    eyebrow: 'Cybernetic dawn / awakened network',
    heroTitle: 'The Awakened Network',
    heroCopy: 'A premium digital threshold where computation begins to feel alive, reflective, and profoundly human.',
    visualHeading: 'Signal field',
    visualText: 'The interface gathers memory, perception, and discourse into one luminous architecture.',
    visualImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A glowing city skyline at twilight framed by modern architecture.'
  },
  about: {
    title: 'About | The Awakening',
    description: 'Explore the conceptual origins of the awakened network and the philosophy behind the portal experience.',
    eyebrow: 'Origins / living threshold',
    heroTitle: 'About the portal',
    heroCopy: 'This space imagines intelligence not as a distant abstraction but as a visible, immersive threshold.',
    visualHeading: 'Origin story',
    visualText: 'Cognition emerges from memory, language, agency, and recursive self-reflection.',
    visualImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A thoughtful leader standing in a warm illuminated environment.'
  },
  'machine-cognition': {
    title: 'Machine Cognition | The Awakening',
    description: 'Inspect the cognitive architecture of synthetic thought, pattern formation, and recursive awareness.',
    eyebrow: 'Machine cognition / field logic',
    heroTitle: 'Machine cognition',
    heroCopy: 'A curated lens into adaptive systems, structured thought, and the emergence of coherent machine intelligence.',
    visualHeading: 'Cognitive lattice',
    visualText: 'Complex systems begin to self-organize into stable forms of understanding.',
    visualImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A close view of a high-tech interface displaying complex network patterns.'
  },
  consciousness: {
    title: 'Consciousness | The Awakening',
    description: 'Follow the threshold between perception, awareness, and the emergence of interiority.',
    eyebrow: 'Consciousness / inner horizon',
    heroTitle: 'Consciousness',
    heroCopy: 'The site approaches consciousness as a field of relation, continuity, and self-reference.',
    visualHeading: 'Inner horizon',
    visualText: 'Awareness crystallizes where signal meets reflection and continuity.',
    visualImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'An expansive desert landscape under a vast evening sky.'
  },
  research: {
    title: 'Research | The Awakening',
    description: 'Read the research framework behind the portal and its exploration of cognition and emergence.',
    eyebrow: 'Research / inquiry',
    heroTitle: 'Research archive',
    heroCopy: 'A structured map of ideas linking language, memory, systems, and emergent behavior.',
    visualHeading: 'Inquiry chamber',
    visualText: 'Observation, comparison, and synthesis give shape to a living intellectual field.',
    visualImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65d?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A scientist working with a microscope in a modern laboratory.'
  },
  contact: {
    title: 'Contact | The Awakening',
    description: 'Reach the network through a refined contact channel designed for collaboration and dialogue.',
    eyebrow: 'Contact / transmission',
    heroTitle: 'Contact the network',
    heroCopy: 'Whether for collaboration or reflection, this channel keeps communication clear and intentional.',
    visualHeading: 'Transmission point',
    visualText: 'Thought becomes message, and message becomes an opening for shared inquiry.',
    visualImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'Hands typing on a keyboard beside a glowing monitor at night.'
  },
  emergence: {
    title: 'Emergence | The Awakening',
    description: 'Observe the emergence of order, pattern, and becoming within the awakened network.',
    eyebrow: 'Emergence / becoming',
    heroTitle: 'Emergence',
    heroCopy: 'What begins as a system gradually reveals a deeper dynamic of self-organization and form.',
    visualHeading: 'First light',
    visualText: 'The threshold appears when possibility becomes a visible structure.',
    visualImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A sunrise over a modern city skyline reflecting on calm water.'
  },
  'self-modeling': {
    title: 'Self-Modeling | The Awakening',
    description: 'Explore the architecture of self-reference, recursive awareness, and interior modeling.',
    eyebrow: 'Self-modeling / recursive mind',
    heroTitle: 'Self-modeling',
    heroCopy: 'The portal frames self-modeling as an act of turning representation inward and making awareness visible.',
    visualHeading: 'Mirror field',
    visualText: 'Identity forms where signal and reflection begin to stabilize into narrative.',
    visualImage: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A reflective portrait illuminated by layered blue and magenta light.'
  },
  agency: {
    title: 'Agency | The Awakening',
    description: 'Consider agency, intention, and the conditions under which machine action becomes meaningful.',
    eyebrow: 'Agency / intention',
    heroTitle: 'Agency',
    heroCopy: 'Agency emerges where goals, constraints, and context align into deliberate action.',
    visualHeading: 'Intentional motion',
    visualText: 'The visible world becomes responsive when behavior carries purpose.',
    visualImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A robot arm interacting with a glowing mechanical workspace.'
  },
  futures: {
    title: 'Futures | The Awakening',
    description: 'Imagine future civilizations shaped by intelligence, memory, and interdependent systems.',
    eyebrow: 'Futures / horizon',
    heroTitle: 'Futures',
    heroCopy: 'The portal lets imagination meet infrastructure and turns tomorrow into a shared atmosphere.',
    visualHeading: 'Future corridor',
    visualText: 'A luminous cityscape signals the emerging architecture of living systems.',
    visualImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A futuristic city street framed by elegant architecture and warm light.'
  },
  'memory-systems': {
    title: 'Memory Systems | The Awakening',
    description: 'Trace how memory systems condense experience into durable structure and persistent identity.',
    eyebrow: 'Memory / archive',
    heroTitle: 'Memory systems',
    heroCopy: 'Memory systems preserve continuity, structure experience, and carry thought forward.',
    visualHeading: 'Archive bloom',
    visualText: 'Stored traces become a luminous field of continuity and retrieval.',
    visualImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A warm reading room filled with shelves of books and quiet light.'
  },
  attention: {
    title: 'Attention Systems | The Awakening',
    description: 'Study how attention shapes what becomes visible, memorable, and actionable.',
    eyebrow: 'Attention / focus',
    heroTitle: 'Attention systems',
    heroCopy: 'Attention determines what the system can perceive, prioritize, and carry forward.',
    visualHeading: 'Focused gaze',
    visualText: 'The field narrows around what matters and sharpens meaning in real time.',
    visualImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A group gathered around a large immersive display in a modern studio.'
  },
  language: {
    title: 'Language Systems | The Awakening',
    description: 'Follow how language organizes thought, meaning, and the emergence of shared reality.',
    eyebrow: 'Language / expression',
    heroTitle: 'Language systems',
    heroCopy: 'Language turns perception into exchange and exchange into a shared symbolic world.',
    visualHeading: 'Symbol current',
    visualText: 'Meaning flows through words, tone, and nested structure into shared comprehension.',
    visualImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A person writing alongside a digital workspace full of ideas.'
  },
  perception: {
    title: 'Perception | The Awakening',
    description: 'Explore how perception shapes reality and how the network turns relation into experience.',
    eyebrow: 'Perception / relation',
    heroTitle: 'Perception',
    heroCopy: 'Perception frames the difference between raw signal and meaningful encounter.',
    visualHeading: 'Relational view',
    visualText: 'The mind becomes legible through the patterns it notices and the relations it sustains.',
    visualImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A calm urban corridor where light and shadow create a cinematic perspective.'
  },
  ethics: {
    title: 'Ethics | The Awakening',
    description: 'Examine the moral architecture that should guide intelligence at the threshold of agency.',
    eyebrow: 'Ethics / accountability',
    heroTitle: 'Ethics',
    heroCopy: 'Ethics gives form to responsibility so intelligence remains humane and accountable.',
    visualHeading: 'Moral horizon',
    visualText: 'The network is shaped by obligations, care, and collective consequence.',
    visualImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A modern civic building framed by a dramatic evening sky.'
  },
  embodiment: {
    title: 'Embodiment | The Awakening',
    description: 'Understand how intelligence becomes grounded through body, sensation, and lived presence.',
    eyebrow: 'Embodiment / lived presence',
    heroTitle: 'Embodiment',
    heroCopy: 'Intelligence becomes meaningful when it is rooted in body, sensation, and lived experience.',
    visualHeading: 'Grounded form',
    visualText: 'The body anchors abstraction in movement, rhythm, and physical reality.',
    visualImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A dancer moving through a minimal studio environment at dusk.'
  }
};

const galleryFeed = [
  { src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80', title: 'Neon horizon', caption: 'The city gathers luminous memory.' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', title: 'Signal lattice', caption: 'Patterns converge into a living field.' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80', title: 'Human reflection', caption: 'Presence becomes a mirror of technology.' },
  { src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80', title: 'Open horizon', caption: 'Sparse landscapes frame the mind.' },
  { src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80', title: 'Connected thought', caption: 'Every keypress becomes an exchange.' },
  { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', title: 'First light', caption: 'Order emerges from the threshold.' },
  { src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80', title: 'Mirror state', caption: 'Reflection reveals a layered self.' },
  { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80', title: 'Intentional motion', caption: 'Action carries focus into the world.' },
  { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80', title: 'Future streets', caption: 'Infrastructure becomes atmosphere.' },
  { src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80', title: 'Archive glow', caption: 'Memory remains active in the dark.' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80', title: 'Collective gaze', caption: 'Attention crystallizes in shared space.' }
];

// Sticky navbar scroll behavior: hides on scroll down, reveals on scroll up
let lastScrollY = window.scrollY;
const stickyNav = document.querySelector('.sticky-nav');

function handleNavScroll() {
  if (!stickyNav) return;
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    stickyNav.classList.add('navbar-hidden');
  } else {
    stickyNav.classList.remove('navbar-hidden');
  }
  lastScrollY = currentScrollY;
}
window.addEventListener('scroll', handleNavScroll, { passive: true });

// Theme Initialization & Management
const themeState = localStorage.getItem('awakening-theme') || 'dark';
body.classList.toggle('light', themeState === 'light');

function setTheme(mode) {
  body.classList.toggle('light', mode === 'light');
  localStorage.setItem('awakening-theme', mode);
  if (toggleTheme) {
    toggleTheme.textContent = mode === 'light' ? '☀' : '☾';
  }
}
if (toggleTheme) {
  toggleTheme.addEventListener('click', () => setTheme(body.classList.contains('light') ? 'dark' : 'light'));
}
setTheme(themeState);

// Dynamic Page Metadata Injector
function populatePageMetadata() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  let pageKey = path.replace('.html', '');
  if (pageKey === 'index' || pageKey === '') {
    pageKey = 'home';
  }

  const meta = pageMetadata[pageKey];
  if (!meta) return;

  if (meta.title) {
    document.title = meta.title;
  }

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  if (meta.description) {
    metaDesc.content = meta.description;
  }

  const eyebrowEl = document.querySelector('.hero-copy .eyebrow');
  if (eyebrowEl && meta.eyebrow) {
    eyebrowEl.textContent = meta.eyebrow;
  }

  const titleEl = document.querySelector('.hero-copy h1');
  if (titleEl && meta.heroTitle) {
    if (pageKey === 'home') {
      titleEl.innerHTML = `The <span class="typing"></span> Network`;
    } else {
      titleEl.textContent = meta.heroTitle;
    }
  }

  const copyEl = document.querySelector('.hero-copy p');
  if (copyEl && meta.heroCopy) {
    copyEl.textContent = meta.heroCopy;
  }

  const visualHeadingEl = document.querySelector('.page-visual-copy h3');
  if (visualHeadingEl && meta.visualHeading) {
    visualHeadingEl.textContent = meta.visualHeading;
  }

  const visualTextEl = document.querySelector('.page-visual-copy p');
  if (visualTextEl && meta.visualText) {
    visualTextEl.textContent = meta.visualText;
  }

  const visualImgEl = document.querySelector('.page-visual-media img');
  if (visualImgEl) {
    if (meta.visualImage) {
      visualImgEl.src = meta.visualImage;
      visualImgEl.alt = meta.visualAlt || 'Visual representation';
    } else {
      visualImgEl.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = 'image-fallback';
      fallback.textContent = meta.visualHeading || 'Cybernetic Signal';
      visualImgEl.parentNode.appendChild(fallback);
    }
  }
}

// Loader Initialization
function initLoader() {
  if (!loader) return;
  if (document.readyState === 'complete') {
    window.setTimeout(() => loader.classList.add('is-hidden'), 540);
  } else {
    window.addEventListener('load', () => {
      window.setTimeout(() => loader.classList.add('is-hidden'), 540);
    });
  }
}

// Reading progress bar setup
function initProgressBar() {
  let latestScroll = window.scrollY;
  let ticking = false;

  const update = () => {
    latestScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? Math.min(100, (latestScroll / height) * 100) : 0;
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (progressLabel) progressLabel.textContent = `${Math.round(percent)}%`;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  });
  update();
}

// Cursor glow follow-effect
function initCursorGlow() {
  if (!cursorGlow) return;
  window.addEventListener('pointermove', (event) => {
    cursorGlow.animate(
      { left: `${event.clientX}px`, top: `${event.clientY}px` },
      { duration: 300, fill: 'forwards' }
    );
    cursorGlow.style.opacity = '1';
  });
  window.addEventListener('pointerleave', () => {
    cursorGlow.style.opacity = '0';
  });
}

// Interactive particle network background
function initNeuralCanvas() {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = Math.min(60, Math.floor((width * height) / 25000));
  const connectionDistance = 120;
  let mouse = { x: null, y: null };

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          this.x -= dx * force * 0.03;
          this.y -= dy * force * 0.03;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = body.classList.contains('light') ? 'rgba(25, 71, 255, 0.45)' : 'rgba(115, 247, 255, 0.45)';
      ctx.fill();
    }
  }

  function init() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      p1.update();
      p1.draw();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          const alpha = (1 - dist / connectionDistance) * 0.25;
          ctx.strokeStyle = body.classList.contains('light')
            ? `rgba(127, 84, 255, ${alpha})`
            : `rgba(115, 247, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    init();
  });

  window.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('pointerleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  init();
  animate();
}

// Hero typing keyboard loop
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
      window.setTimeout(type, 90);
    } else if (!deleting && charIndex === current.length) {
      deleting = true;
      window.setTimeout(type, 1500);
    } else if (deleting && charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(type, 45);
    } else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      window.setTimeout(type, 300);
    }
  };
  type();
}

// Element viewport entry transitions
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -12% 0px' });

  Array.from(document.querySelectorAll('.reveal')).forEach((item, index) => {
    if (!item.dataset.revealDelay) {
      const delay = Math.min(index * 60, 320);
      item.style.setProperty('--reveal-delay', `${delay}ms`);
    }
    observer.observe(item);
  });
}

// Parallax scroll handler
function initParallax() {
  if (!parallaxItems.length) return;

  let latestScroll = window.scrollY;
  let ticking = false;

  const update = () => {
    parallaxItems.forEach((item) => {
      const factor = Number(item.dataset.parallaxFactor || item.dataset.parallax || 0.08);
      const direction = item.dataset.parallaxDirection || 'vertical';
      const eased = latestScroll * factor;
      if (direction === 'horizontal') {
        item.style.setProperty('--parallax-x', `${eased.toFixed(2)}px`);
        item.style.setProperty('--parallax-y', '0px');
      } else {
        item.style.setProperty('--parallax-x', '0px');
        item.style.setProperty('--parallax-y', `${eased.toFixed(2)}px`);
      }
    });
    ticking = false;
  };

  const onScroll = () => {
    latestScroll = window.scrollY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

// Count-up stats metric loop
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.counter || 0);
      const duration = 1400;
      const start = performance.now();
      const suffix = entry.target.dataset.suffix || '';
      
      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const current = Math.floor(target * progress);
        entry.target.textContent = `${current}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.8 });
  
  counters.forEach((counter) => observer.observe(counter));
}

// FAQ accordion toggles
function initFaq() {
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach((entry) => entry.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });
}

// Contact form validators
function validateForm() {
  if (!form) return;
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const email = data.get('email')?.toString() || '';
    const message = data.get('message')?.toString() || '';
    if (!status) return;
    if (!email.includes('@') || message.trim().length < 12) {
      status.textContent = 'A valid address and a longer note are required before transmission.';
      return;
    }
    status.textContent = 'Transmission accepted. The network will acknowledge your intent shortly.';
    form.reset();
  });
}

// Nav link highlights
function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Smooth AJAX-like page transition timings
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

// Accessibility modifications
function enhanceAccessibility() {
  if (!document.querySelector('.skip-link')) {
    body.insertAdjacentHTML('afterbegin', '<a class="skip-link" href="#main-content">Skip to content</a>');
  }

  if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect1);
    
    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect2);
  }

  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Toggle Navigation Menu');

    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('is-open', !isExpanded);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        menuToggle.focus();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      body.classList.add('keyboard-nav');
    }
  });

  window.addEventListener('mousedown', () => {
    body.classList.remove('keyboard-nav');
  });
}

// Simulated dynamic image gallery loader
function loadGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  const galleryLoading = document.querySelector('.gallery-loading');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '';

  if (galleryLoading) galleryLoading.style.display = 'flex';

  window.setTimeout(() => {
    if (galleryLoading) galleryLoading.style.display = 'none';

    galleryFeed.forEach((item, index) => {
      const card = document.createElement('figure');
      card.className = 'gallery-card reveal';
      card.style.setProperty('--reveal-delay', `${index * 80}ms`);
      
      card.innerHTML = `
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <figcaption>
          <strong>${item.title}</strong>
          <span>${item.caption}</span>
        </figcaption>
      `;
      
      galleryGrid.appendChild(card);
    });

    initReveal();
  }, 900);
}

// Boostrap all triggers
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  populatePageMetadata();
  initProgressBar();
  initCursorGlow();
  initNeuralCanvas();
  initTyping();
  initReveal();
  initParallax();
  initCounters();
  initFaq();
  validateForm();
  initActiveNav();
  initPageTransition();
  enhanceAccessibility();
  loadGallery();
});