/* ============================================
   EAT HEAT - THE BAMBOO RESTAURANT
   Main JavaScript - Interactivity
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============ HEADER SCROLL EFFECT ============
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 80);
    });
  }

  // ============ MOBILE NAV ============
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  function closeMobileNav() {
    hamburger?.classList.remove('active');
    mobileNav?.classList.remove('active');
    mobileOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    mobileNav?.classList.toggle('active', isActive);
    mobileOverlay?.classList.toggle('active', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
  });

  mobileOverlay?.addEventListener('click', closeMobileNav);
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // ============ HERO SLIDER ============
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-nav-dot');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    heroSlides.forEach(s => s.classList.remove('active'));
    heroDots.forEach(d => d.classList.remove('active'));
    currentSlide = index;
    if (heroSlides[currentSlide]) heroSlides[currentSlide].classList.add('active');
    if (heroDots[currentSlide]) heroDots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }

  if (heroSlides.length > 0) {
    slideInterval = setInterval(nextSlide, 6000);
    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        goToSlide(i);
        slideInterval = setInterval(nextSlide, 6000);
      });
    });
  }

  // ============ SPECIALTIES SLIDER ============
  const specialtiesTrack = document.querySelector('.specialties-track');
  const specialtyCards = document.querySelectorAll('.specialty-card');
  let specialtyIndex = 0;

  function getSpecialtiesPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  }

  function updateSpecialtiesSlider() {
    if (!specialtiesTrack || specialtyCards.length === 0) return;
    const perView = getSpecialtiesPerView();
    const cardWidth = specialtyCards[0].offsetWidth + 20;
    const maxIndex = Math.max(0, specialtyCards.length - perView);
    specialtyIndex = Math.min(specialtyIndex, maxIndex);
    specialtiesTrack.style.transform = `translateX(-${specialtyIndex * cardWidth}px)`;
  }

  document.querySelector('.slider-prev')?.addEventListener('click', () => {
    if (specialtyIndex > 0) specialtyIndex--;
    updateSpecialtiesSlider();
  });

  document.querySelector('.slider-next')?.addEventListener('click', () => {
    const perView = getSpecialtiesPerView();
    const maxIndex = Math.max(0, specialtyCards.length - perView);
    if (specialtyIndex < maxIndex) specialtyIndex++;
    updateSpecialtiesSlider();
  });

  window.addEventListener('resize', updateSpecialtiesSlider);

  // ============ TESTIMONIALS CAROUSEL ============
  const testimonialTrack = document.querySelector('.testimonial-track');
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  let testimonialIndex = 0;
  let testimonialInterval;

  function goToTestimonial(index) {
    testimonialIndex = index;
    if (testimonialTrack) {
      testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
    }
    testimonialDots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  }

  function nextTestimonial() {
    goToTestimonial((testimonialIndex + 1) % testimonialItems.length);
  }

  if (testimonialItems.length > 0) {
    testimonialInterval = setInterval(nextTestimonial, 5000);
    testimonialDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(testimonialInterval);
        goToTestimonial(i);
        testimonialInterval = setInterval(nextTestimonial, 5000);
      });
    });
  }

  // ============ MENU TABS ============
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuCategories = document.querySelectorAll('.menu-category');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.category;
      menuTabs.forEach(t => t.classList.remove('active'));
      menuCategories.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });

  // ============ GALLERY FILTERS ============
  const galleryFilters = document.querySelectorAll('.gallery-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.filter;
      galleryFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'inline-block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ============ LIGHTBOX ============
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  lightboxClose?.addEventListener('click', () => {
    lightbox?.classList.remove('active');
    document.body.style.overflow = '';
  });

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ============ SCROLL ANIMATIONS ============
  const animateElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  animateElements.forEach(el => observer.observe(el));

  // ============ COUNTER ANIMATION ============
  const counters = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const suffix = counter.dataset.suffix || '';
      const duration = 2000;
      const start = 0;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(start + (target - start) * eased) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  // ============ FORM HANDLING ============
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = form.querySelector('.form-success') || form.parentElement.querySelector('.form-success');
      if (successMsg) {
        successMsg.style.display = 'block';
        form.reset();
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 5000);
      }
    });
  });

  // ============ ADD TO CART BUTTONS ============
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const originalText = btn.textContent;
      btn.textContent = '✓ Added';
      btn.style.background = 'var(--bamboo-green)';
      btn.style.borderColor = 'var(--bamboo-green)';
      btn.style.color = 'white';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
      }, 2000);
    });
  });

  // ============ SMOOTH SCROLL ============
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = header?.offsetHeight || 80;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ============ PARALLAX EFFECT ============
  const parallaxSections = document.querySelectorAll('.parallax-section');
  window.addEventListener('scroll', () => {
    parallaxSections.forEach(section => {
      const speed = 0.3;
      const offset = window.scrollY * speed;
      section.style.backgroundPositionY = `${offset}px`;
    });
  });

  // ============ ACTIVE NAV LINK ============
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

});
