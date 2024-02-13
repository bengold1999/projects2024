'use strict'
var gsize = 50

function onBallClick( maxDiameter) {
    gsize = gsize + getRandomInt(20, 60)


    var ball = document.querySelector('.ball')
    var ball2 =document.querySelector('.ball2')
    console.log(ball.style.height)

    ball.style.backgroundColor = getRandomColor()

    ball.style.width = gsize + 'px'
    ball.style.height = gsize + 'px'
    ball2.style.width = gsize + 'px'
    ball2.style.height = gsize + 'px'


    if (gsize >= maxDiameter) {
        gsize = 100
    }
    


}

