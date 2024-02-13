'use strict'
var gsize = 50

function onBallClick() {
    gsize = gsize + getRandomInt(20,60)
   

    var ball = document.querySelector('.ball')
    console.log(ball.style.height)

    ball.style.backgroundColor = getRandomColor()

    ball.style.width = gsize + 'px'
    ball.style.height = gsize + 'px'

    if(gsize>=400){
        gsize=100
    }


}

