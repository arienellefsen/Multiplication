import React from 'react';
import Table from './Table';
import NumberField from './NumberField';
import ButtonLearning from './ButtonLearning';
import './Table.css';
import Navigation from './Navigation';
import Header from './Header';

class AppTable extends React.Component {
    constructor(props) {
        super(props);
            this.state = {tablenumber: 0};
            this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {

    let inputNumber = Number(event.target.value);
    
    if (isNaN(inputNumber)){
        return;
    }

    else{
        this.setState({
            tablenumber: event.target.value
        });
     }
    
  }
    render() {
      return (
        <div className="container">
            <Header />
            <Navigation />
            <div className="row">
                <div className="col-md-3">
                    <NumberField value ={this.state.tablenumber} onChange={this.handleChange}  message="type number here"/>
                </div>
                <div className="col-md-4">
                    <Table number={this.state.tablenumber} />
                </div>
            </div>
        </div>
      );
    }
  }

  export default AppTable;
