function openFullPhoto(list) {
    const fullPhoto = document.querySelector('.full-photo');

    list.addEventListener('click', (e) => {
        if (e.target.matches('img')) {
            fullPhoto.querySelector('img').src = e.target.src;
            fullPhoto.classList.add('full-photo_active');
        }
    });

    fullPhoto.addEventListener('click', (e) => {
        if (e.target.matches('.full-photo') || e.target.matches('.full-photo__close')) {
            fullPhoto.classList.remove('full-photo_active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && fullPhoto.classList.contains('full-photo_active')) {
            fullPhoto.classList.remove('full-photo_active');
        }
    });
}

export default openFullPhoto;