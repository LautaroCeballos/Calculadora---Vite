import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="titulo">Calculadora</h1>
      <h2 className="resultado">resultado</h2>
      <form action="" className="form-input">
        <input type="number" />
      </form>

      <div className="buttons">
        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button">4</button>
        <button className="button">5</button>
        <button className="button">6</button>
        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button">0</button>
        <button className="button">📤</button>
      </div>

      <div className="buttons">
        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button">4</button>
        <button className="button">5</button>
        <button className="button">6</button>
        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button">0</button>
        <button className="button">📤</button>
      </div>
    </div>
  );
}

export default App;
