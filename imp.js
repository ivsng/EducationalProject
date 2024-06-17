
~function () {
    var video = document.querySelector('video')
  
    function handleResize() {
      var w0 = 320, h0 = 240, r0 = w0 / h0
      var w = window.innerWidth, h = window.innerHeight, r = w / h
      
      video.style.transform = r0 < r ? 'scaleX(' + r / r0 + ')' : 'scaleY(' + r0 / r + ')'
    }
  
    handleResize()
    window.addEventListener('resize', handleResize)
  }()
$(document).foundation();
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});


const concertTitles = document.querySelectorAll('.concert-title');
const photoGalleries = document.querySelectorAll('.photo-gallery');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content img');
const closeButton = document.querySelector('.close-button');

concertTitles.forEach((title, index) => {
  title.addEventListener('click', () => {
    photoGalleries[index].style.display = photoGalleries[index].style.display === 'none' ? 'flex' : 'none';
  });
});

photoGalleries.forEach((gallery) => {
  const photos = gallery.querySelectorAll('img');
  photos.forEach((photo) => {
    photo.addEventListener('click', () => {
      modalImage.src = photo.src;
      modal.style.display = 'block';
    });
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});