import React from "react";

const Button = ({ onClick, onReset, onEqual }) =>
    <>
        <button onClick={onReset} id="clear">AC</button>
        <button onClick={() => onClick('/')} className="operators" id="divide">/</button>
        <button onClick={() => onClick('*')} className="operators" id="multiply">*</button>
        <button onClick={() => onClick('7')} id="seven">7</button>
        <button onClick={() => onClick('8')} id="eight">8</button>
        <button onClick={() => onClick('9')} id="nine">9</button>
        <button onClick={() => onClick('-')} className="operators" id="subtract">-</button>
        <button onClick={() => onClick('4')} id="four">4</button>
        <button onClick={() => onClick('5')} id="five">5</button>
        <button onClick={() => onClick('6')} id="six">6</button>
        <button onClick={() => onClick('+')} className="operators" id="add">+</button>
        <button onClick={() => onClick('1')} id="one">1</button>
        <button onClick={() => onClick('2')} id="two">2</button>
        <button onClick={() => onClick('3')} id="three">3</button>
        <button onClick={onEqual} id="equals">=</button>
        <button onClick={() => onClick('0')} id="zero">0</button>
        <button onClick={() => onClick('.')} id="decimal">.</button>
    </>

export default Button;