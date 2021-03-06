import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

//Mount function to start up the app
const mountMarketApp = (el, {onNavigate, defaultHistory, initialPath}) => {
    
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if(onNavigate){
        history.listen(onNavigate);
    }
   
    ReactDOM.render(
        <App history={history}/>,
        el
    )

    return {
        onParentNavigate: (location) => {
            const {pathname} = history.location;
            if(pathname !== location.pathname){
                history.push(location.pathname)
            }
            console.log('Parent Navigated', location)
        }
    }
}

//Running app in dev mode without container
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#_marketing-dev-root');
    if(el){
        mountMarketApp(el, {defaultHistory: createBrowserHistory()});
    }
}

//Running app using container
export {mountMarketApp};