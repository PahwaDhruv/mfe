import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

//Mount function to start up the app
const mountAuthApp = (el, {onNavigate, loginAuth, defaultHistory, initialPath}) => {
    
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if(onNavigate){
        history.listen(onNavigate);
    }
   
    ReactDOM.render(
        <App authLogin = {loginAuth} history={history}/>,
        el
    )

    return {
        onParentNavigate: (location) => {
            const {pathname} = history.location;
            console.log('Parent Navigated', location.pathname)
            if(pathname !== location.pathname){
                history.push(location.pathname)
            }
        }
    }
}

//Running app in dev mode without container
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#_auth-dev-root');
    if(el){
        mountAuthApp(el, {defaultHistory: createBrowserHistory()});
    }
}

//Running app using container
export {mountAuthApp};