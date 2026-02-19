function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function openModal(src) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-img').src = src;
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

let slideIndex = 0;

function changeSlide(n) {
    let slides = document.querySelectorAll('#sliderContainer img');
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {

    let galleryContainer = document.getElementById("galleryContainer");
    for (let i = 1; i <= 9; i++) {
        let img = document.createElement("img");
        img.src = `assets/images/gallery/placeholder-gallery${String(i).padStart(3, '0')}.webp`;
        img.onclick = function () { openModal(this.src) };
        galleryContainer.appendChild(img);
    }

    let sliderContainer = document.getElementById("sliderContainer");
    for (let i = 1; i <= 8; i++) {
        let img = document.createElement("img");
        img.src = `assets/images/gallery-solaris/condominio${String(i).padStart(3, '0')}.jpg`;
        if (i === 1) img.classList.add("active");
        sliderContainer.appendChild(img);
    }

});
