import React,{useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {mountMarketApp} from 'auth/AuthApp';

const MarketingApp = ({loginAuth}) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const {onParentNavigate} = mountMarketApp(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: (location) => {
                console.log('Navigation Occured', location)
                const {pathname} = history.location;
                if(pathname !== location.pathname){
                    history.push(location.pathname);
                }
            },
            loginAuth
        });
        history.listen(onParentNavigate);
    }, [])

    return (
        <div ref={ref}></div>
    )
}

export default MarketingApp
