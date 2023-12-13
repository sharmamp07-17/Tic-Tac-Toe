const boxes = document.querySelectorAll('.box');
const playerTurn = document.getElementById('turn');

let turn = "X";
let isGameOver = false;

// Loaded game

  boxes.forEach(e => {
    e.innerHTML = ''
    e.addEventListener("click", () =>{
      if (!isGameOver && e.innerHTML === ""){
        e.innerHTML = turn;
        checkWin();
        checkDrawn();
        changeTurn();
      }
    })

  });


function changeTurn(){
  if (turn === "X"){
    turn = "O";
    playerTurn.innerHTML = "Turn 'O'";
  }
  else{
    turn = "X";
  playerTurn.innerHTML = "Turn 'X'";
  };
};

// add ccondition of win  

function checkWin() {
  let wincondition = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < wincondition.length; i++) {
    let w0 = boxes[wincondition[i][0]].innerHTML;
    let w1 = boxes[wincondition[i][1]].innerHTML;
    let w2 = boxes[wincondition[i][2]].innerHTML;

    if (w0 != "" && w0 === w1 && w0 === w2) {
      isGameOver = true;
      document.querySelector("h3").innerText = turn + " Win";
      document.querySelector('#reset').style.display = "block";
      boxes.forEach(notClick => notClick.classList.add('disable'));


      for(j = 0; j < 3; j++){
        boxes[wincondition[i][j]].style.backgroundColor = "#08d9d6"
        boxes[wincondition[i][j]].style.Color = "#000"
      }
    };
  };
};

// Add function on drawn!

function checkDrawn(){
 if(!isGameOver){
  let isDraw = true;
  boxes.forEach(e =>{
    if(e.innerHTML === "") isDraw = false;
  })

  if(isDraw) {
    isGameOver = true;
    document.querySelector("h3").innerText = "Match Drawn"
    document.querySelector('#reset').style.display = "block";
  }
 }
};

// add function on Reset Buttton to reset the game & reloaded

function reset() {

  location.reload()
};