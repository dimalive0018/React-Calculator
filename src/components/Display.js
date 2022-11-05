import React from "react";

const Display = ({ displayResult, displayCalc }) => 
    <>
            { displayResult ? <span>({ displayResult })</span> : <span>( )</span> }
            <div id="display">
                { displayCalc || '0' }
            </div>
    </>

export default Display;