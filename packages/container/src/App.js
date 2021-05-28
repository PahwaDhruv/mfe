import React, {lazy, Suspense, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import AuthApp from './components/AuthApp';
// import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const App = () => {
    const initState = {
        email: '',
        isAuthenticated: false
    }
    const [auth, setAuth] = useState(initState)

    const loginUser = (user) => {
        console.log(user);
        setAuth({
            ...auth,
            email: user.email,
            isAuthenticated: true
        })
    }
    
    const logoutUser = () => {
        setAuth({
            ...auth,
            email: '',
            isAuthenticated: false
        })
    }

    console.log('Auth Obj',auth);
    return (
        <Router>
            <div className="text-center">
                <Header user={auth} logout={logoutUser}/>
                <Suspense fallback = {<div>Loading...</div>}>
                    <Switch>
                        <Route path='/auth'>
                            <AuthLazy loginAuth = {loginUser}></AuthLazy>
                        </Route>
                        <Route path='/' component={MarketingLazy}></Route>
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}

export default App;