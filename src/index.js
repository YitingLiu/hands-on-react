import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const food = [
  'coffee☕️',
  'milk🥛',
  'beer🍺',
  'popcorns🍿',
  'apples🍎',
  'avocado🥑',
  'croissant🥐',
  'bacon🥓',
  'steak🥩',
  'hotpot🍲',
  'pizza🍕',
  'ice cream🍦',
  'chocolate🍫'
];

var myFood = food[Math.floor(Math.random() * food.length)];
var quote = <h1>When life gives you lemons🍋, trade them for {myFood}.</h1>;
ReactDOM.render(
  quote,
  document.getElementById('root')
);

var myTimer=setInterval(function(){
  myFood = food[Math.floor(Math.random() * food.length)];
  quote = <h1>When life gives you lemons🍋, trade them for {myFood}.</h1>;
  ReactDOM.render(
    quote,
    document.getElementById('root')
  )},100);

var  hint = <h2>Press any key to pause!</h2>
ReactDOM.render(
  hint,
  document.getElementById('hint')
);


var state=true;
window.addEventListener("keypress",function(){
  if(state==true){
    clearInterval(myTimer);
    state=false;
    hint = <h2>Press any key to restart!</h2>;
    ReactDOM.render(
      hint,
      document.getElementById('hint')
    );
  } else if(state==false){
    myTimer=setInterval(function(){
      myFood = food[Math.floor(Math.random() * food.length)];
      quote = <h1>When life gives you lemons🍋, trade them for {myFood}.</h1>;
      ReactDOM.render(
        quote,
        document.getElementById('root')
      )},100);
    state=true;
    hint = <h2>Press any key to pause!</h2>;
    ReactDOM.render(
      hint,
      document.getElementById('hint')
    );
  }
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
