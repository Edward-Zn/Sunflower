import logo from './sunflower.png';
import './App.css';
import Hero from './Hero';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(true);
  const [hide, setHidden] = useState(true);

  return (
    <div className="App">
      <h2>HELLO SUNFLOWER</h2>
      {/* <Hero /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> */}
          {/* Edit <code>src/App.js</code> and save to reload. */}

          {/* <h1>Hello World!</h1> */}
          
          {/* This is React */}
        {/* </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
