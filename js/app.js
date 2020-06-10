const hamburger = document.querySelector('.toggle-btn');
const mobileNavigation = document.querySelector('.toggled-nav-links');

const slideShow = document.querySelector('.slide-show');
let lwidth = window.screen.width;

// mobile navigation
hamburger.addEventListener('click', () => {
  if (mobileNavigation.style.display == 'block') {
    mobileNavigation.style.display = 'none';
  } else {
    mobileNavigation.style.display = 'block';
  }
});


slideShow.addEventListener('click', (event) => {
  if(event.target.id == "fButton") {
    let fButton = event.target;
    let slideShow = fButton.nextElementSibling;
    slideShow.scrollLeft += lwidth;
  }
  if(event.target.id == "bButton") {
    let bButton = event.target;
    let slideShow = bButton.nextElementSibling.nextElementSibling;
    slideShow.scrollLeft -= lwidth;
  }
});
