import "./Hero.css";
import { useState } from "react";

function Hero(props) {
  const [show, setShow] = useState(false);

  const heroes = ["Aurora", "Iris", "Celeste", "Dante", "Martha"];
  const tableHeroes = heroes.map((item) => (
    <tr>
      <td>{item}</td>
    </tr>
  ));

  return (
    <div className="container">
      <span>{props.message}</span>
      {show ? (
        <div className="hero-table">
            <h3>Hide Heroes</h3>
            <button onClick={() => setShow(false)} className="btn">Hide!</button>
          <table className="fancyTable">
            <tr>
              <th>Heroes</th>
            </tr>
            {tableHeroes}
          </table>
        </div>
      ) : (
        <div>
            <h3>Show Heroes</h3>
            <button onClick={() => setShow(true)} className="btn">Show!</button>
        </div>
      )}
    </div>
  );
}

export default Hero;
