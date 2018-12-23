import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageTwo from '../pages/PageTwo';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/pageTwo' component={PageTwo}/>
                    {/* <Route path='/path3' component={somecomponent}/> */}
                </Switch>
            </div>
        );
    }
}

export default Main;