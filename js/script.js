'use strict';
const copyButton = document.querySelector('#copy');
const status = document.querySelector('#copy-status');
const fallback = document.querySelector('#copy-fallback');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('662 595 332');
    fallback.hidden = true;
    status.textContent = 'Teléfono copiado: 662 595 332';
  } catch {
    fallback.hidden = false;
    const input = document.querySelector('#phone-copy');
    input.focus();
    input.select();
    status.textContent = 'Puedes copiar el teléfono desde el campo seleccionado.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.service-track, .street-sign, .fabric').forEach(element => observer.observe(element));
}
