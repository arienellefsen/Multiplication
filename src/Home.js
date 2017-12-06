import React from 'react';
import ButtonLearning from './ButtonLearning';
import ButtonGame from './ButtonGame';
import Navigation from './Navigation';
import Header from './Header';



const Home = function(props) {
    return (   
        <div className="container">
            <div className="row justify-content-md-center">
            <div className="col-md-12">
                    <Header />
                </div>
                <div className="col-md-6 text-center">
                    <h1 className="text-header"> Learning Mutliplication</h1>
                    <ButtonLearning />
                </div>
                <div className="col-md-6 text-center">
                    <h1 className="text-header"> Testing Mutliplication</h1>
                    <ButtonGame />
                </div>
            </div>
        </div>
    )
  }
  export default Home;