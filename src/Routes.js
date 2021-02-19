import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../src/Component/Nav/Nav';
import Footer from '../src/Component/Footer/Footer';
import Main from '../src/Page/Main/Main';
import Login from '../src/Page/Login/Login';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
