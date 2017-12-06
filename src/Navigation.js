import React from 'react';
import './Table.css';
import { Route, NavLink, Redirect } from 'react-router-dom';


const Navigation = props =>
{    
   return (
    <ul className="course-nav">
        <li><NavLink to={`/`}> {`<`} Back Home</NavLink></li>
      </ul>
    )
}
export default Navigation;