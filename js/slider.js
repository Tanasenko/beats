const buttonLeft = document.querySelector('.assortment__control--left');
const buttonRight = document.querySelector('.assortment__control--right');
const ItemsList = document.querySelector('.assortment__list');
const items = document.querySelectorAll('.assortment__item');

let step = items[0].getBoundingClientRect().width;
const minRight = 0;
let maxRight = (items.length - 1) * step;

let currentRight = 0;
let currentStep = 0;

ItemsList.style.right = currentRight;

function updateSlider() {
    step = items[0].getBoundingClientRect().width;
    maxRight = (items.length - 1) * step;
    currentRight = step * currentStep;
    ItemsList.style.right = `${currentRight}px`;
}

window.addEventListener('resize', updateSlider);

buttonRight.addEventListener('click', e =>{

    if(currentRight == maxRight) {
        currentRight = minRight;
        ItemsList.style.right = `${currentRight}px`;
        return;
    }

    if(currentRight < maxRight) {
        currentRight += step;
        ItemsList.style.right = `${currentRight}px`;
        currentStep++;
    }
    
})

buttonLeft.addEventListener('click', e =>{

    if(currentRight == minRight) {
        currentRight = maxRight;
        ItemsList.style.right = `${currentRight}px`;
        return;
    }

    if(currentRight > minRight) {
        currentRight -= step;
        ItemsList.style.right = `${currentRight}px`;
        currentStep--;
    }
    
})