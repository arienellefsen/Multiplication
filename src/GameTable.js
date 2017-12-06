import React from 'react';
import NumberField from './NumberField';
import GuessTable from './GuessTable';
import CheckAnswear from './CheckAnswear';
import GameClock from './GameClock';
import Navigation from './Navigation';
import Header from './Header';

class GameTable extends React.Component {

    constructor(props) {
        super(props);
            this.state = {tablenumber: 0, counter: 20, startGame: false, randomNumber:'', answear:0, show: false};
            this.handleChange = this.handleChange.bind(this);
            this.generateNumber = this.generateNumber.bind(this);
            this.showAnswear = this.showAnswear.bind(this);
    }

  generateNumber() {
        let tableNumber = this.state.tablenumber;
        let randomNumber = Math.floor((Math.random() * 10) + 1);
        let CalculateTable = randomNumber * this.state.tablenumber;
        let answear = this.state.answear;
       
        this.setState({
            startGame: true,
            randomNumber : randomNumber,
            answear : CalculateTable,
            show: false
        });
        console.log(tableNumber +' X '+ randomNumber + ' = ' + CalculateTable);
        let show = this.state.show;
        console.log(show);
    }

  handleChange(event) {
    let inputNumber = Number(event.target.value);
    if (isNaN(inputNumber)){
        return;
    }
    else{
        this.setState({
            tablenumber: event.target.value,
            counter : 10,
            show: false
        });
     }
  }

  showAnswear(){
    console.log('test');
    this.setState({
            show: true,
        });
  }

    render() {
    
      return (
    
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <Header /> 
                    <Navigation />
                </div>
                <div className="col-md-12 text-center">
                    <NumberField value ={this.state.tablenumber} onChange={this.handleChange} />
                    <button onClick={this.generateNumber} className="btn--multiplication text-center"> Generate Number</button>
                    <GuessTable number={this.state.tablenumber} randomNumber={this.state.randomNumber} /> 
                </div>
                <div className="col-md-2">
                    <button onClick={this.showAnswear} className="btn--multiplication" > Show Answear </button>
                    <CheckAnswear answear={this.state.answear} onClick={this.showAnswear} show={this.state.show} />
                </div>
            </div>
        </div>
      );
    }
}
  export default GameTable;


  // Create component to render a aleatory game
  // Ask user to enter number to generate that multiplication table
  // After input generate aleatory table for that number from 1 to 10
  // Create component to check answer
  // Create component to update score


