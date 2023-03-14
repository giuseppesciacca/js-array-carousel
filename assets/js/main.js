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
const currentImg = allImgsEl[activeClass];

nextBtn.addEventListener('click', function () {
    console.log(activeClass);
    console.log(allImgsEl);
    console.log(currentImg);

    currentImg.classList.remove('active');
    activeClass++;

    const nextImg = allImgsEl[activeClass];

    nextImg.classList.add('active');
});


prevBtn.addEventListener('click', function () {
    activeClass--;
    console.log(activeClass);

});