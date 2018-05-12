import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import DashboardLayout from './containers/DashboardLayout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/404" name="Page 404" render={() => <h1>404</h1>} />
          <Route path="/" name="Dashboard" component={DashboardLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
