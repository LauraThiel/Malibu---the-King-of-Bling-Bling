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
let grass =[{x: 0, y: 450}, {x: 500, y: 450}]
let fences =[{x: -200, y: 400}]
let treats =[{x: -200, y: 200}]
let balls =[{x: -200, y: 150}]
let fenceX = 800
let ballX = 1200
let treatX = 1100
let fgX = 0
let fg2X = 500
let fg3X = 1000
let dogY = 440
//let dogIncrement = 440
let dogArea = 50


let startBtn = document.querySelector('#start')

document.addEventListener("mousedown", () => {
    dogY = dogY - 100
})

document.addEventListener("mouseup", () => {
    dogY = dogY + 100
})

function draw(){
    ctx.drawImage(backImg, 0, 0)
    //ctx.drawImage(fenceImg, fenceX, 415)
 
    ctx.drawImage(dogImg, 150, dogY)
    ctx.font = '20px Verdana'
    ctx.fillText('Score: ' + score, 10, 30)
    fenceX -= 20
    ballX -= 20
    treatX -= 20
    fgX -= 20
    fg2X -= 20
    //dogY = dogIncrement
    runningFences()
    runningGrass()
    runningTreats()
    runningBalls()
    //dogOnGrass()

}

function runningGrass () {
    for(let i=0; i< grass.length; i++){
        ctx.drawImage(fgImg, grass[i].x, grass[i].y)
        grass[i].x -= 20
    }
    if (grass[grass.length-1].x <600) {
        grass.push({
            x: canvas.width,
            y: 450
        })
    }    
 //    if (grass[grass[0]].x <-500) {
 //       grass.remove(grass[0])         //NEEDS TO BE CHECKED
 //   }
}

function runningFences () {
    for(let i=0; i< fences.length; i++){
        ctx.drawImage(fenceImg, fences[i].x, fences[i].y)
        fences[i].x -= 20
    }
    if (fences[fences.length-1].x <600) {
        fences.push({
            x: canvas.width,
            y: 420
        })
    }    

}

function runningTreats () {
    for(let i=0; i< treats.length; i++){
        ctx.drawImage(treatImg, treats[i].x, treats[i].y)
        treats[i].x -= 20
    }
    if (treats[treats.length-1].x <800) {
        treats.push({
            x: canvas.width,
            y: 220
        })
    }    

}

function runningBalls () {
    for(let i=0; i< balls.length; i++){
        ctx.drawImage(ballImg, balls[i].x, balls[i].y)
        balls[i].x -= 20
    }
    if (balls[balls.length-1].x <600) {
        balls.push({
            x: canvas.width,
            y: 220
        })
    }    

}

//function dogOnGrass (){
//    if (dogY + dogArea <440) {
//        dogIncrement = 2
//    }
//    else dogIncrement = 0
//}


function gameOver(){
    canvas.style.display = 'none'
}

function startGame(){
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 100)
}


// create interval here



window.addEventListener('load', () => {
    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
     }, 400)
})