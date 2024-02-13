'use strict'
var gsize = 50


function onInit(){
    document. location. reload() 
}

function onBallClick(maxDiameter) {
    gsize = gsize + getRandomInt(20, 60)


    var ball = document.querySelector('.ball')
    var ball2 = document.querySelector('.ball2')
    console.log(ball.style.height)

    // ball.style.backgroundColor = getRandomColor()

    ball.style.width = gsize + 'px'
    ball.style.height = gsize + 'px'
    ball2.style.width = gsize + 'px'
    ball2.style.height = gsize + 'px'


    if (gsize >= maxDiameter) {
        gsize = 100
    }



}

function onBall3() {
    var ball = document.querySelector('.ball')
    var ball2 = document.querySelector('.ball2')
    console.log(ball.style.backgroundColor)
    // var size= ball.style.width
    // var color = ball.style.backgroundColor

    ball2.style.backgroundColor = 'blue'
    ball.style.backgroundColor = 'red'


    // ball.style.backgroundColor = ball2.style.backgroundColor


}


function onBall4() {
    gsize = 100
    gsize += getRandomInt(20, 60)

    var ball = document.querySelector('.ball')
    var ball2 = document.querySelector('.ball2')

    ball.style.width = gsize + 'px'
    ball.style.height = gsize + 'px'
    ball2.style.width = gsize + 'px'
    ball2.style.height = gsize + 'px'
}

function onBall5() {
    var body =document.querySelector('body')
    body.style.backgroundColor = getRandomColor()
}

function onBall6(){
    return onInit()
}