import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
    return (
        <div style={{backgroundColor: '#f1f1f1', minHeight: '100vh'}}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing}></Route>
                    <Route path="/pricing" component={Pricing}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;