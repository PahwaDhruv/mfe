import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import AuthApp from './components/AuthApp';
// import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const App = () => {
    return (
        <Router>
            <div className="text-center">
                <Header />
                <Suspense fallback = {<div>Loading...</div>}>
                    <Switch>
                        <Route path='/auth' component = {AuthLazy} />
                        <Route path='/' component = {MarketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}

export default App;