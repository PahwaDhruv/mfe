import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';

const App = ({ history, authLogin }) => {
    return (
        <div style={{backgroundColor: '#f1f1f1', minHeight: '100vh'}}>
            <Router history={history}>
                <Switch>
                    <Route path='/auth/register'>
                        <Register onRegister = {authLogin}></Register>
                    </Route>
                    <Route path='/auth/login'>
                        <Login onLogin = {authLogin}></Login>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;