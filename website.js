document.addEventListener("DOMContentLoaded", function () {
  highlightActivePage();
});

function highlightActivePage() {
  var currentPage = document.body.id;
  var currentLink = document.querySelector(`.flex-container a[href='${currentPage}.html']`);
  if (currentLink) {
    currentLink.classList.add("active");
  }
}

function openGallery(category) {
  let galleryPageURL;

  switch (category) {
    case 'goKart':
      galleryPageURL = 'https://meltymate.github.io/GallerygoKart.html';
      break;
    case 'Sim':
      galleryPageURL = 'https://meltymate.github.io/GallerySim.html';
      
    case 'Motorbike':
      galleryPageURL = 'https://meltymate.github.io/GalleryMotorbike.html';
      break;
    
    case 'RC':
      galleryPageURL = 'https://meltymate.github.io/GalleryRC.html';
      break;
  }

  if (galleryPageURL) {
    window.location.href = galleryPageURL;
  }
}

function toggleImageSize(img) {
  img.classList.toggle('enlarged');
}
