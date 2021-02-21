import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../src/Component/Nav/Nav';
import Main from '../src/Page/Main/Main';
import Footer from '../src/Component/Footer/Footer';
import Purchase from './Page/Purchase/Purchase';
import Product from './Page/Product/Product';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/product/purchase" component={Purchase} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/product/details" component={Product} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
