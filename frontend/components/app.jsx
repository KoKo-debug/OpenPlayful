import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopBar from './topbar/topbar';
import Modal from './modal/modal_container';
import Splash from './splash/splash';
import CafeIndexContainer from './cafes/cafe_index_container';
import CafeShowContainer from './cafes/cafe_show_container';

const App = () => (
    <div className="page">
      <Modal />
      <TopBar />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/cafes" component={CafeIndexContainer} />
        <Route path="/cafes/:cafeId" component={CafeShowContainer} />
      </Switch>       
    </div>
);

export default App;