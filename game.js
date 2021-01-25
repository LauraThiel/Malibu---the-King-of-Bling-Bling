let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black'
let intervalID = 0
let score = 0
let backImg = document.createElement('img')
backImg.src = '/images/background.png'
let fgImg = document.createElement('img')
fgImg.src = '/images/grass.png'
let treatImg = document.createElement('img')
treatImg.src = '/images/treat.JPG'
let fenceImg = document.createElement('img')
fenceImg.src = '/images/fence.png'
let ballImg = document.createElement('img')
ballImg.src = '/images/ball.JPG'
let dogImg = document.createElement('img')
dogImg.src = '/images/ball.JPG'
let obstacles =[{x: canvas.width -60, y: 0}]
let fenceX = 800
let fgX = 0
let fg2X = 500
let dogY = 440
let dogIncrement = 2
let dogArea = 30

document.addEventListener("mousedown", () => {
    dogIncrement =-30
})

document.addEventListener("mouseup", () => {
    dogIncrement = 10
})

function draw(){
    ctx.drawImage(backImg, 0, 0)
    //for(let i=0)
    ctx.drawImage(fenceImg, fenceX, 415)
    ctx.drawImage(fgImg, fgX, 450)
    ctx.drawImage(fgImg, fg2X, 450)
    ctx.drawImage(ballImg, 500, 200)
    ctx.drawImage(dogImg, 150, dogY)
    ctx.drawImage(treatImg, 500, 200)
    ctx.font = '20px Verdana'
    ctx.fillText('Score: ' + score, 10, 30)
    fenceX -= 20
    fgX -= 20
    fg2X -= 20
    dogY += dogIncrement

}


function dogOnGrass (){
    if (dogY + dogArea > canvas.height) {
        dogIncrement = 0
    }
}











// create interval here



window.addEventListener('load', () => {
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
     }, 100)
})