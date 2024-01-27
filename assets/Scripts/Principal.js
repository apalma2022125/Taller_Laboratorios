const fulImgBox = document.getElementById("fulImgBox"),
    fulImg = document.getElementById("fulImg");



function openFulImg(reference) {
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}

const imgDescription = fulImgBox.querySelector(".img-description");
imgDescription.innerHTML = description;


function closeImg() {

    fulImgBox.style.display = "none";
}



function changeBg(bg, title) {
    const contents = document.querySelectorAll('.content');
    
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });

    // Forzar una recarga del carrusel
    const carouselInstance = M.Carousel.getInstance(document.querySelector('.carousel'));
    const currentSlideIndex = Array.from(carouselInstance.$el.children).indexOf(carouselInstance.$el.querySelector('.carousel-item.active'));
    
    // Desactivar el carrusel para evitar cambios automáticos durante la actualización
    carouselInstance.pause();

    // Cambiar el fondo a la imagen seleccionada
    carouselInstance.set(currentSlideIndex, () => {
        return `<img src="./assets/img/${bg}" alt="">`;
    });

    // Reiniciar el carrusel y mostrar la nueva imagen
    carouselInstance.start();
}
