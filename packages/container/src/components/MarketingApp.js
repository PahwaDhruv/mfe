import React,{useRef, useEffect} from 'react'
import {mountMarketApp} from 'marketing/MarketingApp';

const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mountMarketApp(ref.current);
    }, [])

    return (
        <div ref={ref}></div>
    )
}

export default MarketingApp
