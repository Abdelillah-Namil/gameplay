'use strict';
//////////////////////////////method 1 /////////////////////////////////
const score = Math.trunc(Math.random() * 20) + 1;
let tours = 20;
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    alert('You should try a number');
  } else if (guess === score) {
    document.querySelector('.message').textContent = 'u winnn lest goooo';
    document.body.style.backgroundColor = 'red';
    document.getElementById('number').textContent = guess;
    document.querySelector('.number').style.width = '30rem';

    document.getElementById('highscore').innerHTML = tours;
  } else if (guess > score) {
    if (tours > 1) {
      document.querySelector('.message').textContent = 'is to hight';
      tours--;
      document.querySelector('.score').textContent = tours;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  } else if (guess < score) {
    if (tours > 1) {
      document.querySelector('.message').textContent = 'is to low';
      tours--;
      document.querySelector('.score').textContent = tours;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  }
  console.log(score, guess);
});

document.querySelector('.again').addEventListener('click', () => {
  tours = 20;
  const score = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'start guessing ...';

  document.querySelector('.score').textContent = tours;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.background = '#222';
  document.querySelector('.highscore').textContent = '0';
});
//////////////////////////////method 2 /////////////////////////////////
// let score = 20;
// document.querySelector('.check').addEventListener('click', () => {
//   function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * max + min);
//   }
//   let guess = document.querySelector('.guess').value;
//   let arrwinner = new Array();
//   arrwinner.push(Number(guess));
//   let arrnumber = [];
//   arrnumber.push(getRandomArbitrary(1, 20));
//   if (arrwinner[0] == arrnumber[0]) {
//     document.querySelector('.message').textContent = 'u winnnn lesttt goooo';
//     document.body.style.background = 'red';
//   } else if (arrwinner[0] > arrnumber[0]) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too hight ';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   } else if (arrwinner[0] < arrnumber[0]) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too low ';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', () => {
//   score = 20;
//   function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * max + min);
//   }
//   document.querySelector('.guess').value = '';
//   document.querySelector('.message').textContent = 'start guessing ...';

//   document.querySelector('.score').textContent = score;
//   document.querySelector('.highscore').textContent = 0;
//   document.querySelector('body').style.background = '#222';
//   document.querySelector('.highscore').textContent = '0';
// });
