import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';

const App = ({ history }) => {
    return (
        <div style={{backgroundColor: '#f1f1f1', minHeight: '100vh'}}>
            <Router history={history}>
                <Switch>
                    <Route path='/auth/register' component = {Register} />
                    <Route path='/auth/login' component = {Login} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;