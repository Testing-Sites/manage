const navigation = document.querySelector('.main-nav');
const hamburger = document.querySelector('.toggle-btn');
const mobileNavigation = document.querySelector('.toggled-nav-links');

hamburger.addEventListener('click', () => {
  if (mobileNavigation.style.display == 'block') {
    mobileNavigation.style.display = 'none';
  } else {
    mobileNavigation.style.display = 'block';
  }
});

// navigation.addEventListener('click', (event) => {
//   if(event.target.className == 'toggle-btn') {
//     let button = event.target;
//     let nav = button.parentNode;
//   }
// })
