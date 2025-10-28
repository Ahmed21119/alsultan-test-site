document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      mobileNav.classList.toggle('hidden');
    });
  }

  // Accordion per WAI-ARIA pattern
  document.querySelectorAll('[data-accordion]').forEach(acc => {
    acc.querySelectorAll('.accordion-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (panel) panel.hidden = expanded;
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  });

  // معالجة نموذج الاتصال: عند الإرسال يتم عرض رسالة نجاح بدل التنبيه وإعادة تعيين الحقول.
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msgEl = document.getElementById('formMessage');
      if (msgEl) {
        msgEl.textContent = 'تم إرسال النموذج بنجاح! سنعاود التواصل معك قريباً.';
        msgEl.classList.remove('hidden');
      }
      // إعادة تعيين القيم بعد الإرسال
      contactForm.reset();
    });
  }
});
