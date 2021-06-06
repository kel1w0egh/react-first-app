import './App.css';
import Biography from './biography/Biography.jsx';
import Composition from './composition/Composition.jsx';
import IncrementButton from './increment-button/IncrementButton.jsx';
import DisplayButton from './display-button/DisplayButton.jsx';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState(0);
  const stateFunc = function(newValueOperation) {
    setValue(value + newValueOperation);
  }
  
  return (
    <div className="App">
      <h1>Задание №1</h1>
      <Biography />
      <Composition />
      <h1>Задание №2</h1>
      <IncrementButton valueOperation={10} onClickAlt={stateFunc} />
      <IncrementButton valueOperation={-100} onClickAlt={stateFunc} />
      <IncrementButton valueOperation={25} onClickAlt={stateFunc} />
      <DisplayButton value={value}/>
    </div>
  );
}
