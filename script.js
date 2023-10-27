let gameSeq = []; //Intialised Game generated and user input objects to store the seq
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let btns = ['red', 'green', 'blue', 'yellow'];

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

document.addEventListener('keypress', function () {
  if (started == false) {
    console.log('Game Started'); //Starting the game
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add('flash');
  setTimeout(function () {
    btn.classList.remove('flash');
  }, 250);
}

function userFlash(btn, isCorrect) {
  if (isCorrect) {
    btn.classList.add('userFlash');

    let correctMsg = document.createElement('h4');
    correctMsg.textContent = 'Correct✅';
    btn.appendChild(correctMsg);

    setTimeout(function () {
      btn.classList.remove('userFlash');
      btn.removeChild(correctMsg);
    }, 250);
  } else if (btn.classList.contains('btn')) {
    btn.classList.add('userWrong');

    let wrongMsg = document.createElement('h4');
    wrongMsg.textContent = 'Wrong👎';
    btn.appendChild(wrongMsg);

    setTimeout(function () {
      btn.classList.remove('userWrong');
      btn.removeChild(wrongMsg);
    }, 250);
  }
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was :<b> ${level}</b> 
    <br>Press any key to start again`;
    reset();
  }
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameFlash(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
}

function btnPress() {
  console.log('btn press');
  let btn = this;
  userColor = btn.getAttribute('id');
  userSeq.push(userColor);
  console.log(userColor);
  const lastIndex = userSeq.length - 1;
  const isCorrect = userSeq[lastIndex] === gameSeq[lastIndex];
  checkAns(lastIndex);

  // Pass a parameter indicating whether the user's input is correct
  userFlash(btn, isCorrect);
  console.log(userSeq);
}

let allBtns = document.querySelectorAll('.btn');

for (btn of allBtns) {
  btn.addEventListener('click', btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

function nightMode() {
  let nightMode = document.querySelector('.night');
  nightMode.classList.add;
}
