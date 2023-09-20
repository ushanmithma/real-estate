

// Control mobile navigation
var overlay = document.querySelector('#overlay');

let closeIcon = document.querySelector('#closeIcon');
let menuIcon = document.querySelector('#menuIcon');
let navbarNav = document.querySelector('#navbarNav');

menuIcon.addEventListener('click', function(event){
  event.preventDefault();
  if (!navbarNav.classList.contains('active') && !overlay.classList.contains('show')) {
    navbarNav.classList.add('active');
    overlay.classList.add('show');
  }
});

closeIcon.addEventListener('click', function(event){
  event.preventDefault();
  if (navbarNav.classList.contains('active') && overlay.classList.contains('show')) {
    navbarNav.classList.remove('active');
    overlay.classList.remove('show');
  }
});

overlay.addEventListener('click', function(event){
  event.preventDefault();
  if (navbarNav.classList.contains('active')) {
    navbarNav.classList.remove('active');
    this.classList.remove('show');
  }
});

// Create accordion
let dropdownBtn = document.querySelectorAll('.dropdown-link');

function openCloseDropdown(dropdown) {
  if (dropdown.style.maxHeight) {
    dropdown.style.maxHeight = null;
  } else {
    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
  }
}

function checkIfNavbarDropdownisOpened() {
  var navbarDropdown = document.querySelectorAll('.navbar-dropdown');
  var isOpen = false;
  navbarDropdown.forEach((dropdown) => {
    const maxHeight = dropdown.style.maxHeight;
    if (maxHeight != '') {
      isOpen = true;
    }
  });
  return isOpen;
}

function closeAllDropdowns() {
  var navbarDropdown = document.querySelectorAll('.navbar-dropdown');
  navbarDropdown.forEach((dropdown) => {
    const maxHeight = dropdown.style.maxHeight;
    if (maxHeight != '') {
      dropdown.style.maxHeight = null;
    }
  });
}

dropdownBtn.forEach((link) => {
  link.addEventListener('click', function(event){
    event.preventDefault();
    var dropdownMenu = this.nextElementSibling;
		openCloseDropdown(dropdownMenu);
  });
});

// Close accordion click anywhere outside the accordion
document.addEventListener('click', function(event) {
  event.preventDefault();
  if (!event.target.classList.contains('.dropdown-link') && event.target.nextElementSibling != document.querySelector('.navbar-dropdown')) {
    if (checkIfNavbarDropdownisOpened()) {
      closeAllDropdowns();
    }
  }
});

// Control image lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.lightbox-image');

images.forEach(image => {
  image.addEventListener('click', event => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    img.classList.add('container');
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

// Close lightbox when click outside the image
lightbox.addEventListener('click', event => {
  if (event.target !== event.currentTarget) return
  lightbox.classList.remove('active');
});
