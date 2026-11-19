const contactCards = document.querySelectorAll('.contact-card');
const contactItems = document.querySelectorAll('.contact-text');

contactCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const box = card.getBoundingClientRect();
    const x = event.clientX - box.left;
    const y = event.clientY - box.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

contactItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.remove('contact-clicked');
    void item.offsetWidth;
    item.classList.add('contact-clicked');
  });
});
