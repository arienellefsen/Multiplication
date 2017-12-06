import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Table from './Table';
import GameTable from './GameTable';
import NotFound from './NotFound';
import Home from './Home';
import AppTable from './AppTable';

const App = () => (
  <BrowserRouter>
    <div className="container">      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/learning-multiplication" component={AppTable} />
        <Route path="/game-multiplication" component={GameTable} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;


