// Contact form alert
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! We will get back to you soon.');
  this.reset();
});

// Book Now Popup
const bookPopup = document.getElementById('bookPopup');
const bookBtn = document.getElementById('bookBtn');
const heroBookBtn = document.getElementById('heroBookBtn');
const closePopup = document.getElementById('closePopup');

bookBtn.addEventListener('click', () => bookPopup.style.display = 'flex');
heroBookBtn.addEventListener('click', () => bookPopup.style.display = 'flex');
closePopup.addEventListener('click', () => bookPopup.style.display = 'none');
window.addEventListener('click', (e) => { if(e.target === bookPopup) bookPopup.style.display='none'; });

// Book form submission
document.getElementById('bookForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Your booking has been received! We will contact you shortly.');
  this.reset();
  bookPopup.style.display='none';
});

// Scroll animations
const scrollElements = document.querySelectorAll('.scroll-animate');
const elementInView = (el, offset=0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop <= (window.innerHeight - offset));
};
const displayScrollElement = (element) => element.classList.add('visible');
const handleScrollAnimation = () => {
  scrollElements.forEach(el => { if(elementInView(el, 100)) displayScrollElement(el); });
};
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);