import React from 'react';
import './Table.css';

const GuessTable = props =>
{    
   return (
        <div className="guess--table__right">
            {props.number} X {props.randomNumber} 
            {/* <p> answear: {CalculateTable}</p> */}
        </div>
    )
}
export default GuessTable;