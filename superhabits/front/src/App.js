import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuBar from './components/menu-bar/menu-bar.component';
import Home from './pages/home/home';
import Doing from './pages/doing/doing';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <MenuBar>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/doing" component={Doing}/>
            </MenuBar>
          </Switch>
        </Router>
    )
  }
}

export default App;
