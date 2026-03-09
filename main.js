// Loading
window.addEventListener('load', () => {
  const ls = document.querySelector('.loading-screen');
  if (ls) setTimeout(() => ls.classList.add('hidden'), 400);
});

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

// Fade in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Video autoplay on scroll
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    const video = e.target.querySelector('video');
    if (!video) return;
    if (e.isIntersecting) { video.play().catch(() => {}); }
    else { video.pause(); }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.product-video').forEach(el => videoObserver.observe(el));
