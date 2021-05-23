import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing}></Route>
                    <Route exact path="/pricing" component={Pricing}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;