const imagenes = document.querySelector('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');

const hamburguer1 = document.querySelector('.hamburguer');

// console.log(imagenes, imagenesLight, contenedorLight);

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'))
    });
});

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('.show');
        imagenesLight.classList.toogle('.showImage');
        hamburguer1.style.opacity = '1';
    }
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('.show');
    imagenesLight.classList.toogle('.showImage');
    hamburguer1.style.opacity = '0';
}