/* Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. */

const imgsList = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];

const imagesEl = document.querySelector('.images');
const prevBtn = document.querySelector('.btn_up');
const nextBtn = document.querySelector('.btn_down');

let activeClass = 0;

for (let i = 0; i < imgsList.length; i++) {
    const element = imgsList[i];
    console.log(element);

    //inserisco nell'html
    imagesEl.innerHTML += `<img class="img-fluid ${i === activeClass ? 'active' : ''}" src="./assets/img/${element} " alt="">`
};

const allImgsEl = document.querySelectorAll('img');

//bottone vai avanti
nextBtn.addEventListener('click', function () {
    const currentImg = allImgsEl[activeClass];
    console.log(activeClass);
    currentImg.classList.remove('active');

    activeClass++;
    if (activeClass == imgsList.length) {
        activeClass = 0;
    }

    const nextImg = allImgsEl[activeClass];
    nextImg.classList.add('active');
});

//bottone torna indietro
prevBtn.addEventListener('click', function () {
    const currentImg = allImgsEl[activeClass];
    console.log(activeClass);
    currentImg.classList.remove('active');

    activeClass--;
    if (activeClass < 0) {
        activeClass = (imgsList.length - 1);
    }

    const nextImg = allImgsEl[activeClass];
    nextImg.classList.add('active');
});