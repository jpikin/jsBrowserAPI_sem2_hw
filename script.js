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
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const points = document.querySelector('.points');
for (let i = 0; i < numberOfPoints; i++) {
    const point = document.createElement('div');
    point.classList.add('circle');
    point.setAttribute('index', i);
    pointsContainer.appendChild(point);
    addBorder();
}

const currentImg = document.querySelector('.image');
currentImg.src = imageContainer[index];



prevBtn.addEventListener('click', () =>{
    if (index > 0) {
        currentImg.src = imageContainer[--index];
    } else {
        index = numberOfPoints-1;
        currentImg.src = imageContainer[index];
    }
    addBorder();
});

nextBtn.addEventListener('click', () =>{
    if (index < numberOfPoints-1) {
        currentImg.src = imageContainer[++index];
    } else {
        index = 0;
        currentImg.src = imageContainer[index];
    }
    addBorder();
});

points.addEventListener('click', (e) =>{
    index = Number(e.target.getAttribute('index'))
    currentImg.src = imageContainer[index];
    addBorder();
    
});

function addBorder() {
    const pointsArray = Array.from(points.children);
    pointsArray.forEach(point =>{

        if (index === Number(point.getAttribute('index'))) {
                point.classList.add('change-color');
        } else {
                    console.log('no')
                    point.classList.remove('change-color');
                }
    })  
}


