const btns = document.querySelectorAll(".btn")
var btnsArr = Array.prototype.slice.call(btns);
console.log(btnsArr)
var started = false;
var index = []
var userIndex = [];
var k;
var level = 0







function makeSound(key) {
    var audio = new Audio("sounds/" + key + ".mp3")
    audio.play();
}

function start() {
    document.addEventListener("keypress", handlePress); 
    index=[];
    
     

}

start();



function handlePress(event) {
    
        document.removeEventListener("keypress", handlePress);
       
     

    document.querySelector("#level-title").textContent = "LEVEL" + (index.length+1);

    handleFlick();
    userIndex = [];
    if (!started) {
        userClicks();
        started= true;
    }
}


function handleFlick() {
    let l = Math.round(Math.random() * 3);
    index.push(l);
    btns[l].classList.add("pressed")
    var key = btns[l].getAttribute("id")
    makeSound(key);
    setTimeout(() => {
        btns[l].classList.remove("pressed")
    }, 1000);
    console.log("index " + index)

}


function userClicks() {

    btns.forEach(element => {

        element.addEventListener("click", function () {
            k = btnsArr.indexOf(this)
            btns[k].classList.add("pressed")
            var key = btns[k].getAttribute("id")
            makeSound(key);
            setTimeout(() => {
                btns[k].classList.remove("pressed")
            }, 1000);

            userIndex.push(k);
            console.log("userindex " + userIndex)
            check(index, userIndex);

        })
    });

}
function check(index, userIndex) {
    if (userIndex[userIndex.length-1]===index[userIndex.length-1]) {
        if (userIndex.length-1===index.length-1) {
            setTimeout(() => {

                            ++level;
                            // while(userIndex.length > 0) {
                            //     userIndex.pop();
                            // }
            
                            handlePress();
            
                        }, 2000);
        }
    }
    
        else {
            level=0;
            gameOver();
        }




    
    // level++
    // console.log(level)



}
function gameOver() {
    level=0;
    document.querySelector("#level-title").textContent = "Game Over, Press Any Key to Restart ";
    document.querySelector("body").classList.add("game-over")
    setTimeout(() => {
        document.querySelector("body").classList.remove("game-over")
    }, 800);
    var audio2 = new Audio("sounds/" + "wrong" + ".mp3")
    audio2.play();
    

    
        start();
  
   
}

