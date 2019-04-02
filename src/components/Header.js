import React, { Component } from 'react';


const food = [
  'coffee☕️',
  'milk🥛',
  'beer🍺',
  'popcorns🍿',
  'apples🍎',
  'avocado🥑'
];

var myFood = food[Math.floor(Math.random() * food.length)];
const quote = <h1>When life gives you lemons🍋, trade them for {myFood}.</h1>;

class Header extends Component {
  render(){
    return (
      greeting,
      )
  }
}


export default Header;