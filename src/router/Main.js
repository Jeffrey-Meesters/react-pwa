import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../pages/Home';
import Products from '../pages/Products';

const Main = ({ location }) => {
    return (
        <div className="Main">
            <TransitionGroup>
                <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
                >
                <section className="route-section">
                    <Switch location={location}>
                        <Route exact path='/' component={Home}/>
                        <Route path='/products' component={Products}/>
                        {/* <Route path='/path3' component={somecomponent}/> */}
                    </Switch>
                </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default withRouter(Main);