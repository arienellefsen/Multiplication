import React from 'react';
import './Table.css';

const Table = props =>
{
    let numbers= [...Array(11).keys()];
        const listItems = numbers.map((numbers, key) =>
            <li key ={key}>  {props.number} X {numbers}  = 
                <span className="result--table__left"> {props.number * numbers } </span>
            </li>
        );
    return (
        <ul className = "table--list__right">
            {listItems} 
        </ul>
    )
}
export default Table;