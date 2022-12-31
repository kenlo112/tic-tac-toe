const wincombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


let player1 = "X"
let move = 0

let boxes = document.querySelectorAll("td");
boxes = Array.from(boxes)


const message = document.getElementById("result")

const reset = document.getElementById("restart")
reset.addEventListener("click", initialize);

boxes.forEach(function(box){
    box.addEventListener("click", function(){
    if(box.innerText != "")
    return
    box.innerHTML = player1
    checkWinner()
    player1 = player1 == "X" ? "O" : "X"
    move++
    
    })
})


function checkWinner(){
    wincombo.forEach(function(combo){
        let check = combo.every(function(idx) {
            return boxes[idx].innerText == player1;
        })
        if(check){
            message.innerHTML = `${player1} Win !`
            return
        }
    })
    if (move == boxes.length-1) {
        message.innerHTML = "Tie game !"
        return
    }

}

function initialize (){
    message.innerHTML = ""
    move = 0
    boxes.forEach(function(box){
        box.innerHTML = ""
    })
}