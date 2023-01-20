var dino = document.getElementById('dino');
var cactus = document.getElementById('cactus');
var cact1 = document.getElementById('cact1');
var cact2 = document.getElementById('cact2');
var hello = document.getElementById('document');


window.onload = document.addEventListener('keyup', () => {
    if(dino.classList != 'up') {
        dino.classList.add('animate');
    }
    setTimeout (function() {
    dino.classList.remove('animate');
    }, 500)
}, 10);

// var touching = setInterval(function() {
//     var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
//     var touch = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
//     if(touch<20 && touch>0 && dinoTop>= 80) {
//         healthPoints(health-20);
//         alert('u lose')
//     }
// })


// if(touch) {
//         dino.style.top = 80;
//         cactus.style.left- 20;
//         alert('u lose');
// }


function checkCollision () {
    let x_dino_1 = Number((getComputedStyle(dino).left).split('px')[0]);
    let y_dino_1 = Number((getComputedStyle(dino).top).split('px')[0]);

    let x_cactus_1 = Number((getComputedStyle(cactus).left).split('px')[0]);
    let y_cactus_1 = Number((getComputedStyle(cactus).top).split('px')[0]);

    let leftPos = x_dino_1 + x_dino_1_width > 
        x_cactus_1 - x_cactus_1_width;
    let  rightPos = x_dino_1 - x_dino_1_width < 
        x_cactus_1 + x_cactus_1_width;

    let topPos = y_dino_1 + y_dino_1_height > 
        y_cactus_1 - y_cactus_1_height;
    let bottomPos = y_dino_1 - y_dino_1_height < 
        y_cactus_1 - y_cactus_1_height;

    if(leftPos && rightPos && topPos && bottomPos) {
        alert('ouch');
    }
    else {
        alert('good job');
    }

};

var health = 100;

function healthPoints(life) {
    health = life;
    var healthBar = document.getElementById('life')

    healthBar.style.width = life + '%';


}