import { Redirect } from 'react-router';
import React, { Component } from 'react';
import './Table.css';


class ButtonGame extends Component{

  state = {
    game: false
  }

  render() {
    
    const { game } = this.state
    if (game) {
      return <Redirect to="/game-multiplication" push={true} />
    }
    return (
      <div>
        <button onClick={() => this.setState({ game: true})} className="btn--multiplication">
          Game Multiplication
        </button>
      </div>
    )
  }
}

export default ButtonGame;

