const whatsAppBase = 'https://wa.me/919987843579?text=';

function openWhatsApp(message) {
  window.open(`${whatsAppBase}${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menu?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('aria-label', 'Open menu');
}));

document.querySelector('#readiness-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const details = new FormData(event.currentTarget);
  openWhatsApp(`Hello Estantra Realty, I would like the checklist for:\n\nService: ${details.get('service')}\nLocation: ${details.get('location') || 'Not provided'}`);
});

document.querySelector('#lead-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const details = new FormData(form);
  const message = `Hello Estantra Realty, I would like a callback.\n\nName: ${details.get('name')}\nMobile: ${details.get('phone')}\nService: ${details.get('service')}\nLocation: ${details.get('location') || 'Not provided'}`;
  openWhatsApp(message);
  const confirmation = form.querySelector('.success-message');
  confirmation.textContent = 'Your WhatsApp enquiry is opening now.';
  confirmation.hidden = false;
  form.reset();
});

document.querySelector('#newsletter-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const email = new FormData(event.currentTarget).get('email');
  const subject = encodeURIComponent('Newsletter subscription - Estantra Property Paperwork Brief');
  const body = encodeURIComponent(`Hello Estantra Realty,\n\nPlease subscribe this email address to the Estantra Property Paperwork Brief: ${email}\n\nI understand that I can unsubscribe at any time.`);
  window.location.href = `mailto:estantrarealty@gmail.com?subject=${subject}&body=${body}`;
});

document.querySelectorAll('#year').forEach(year => {
  year.textContent = String(new Date().getFullYear());
});

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
const useCustomCursor = window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (useCustomCursor && dot && ring) {
  window.addEventListener('mousemove', event => {
    dot.style.opacity = ring.style.opacity = '1';
    dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    ring.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });

  document.querySelectorAll('a, button, summary, input, select').forEach(item => {
    item.addEventListener('mouseenter', () => ring.classList.add('active'));
    item.addEventListener('mouseleave', () => ring.classList.remove('active'));
  });

  document.querySelectorAll('.magnetic').forEach(item => {
    item.addEventListener('mouseenter', () => ring.classList.add('magnetic-hover'));
    item.addEventListener('mouseleave', () => {
      ring.classList.remove('magnetic-hover');
      item.style.transform = '';
    });
    item.addEventListener('mousemove', event => {
      const box = item.getBoundingClientRect();
      item.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * 0.12}px, ${(event.clientY - box.top - box.height / 2) * 0.12}px)`;
    });
  });
}
