import logo from "./sunflower.png";
import "./App.css";
import Hero from "./Hero";
import { useState } from "react";

function App() {
  // const [hide, setHidden] = useState(true);

  const [show, setShow] = useState(false);
  const motto = "Semper Fidelis";

  return (
    <div className="App">
      {show ? (
        <div>
          <Hero message={motto} />
          <button onClick={() => setShow(false)} className="btn">
            Home
          </button>
        </div>
      ) : (
        <header className="App-header">
          <h2>SUNFLOWER</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => setShow(true)} className="btn">
            ENTER
          </button>
        </header>
      )}
    </div>
  );
}

export default App;
