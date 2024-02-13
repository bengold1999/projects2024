'use strict'
var gsize = 50

function onBallClick() {
    gsize = gsize + 50
   

    var ball = document.querySelector('.ball')
    console.log(ball.style.height)

    ball.style.width = gsize + 'px'
    ball.style.height = gsize + 'px'

    if(gsize>=400){
        gsize=100
    }


}


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

}