import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import PublicRoutes from 'routes/PublicRoutes';

import 'styles/form.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={PublicRoutes}/>
        </Switch>
      </div>
    );
  }
}

export default App;
