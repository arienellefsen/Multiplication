import React from 'react';

const CheckAnswear = props =>
{
    if (props.show===true){
        console.log(props.show);
        return (
          <div>
            <p className="answear--game">{props.answear}</p>
          </div>
        )
    }
    else
        return (
          <div>
            <p className="answear--game"></p>
          </div>
        )
    
}
export default CheckAnswear;