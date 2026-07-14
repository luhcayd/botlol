// ============================================================
//  Site interactions: nav state, mobile menu, scroll reveal
// ============================================================

// Sticky nav background on scroll
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
// Close menu when a link is tapped
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// Portfolio play buttons: wire up when you add real video links.
// Give a card's <button class="play"> a data-video="https://..." attribute
// and it will open the video in a new tab.
document.querySelectorAll('.play').forEach((btn) => {
  btn.addEventListener('click', () => {
    const url = btn.getAttribute('data-video');
    if (url) window.open(url, '_blank', 'noopener');
  });
});
