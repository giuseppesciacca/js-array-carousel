/* Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. */

const imgsList = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];

const imagesEl = document.querySelector('.images');
console.log(imagesEl);

for (let i = 0; i < imgsList.length; i++) {
    const element = imgsList[i];
    console.log(element);

    imagesEl.innerHTML += `<img class="img-fluid active" src="./assets/img/${element} " alt="">`


}