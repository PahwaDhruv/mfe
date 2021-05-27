import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
           <div className="container">
                {/* <a className="navbar-brand" href="#">App</a> */}
                <Link href='/' to='/' className="navbar-brand">App</Link>
                <div className="d-flex">
                    <button className="btn btn-outline-primary">Login</button>
                </div>
            </div> 
        </nav>
    )
}

export default Header
