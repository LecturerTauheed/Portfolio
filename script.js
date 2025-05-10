document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const reveal = () => {
    sections.forEach(section => {
      const secTop = section.getBoundingClientRect().top;
      if (secTop < window.innerHeight - 50) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.transition = 'all 0.6s ease';
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal(); // call once to show sections in view
});

///////////////////////////
document.getElementById('hamburger').addEventListener('click', function () {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});
