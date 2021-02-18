import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../src/Component/Nav/Nav';
import Main from '../src/Page/Main/Main';
import Footer from '../src/Component/Footer/Footer';
import Mypage from '../src/Page/Mypage/Mypage';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/product" component={Product} /> */}
          <Route exact path="/mypage" component={Mypage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
