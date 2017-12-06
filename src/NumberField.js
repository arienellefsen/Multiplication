import React from 'react';
import './Table.css';

function NumberField(props){   
    return (
        <div>
            <input type="text" value ={props.value} onChange={props.onChange} className="field--number__left" />
            <p className="text--field__bottom"> Type number here</p>
        </div>

    )
}
  
export default NumberField;