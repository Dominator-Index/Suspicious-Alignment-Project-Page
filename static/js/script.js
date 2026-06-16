// ---- Copy BibTeX ----
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const target = document.getElementById(btn.dataset.target);
    if (!target) return;
    try { await navigator.clipboard.writeText(target.innerText.trim()); }
    catch (e) {
      const r = document.createRange(); r.selectNode(target);
      window.getSelection().removeAllRanges(); window.getSelection().addRange(r);
      document.execCommand('copy');
    }
    const old = btn.textContent; btn.textContent = 'Copied!'; btn.classList.add('copied');
    setTimeout(() => { btn.textContent = old; btn.classList.remove('copied'); }, 1800);
  });
});
// ---- Reveal on scroll ----
(function () {
  const targets = document.querySelectorAll('.section, .teaser figure');
  targets.forEach((t) => t.classList.add('reveal'));
  if (!('IntersectionObserver' in window)) { targets.forEach((t) => t.classList.add('in')); return; }
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.06 });
  targets.forEach((t) => io.observe(t));
})();
