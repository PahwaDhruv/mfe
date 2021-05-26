import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

//Mount function to start up the app
const mountMarketApp = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

//Running app in dev mode without container
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#_marketing-dev-root');
    if(el){
        mountMarketApp(el);
    }
}

//Running app using container
export {mountMarketApp};