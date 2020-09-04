import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.sass';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MainPage from "./pages/main-page/MainPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPages";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      classNames='fade'
      timeout={300}
    >
      <Switch location={location}>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/main' component={MainPage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='/services' component={ServicesPage}/>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

ReactDOM.render(
  <Router>
    <AnimatedSwitch/>
  </Router>,
  document.getElementById('root')
);

