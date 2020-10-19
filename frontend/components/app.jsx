import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {AuthRoute} from '../util/route_utils';
import Modal from './modal/modal';  
import NavBarContainer from './nav_bar/nav_bar_container';
import Error from "./error";
import Home from "./home/home"; 
import RestaurantShowContainer from './restaurant/restaurant_show_container'

// import SignUpContainer from "./session/signup_container";
// import LoginContainer from "./session/login_container"

const App = () => {
    return (
        <div>
            < Modal />
            <Route path="/" component={NavBarContainer}/>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route component={Error}/>
                <Route exact path="/restaurant/:restaurantId" component={RestaurantShowContainer} />
            </Switch>

        </div>
    )
};
export default App; 


