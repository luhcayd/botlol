// ============================================================
//  Site interactions: nav state, mobile menu, scroll reveal,
//  hover-to-play portfolio videos
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
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// Portfolio videos: play on hover / tap, pause otherwise (saves data on mobile)
document.querySelectorAll('.work-media video').forEach((video) => {
  const card = video.closest('.work');
  const play = () => { video.play().catch(() => {}); };
  const stop = () => { video.pause(); };
  card.addEventListener('mouseenter', play);
  card.addEventListener('mouseleave', stop);
  // Touch devices: play the first time it scrolls into view
  if ('IntersectionObserver' in window) {
    const vio = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? play() : stop())),
      { threshold: 0.6 }
    );
    vio.observe(video);
  }
});
