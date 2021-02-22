import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//정민님
import Nav from '../src/Components/Nav/Nav';
import Footer from '../src/Components/Footer/Footer';
import Main from '../src/Pages/Main/Main';

//혜성님
import Login from '../src/Pages/Login/Login';
import Signup from '../src/Pages/Signup/Signup';
import Mypage from '../src/Pages/Mypage/Mypage';

//사랑님
import Product from '../src/Pages/Product/Product';
import Purchase from '../src/Pages/Purchase/Purchase';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/product/details" component={Product} />
          <Route exact path="/product/purchase" component={Purchase} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
