const yoshi = document.querySelector('.yoshi');
const tubo = document.querySelector('.tubo');

const pulo = () => {
    yoshi.classList.add('pulo');

    setTimeout(() => {
        yoshi.classList.remove('pulo');
    }, 500)
}
document.addEventListener('keydown', pulo);

const loop = setInterval (() => {
        const tuboPosition = tubo.offsetLeft;
        const yoshiPosition = +window.getComputedStyle(yoshi).bottom.replace('px','');
        console.log('loop')

            if (tuboPosition <= 130 && tuboPosition > 0 && yoshiPosition < 90) {
                
                tubo.style.animation ='none';
                tubo.style.left = `${tuboPosition}px`;

                yoshi.style.animation ='none';
                yoshi.style.bottom = `${yoshiPosition}px`;

                yoshi.src= 'Ovo2.png';
                yoshi.style.marginLeft = '50px'
                yoshi.style.width ='75px'

                clearInterval(loop);

                alert("Voce Perdeu !!");

            }
},10)


