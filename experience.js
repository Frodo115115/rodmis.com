(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const frame = document.querySelector('.category-frame');
  const control = document.querySelector('.motion-control');
  const reveals = [...document.querySelectorAll('[data-reveal]')];
  let paused = false;
  let observer;
  function syncMotion() {
    root.classList.toggle('motion-paused', paused || preference.matches);
    if (!control) return;
    control.setAttribute('aria-pressed', String(paused));
    control.querySelector('span').textContent = root.lang === 'en'
      ? (paused ? 'Resume motion' : 'Pause motion')
      : (paused ? 'Wznów ruch' : 'Wstrzymaj ruch');
  }
  function syncCategoryLinks() {
    document.querySelectorAll('[data-category-mail]').forEach(card => {
      const title = card.querySelector('h3').textContent;
      const subject = (root.lang === 'en' ? 'Wholesale enquiry — ' : 'Zapytanie B2B — ') + title;
      card.href = 'mailto:rodmisagd@gmail.com?subject=' + encodeURIComponent(subject);
    });
  }
  if (!preference.matches && 'IntersectionObserver' in window) {
    try {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.target === frame) frame.classList.toggle('in-view', entry.isIntersecting);
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else {
            entry.target.classList.remove('is-revealed');
          }
        });
      }, { threshold: 0, rootMargin: '-12% 0px -16% 0px' });
      root.classList.add('motion-supported');
      reveals.forEach(element => { element.classList.add('reveal-pending'); observer.observe(element); });
    } catch {
      reveals.forEach(element => element.classList.remove('reveal-pending'));
      root.classList.remove('motion-supported');
    }
  }
  control?.addEventListener('click', () => { paused = !paused; syncMotion(); });
  preference.addEventListener('change', () => {
    if (preference.matches) {
      reveals.forEach(element => element.classList.add('is-revealed'));
    }
    syncMotion();
  });
  document.addEventListener('rodmis:languagechange', () => { syncMotion(); syncCategoryLinks(); });
  syncMotion();
  syncCategoryLinks();
  const header = document.querySelector('.header');
  let scheduled = false;
  const updateHeader = () => {
    if (window.scrollY > 65) header.classList.add('is-scrolled');
    else if (window.scrollY < 18) header.classList.remove('is-scrolled');
    scheduled = false;
  };
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateHeader); } }, { passive: true });
  updateHeader();
})();
