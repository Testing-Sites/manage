const hamburger = document.querySelector('.toggle-btn');
const mobileNavigation = document.querySelector('.toggled-nav-links');

const slideShow = document.querySelector('.testimonials');
const footerLogo = document.querySelector('#footerLogo');


hamburger.addEventListener('click', () => {
  if (mobileNavigation.style.display == 'block') {
    mobileNavigation.style.display = 'none';
  } else {
    mobileNavigation.style.display = 'block';
  }
});
