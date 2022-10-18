document.addEventListener('DOMContentLoaded', () => {
  addNavBarObserver();
  setCopyrightYear();
  addClickHandlers();
});

function addNavBarObserver() {
  const navBar = document.getElementById('nav-bar');
  const intro = document.getElementById('intro');

  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navBar.classList.remove('fixed');
      } else {
        navBar.classList.add('fixed');
      }
    });
  };

  const observer = new IntersectionObserver(onIntersectionChange);
  observer.observe(intro);
}

function setCopyrightYear() {
  const copyrightText = document.getElementById('copyright');
  const year = new Date().getFullYear();
  copyrightText.innerText = `© Clinton Owen ${year}`;
}

function addClickHandlers() {
  addScrollIntoViewClickHandler(
    document.getElementById('intro-button'),
    document.getElementById('about-anchor'),
  );
  addScrollIntoViewClickHandler(
    document.getElementById('nav-title-button'),
    document.getElementById('body-anchor'),
  );
  addScrollIntoViewClickHandler(
    document.getElementById('nav-about-button'),
    document.getElementById('about-anchor'),
  );
  addScrollIntoViewClickHandler(
    document.getElementById('nav-projects-button'),
    document.getElementById('projects-anchor'),
  );
  addScrollIntoViewClickHandler(
    document.getElementById('nav-contact-button'),
    document.getElementById('bottom-anchor'),
  );
  addScrollIntoViewClickHandler(
    document.getElementById('about-contact-button'),
    document.getElementById('bottom-anchor'),
  );
}

function addScrollIntoViewClickHandler(clickEl, targetEl) {
  clickEl.addEventListener('click', () => {
    targetEl.scrollIntoView({ behavior: 'smooth' });
  });
}
