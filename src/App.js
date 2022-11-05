import Button from "./components/Buttons";
import Display from "./components/Display";
import { useState } from "react";
import './Calc.css';

function App() {
  const [display, setDisplay] = useState("");
  const [preview, setPreview] = useState("0");

  function calcVal(input) {
    const operators = ['/', '*', '-', '+', '.']

    function limitReached() {
      setDisplay("");
      setPreview("Limit Reached");
    }

    function error() {
      setDisplay("");
      setPreview("Error")
    }
    
    try {
    if(operators.includes(input) && display === "" ||
    operators.includes(input) && operators.includes(display.slice(-1))) {
      return;
    }
      
    if(!operators.includes(input)) {
      setPreview(eval(display + input).toString())
    }

    if(display.length > 12) {
      limitReached();
    }
      
    setDisplay(display + input);
    
    } catch(e) {
        error();
      }
  }

  function reset() {
    setDisplay("");
    setPreview("0");
  }

  function equal() {
    setDisplay(eval(display).toString())
  }

  return (
    <div id="calculator" className="App">
      <Display displayResult={preview} displayCalc={display} />
      <Button onClick={calcVal} onReset={reset} onEqual={equal} />
    </div>
  );
}

export default App;
