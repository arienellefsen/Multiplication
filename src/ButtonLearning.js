import { Redirect } from 'react-router';
import React, { Component } from 'react';
import './Table.css';

class ButtonLearning extends Component{

  state = {
    learn: false
  }

  render() {
    const { learn } = this.state
    if (learn) {
      return <Redirect to="/learning-multiplication" push={true} />
    }

    return (
      <div>
        <button onClick={() => this.setState({ learn: true})} className="btn--multiplication">
          Learn Multiplication
        </button>
      </div>
    )
  }
}

export default ButtonLearning;

