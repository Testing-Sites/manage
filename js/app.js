const hamburger = document.querySelector('.toggle-btn');
const mobileNavigation = document.querySelector('.toggled-nav-links');

const slideShow = document.querySelector('.testimonials');

slideButton.addEventListener('mouseover', (e) => {
  slideShow.scrollLeft += 10;
});

hamburger.addEventListener('click', () => {
  if (mobileNavigation.style.display == 'block') {
    mobileNavigation.style.display = 'none';
  } else {
    mobileNavigation.style.display = 'block';
  }
});
