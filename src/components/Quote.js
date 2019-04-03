import React, { Component } from 'react';


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

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myFood: food[Math.floor(Math.random() * food.length)],
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.rolling(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  rolling() {
    this.setState({
      myFood:food[Math.floor(Math.random() * food.length)]
    });
  }

  handleClick() {
    this.setState({
      isToggleOn:!this.state.isToggleOn
    });
    if(this.state.isToggleOn) this.componentWillUnmount();
    else this.componentDidMount();
  }

  render(){
    return (
      <div onClick={this.handleClick}>
        <h1>When life gives you lemons🍋, trade them for {this.state.myFood}.</h1>
      </div>
    )
  }
}


export default Quote;