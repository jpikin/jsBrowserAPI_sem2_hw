const imageContainer = [
    './img/img1.jpg',
    './img/img2.jpg',
    './img/img3.jpg',
    './img/img4.jpg',
    './img/img5.jpg' 
];
let index = 0;
const pointsContainer = document.querySelector('.points');
const numberOfPoints = imageContainer.length;
for (let i = 0; i < numberOfPoints; i++) {
    const point = document.createElement('div');
    point.classList.add('circle');
    point.setAttribute('index', i);
    pointsContainer.appendChild(point);
}

const currentImg = document.querySelector('.image');
currentImg.src = imageContainer[index];

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const points = document.querySelector('.points');

prevBtn.addEventListener('click', () =>{
    if (index > 0) {
        currentImg.src = imageContainer[--index];
    } else {
        index = numberOfPoints-1;
        currentImg.src = imageContainer[index];
    }
    
});

nextBtn.addEventListener('click', () =>{
    if (index < numberOfPoints-1) {
        currentImg.src = imageContainer[++index];
    } else {
        index = 0;
        currentImg.src = imageContainer[index];
    }
    
});

points.addEventListener('click', (e) =>{
    index = e.target.getAttribute('index')
    currentImg.src = imageContainer[index];
});


