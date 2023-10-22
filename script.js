// Add a class to the header when the user scrolls down and remove it when scrolling to the top
window.onscroll = function() {
  const header = document.querySelector('.sticky-header');
  if (window.pageYOffset > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};