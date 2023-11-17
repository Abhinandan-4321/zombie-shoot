// Iteration 1: Declare variables required for this game
let gamebody = document.getElementById("game-body")
let lives  = document.getElementById('lives')
let seconds = document.getElementById('timer').textContent
let zombieId = 0;
console.log(seconds)
// Iteration 1.2: Add shotgun sound

const shotgunSound = new Audio('./assets/shotgun.wav')
gamebody.onclick = () =>{
    shotgunSound.pause()
    shotgunSound.currentTime=0
    shotgunSound.play()
}

// Iteration 1.3: Add background sound
const backgroundSound = new Audio('./assets/bgm.mp3')
backgroundSound.play()
backgroundSound.loop = true;

// Iteration 1.4: Add lives
var nlives = 4;
// Iteration 2: Write a function to make a zombie
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const img = [
    "zombie-1.png",
    "zombie-2.png",
    "zombie-3.png",
    "zombie-4.png",
    "zombie-5.png",
    "zombie-6.png",
]
createZombie()
function createZombie(){
let randomImg = img[getRandomInt(0, img.length)]  //// get random img through array
console.log(randomImg)
gamebody.innerHTML += `<img src='./assets/${randomImg}'
class="zombie-image" id="zombie${zombieId}">`

let zombie = document.getElementById(`zombie${zombieId}`)
zombie.style.transform = `translateX(${getRandomInt(15,75)}vw)`

zombie.onclick = () =>{
    zombieDestruct(zombie)
}
}


// Iteration 3: Write a function to check if the player missed a zombie
 
function checkCollision(zombie){
    if(zombie.getBoundingClientRect().top<=0){
        nlives--;
        return true;
        console.log(nlives)
    }
    return false;   
}
// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function zombieDestruct(zombie){
    zombie.style.display = 'none'
    zombieId++
    createZombie()
}

// Iteration 5: Creating timer  
let timer = setInterval(function(){
    seconds--;
    document.getElementById("timer").textContent = seconds
    let zombie = document.getElementById(`zombie${zombieId}`)
    if(checkCollision(zombie)==true){
        zombieDestruct(zombie)
        if(nlives==0){
            clearInterval(timer)
            location.href='./game-over.html'
        }
    }
    if(seconds ==0){
        clearInterval(timer)
        location.href='./win.html'
    }

},1000)
// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer
