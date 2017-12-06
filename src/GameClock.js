import React from 'react';
import './Table.css';

const GameClock = props =>
{
   
    //generate randon number every 10 secs
    //if no answear show answear
    
    return (
        <div>
            time: {props.time}
        </div>
    )
}
export default GameClock;