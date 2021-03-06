let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let intervalID = 0
let score = 0
let backImg = document.createElement('img')
backImg.src = './images/background.png'
let fgImg = document.createElement('img')
fgImg.src = './images/grass.png'
let treatImg = document.createElement('img')
treatImg.src = './images/dogtreat.png'
let fenceImg = document.createElement('img')
fenceImg.src = './images/fence.png'
let ballImg = document.createElement('img')
ballImg.src = './images/ball.png'
let dogImg = document.createElement('img')
dogImg.src = './images/dog2.png'
let houseImg = document.createElement('img')
houseImg.src = './images/house.png'
let grass =[{x: 0, y: 450}, {x: 500, y: 450}, {x: 700, y: 450}]
let fences =[{x: -200, y: 400}]
let treats =[{x: 400, y: 300}]
let balls =[{x: -200, y: 150}]
let fenceX = 800
//let ballX = 1400
let treatX = 1100
let fgX = 0
let fg2X = 500
let dogY = 400
let dogX = 150
let dogIncrement = 5  
let dogArea = 50
let houseX = 6000
let houseY = 275


let startBtn = document.querySelector('#start')
let restartBtn = document.querySelector('#restart')
let welcome = document.querySelector('#welcome')
let ballcollision = document.querySelector('#ballcollision')
let fencecollision = document.querySelector('#fencecollision')
let home = document.querySelector('#home')
let finalscore = document.querySelector('#score')
let song = document.querySelector('#sound')
let howl = document.querySelector('#howl')
let crunch = document.querySelector('#crunch')
let whistle = document.querySelector('#whistle')
let nameplayer = document.querySelector('#fname')
let nameToDisplay = ""

canvas.style.display = 'none'
ballcollision.style.display = 'none'
fencecollision.style.display = 'none'
home.style.display = 'none'
restartBtn.style.display = 'none'


document.addEventListener("keydown", event => {
    if (event.keyCode == 32 || event.key == " ") {
        dogIncrement -= 40
    }
} )

document.addEventListener("keyup", event => {
    if (event.keyCode == 32 || event.key == " ") {
        dogIncrement = 20
    }
})


function draw(){
    ctx.drawImage(backImg, 0, 0) 
    ctx.drawImage(dogImg, dogX, dogY)
    ctx.drawImage(houseImg, houseX, houseY)
    ctx.font = '20px Verdana'
    ctx.fillText('Score: ' + score, 10, 30)
    fgX -= 20
    dogY += dogIncrement
    houseX -= 20
    runningTreats()
    runningBalls()
    runningFences()
    runningGrass()
    dogOnGrass()
    gettingHome()

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
}


function runningFences () {
    for(let i=0; i< fences.length; i++){
        ctx.drawImage(fenceImg, fences[i].x, fences[i].y)
        fences[i].x -= 20
        //Collision dog and fence

        if((dogX + (dogImg.width - 60) > fences[i].x && dogX < fences[i].x + fenceImg.width - 60 ) &&
         (dogY + (dogImg.height - 60) > fences[i].y  && dogY < fences[i].y + fenceImg.height - 60)){
            clearInterval(intervalID);
            gameOver()
        }
    }
    if (fences[fences.length-1].x <200) {
        fences.push({
            x: Math.floor(Math.random() * canvas.width + 600),
            y: 420
        })
    }    

}


function runningTreats () {
    for(let i=0; i< treats.length; i++){
        ctx.drawImage(treatImg, treats[i].x, treats[i].y)
        treats[i].x -= 20
        //Collision dog and treats
        if
        ((dogX + dogImg.width - 20 > treats[i].x  && dogX < treats[i].x + treatImg.width) 
        &&
        (dogY + dogImg.height - 20 > treats[i].y  && dogY < treats[i].y + treatImg.height))
        {
            treats.splice(i, 1);
            i--
            score ++
            crunch.play()
        }     
    }
    if (treats[treats.length-1].x <800) {
        treats.push({
            x: canvas.width + 30,
            y: Math.floor(Math.random() * canvas.height)
        })
    } 
}   

function runningBalls () {
    for(let i=0; i< balls.length; i++){
        ctx.drawImage(ballImg, balls[i].x, balls[i].y)
        balls[i].x -= 50
        //Collision dog and ball
        console.log(ballImg.height)
        if((dogX + dogImg.width - 80> balls[i].x && dogX < balls[i].x + ballImg.width - 10) 
        && 
        (dogY + dogImg.height - 80> balls[i].y && dogY < balls[i].y + ballImg.height - 10))
        {
            clearInterval(intervalID);
            gameOver2()
        }
    }
    if (balls[balls.length-1].x <10) {
        balls.push({
            x: canvas.width + 800,
            y: Math.floor(Math.random() * canvas.height)
        })
    }    

}

function dogOnGrass (){
    if (dogY + dogArea <canvas.height - 100 ) {
        dogIncrement = 30
    }
    else dogIncrement = 0

}

function gettingHome(){
    if(dogX + dogImg.width > houseX) {
        clearInterval(intervalID);
        gameWon()
    }
}


function gameOver(){
    canvas.style.display = 'none'
    startBtn.style.display = 'none'
    restartBtn.style.display = ''
    welcome.style.display = 'none'
    ballcollision.style.display = 'none'
    fencecollision.style.display = ''
    home.style.display = 'none'
    howl.play()
    song.pause()
}

function gameOver2(){
    canvas.style.display = 'none'
    startBtn.style.display = 'none'
    restartBtn.style.display = ''
    welcome.style.display = 'none'
    ballcollision.style.display = ''
    fencecollision.style.display = 'none'
    home.style.display = 'none'
    howl.play()
    song.pause()
}

function gameWon(){
    canvas.style.display = 'none'
    startBtn.style.display = 'none'
    restartBtn.style.display = ''
    welcome.style.display = 'none'
    ballcollision.style.display = 'none'
    fencecollision.style.display = 'none'
    home.style.display = ''
    finalscore.innerText = `${nameToDisplay}, your score is: ${score}`
}

//function startGame(){
//    canvas.style.display = 'block'
//    startBtn.style.display = 'none'
//    restartBtn.style.display = 'none'
//    intervalID = setInterval(() => {
//        requestAnimationFrame(draw)
//    }, 100)
//}


// create interval here


function startGame(){
    canvas.style.display = 'block'
    startBtn.style.display = 'none'
    restartBtn.style.display = 'none'
    welcome.style.display = 'none'
    ballcollision.style.display = 'none'
    fencecollision.style.display = 'none'
    home.style.display = 'none'
    song.play()
    nameToDisplay = nameplayer.value

    intervalID = setInterval(() => {
        requestAnimationFrame(draw)
    }, 80)
}




startBtn.addEventListener('click', () => {
    startGame()
    whistle.play()
})

restartBtn.addEventListener('click', () => {
    location.reload();
})


//window.addEventListener('load', () => {
//    intervalID = setInterval(() => {
//        requestAnimationFrame(draw)
//     }, 400)
//})


