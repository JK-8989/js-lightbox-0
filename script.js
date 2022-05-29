const lightboxBg = document.createElement('div');
lightboxBg.id = 'lightbox-bg';
document.body.appendChild(lightboxBg);

const images = document.querySelectorAll('img');
images.forEach(images => {
  images.addEventListener('click', ()=>{
    lightboxBg.classList.add('active');
  })
})