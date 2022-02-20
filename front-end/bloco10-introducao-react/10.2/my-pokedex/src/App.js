import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon'
import Pokedex from './Pokedex'
import React, {Component} from 'react'

// function App() {
//   return (
//     <>
//       <h1 className='title'>Pokeddasdaex</h1>
//       <Pokedex />
//     </>
//   );
// }

class App extends Component() {
  render(){
    return (
      <>
        <h1 className='title'>Pokeddasdaex</h1>
        <Pokedex />
      </>
    );
  }  
}

export default App;
