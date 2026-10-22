const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', scrollY > 30);
onScroll();
addEventListener('scroll', onScroll, { passive: true });

// mobile menu
const burger = document.querySelector('.burger');
burger?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  burger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav ul a').forEach(a =>
  a.addEventListener('click', () => document.body.classList.remove('menu-open')));

// reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// hero parallax
const heroBg = document.querySelector('.hero-bg');
if (heroBg && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addEventListener('scroll', () => {
    if (scrollY < innerHeight * 1.2) heroBg.style.transform = `translateY(${scrollY * .1}px) scale(1.04)`;
  }, { passive: true });
}
