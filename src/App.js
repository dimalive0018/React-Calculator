import Button from "./components/Buttons";
import Display from "./components/Display";
import { useState } from "react";
import './Calc.css';

function App() {
  const [display, setDisplay] = useState("");
  const [preview, setPreview] = useState("0");

  function calcVal(input) {
    const operators = ['/', '*', '-', '+']
    const dot = ['.']

    function limitReached() {
      setDisplay("");
      setPreview("Limit Reached");
    }
    
    try {
    
      if(operators.includes(input) && display === "" ||
        operators.includes(input) && operators.includes(display.slice(-1))) {
        return;
      }

      if(dot.includes(input) && display === "0") {
        setDisplay("0.")
      }

      if(!operators.includes(input)) {
        setPreview(eval(display + input).toString())
      }

      setDisplay(display + input);

      if(display.length > 12) {
        limitReached();
      }
    
    } catch(e) {
        return delete display.slice(-1);
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
