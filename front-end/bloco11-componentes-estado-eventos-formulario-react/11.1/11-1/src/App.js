import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { id } }) {
    this.setState((estadoAnterior) => ({
      [id]: estadoAnterior[id] + 1,
    }));
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    console.log(this);
    const { btn1, btn2, btn3 } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleClick }
          id="btn1"
          style={ { backgroundColor: this.getButtonColor(btn1) } }
        >
          { btn1 }
        </button>
        <button
          type="button"
          id="btn2"
          onClick={ this.handleClick }
          style={ { backgroundColor: this.getButtonColor(btn2) } }
        >
          { btn2 }
        </button>
        <button
          type="button"
          id="btn3"
          onClick={ this.handleClick }
          style={ { backgroundColor: this.getButtonColor(btn3) } }
        >
          { btn3 }
        </button>
      </div>
    );
  }
}

export default App;
