'use strict';
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

const current0EL  = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
const diceEL = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//another way to write and selecting id

//const socre1 = getElementById('socre--1');

//now we can set the initial condition of this game where both the value is zero

score0.textContent = 0;
score1.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0,0];
let activeplayer= 0;


let currentscore = 0;
//rolling dice functiponality
btnRoll.addEventListener('click',function(){
    //generating a rendom dice number

    const dice = Math.trunc(Math.random()*6) +1;
    //display the dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png` //dice- because we have common image name after we can write dice because that indicate the number of dice

    //checked for rolled 1: if true switch to next player
    if(dice !== 1){
        //Add dice to current score
        currentscore = currentscore+dice;
        // we can select dynamically which player is active
       document.querySelector(`#current--${activeplayer}`).textContent = currentscore;

        
    }else{
        document.querySelector(`#current--${activeplayer}`).textContent = 0;
        currentscore=0;
        activeplayer = activeplayer===0?1:0;
        player0EL.classList.toggle('player--active'); //this method automatically add and remove the class
        player1EL.classList.toggle('player--active');
    }
})


