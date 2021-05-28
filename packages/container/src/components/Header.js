import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
           <div className="container">
                {/* <a className="navbar-brand" href="#">App</a> */}
                <Link href='/' to='/' className="navbar-brand">Main App</Link>
                <div className="d-flex">
                    <Link href='/auth/login' to='/auth/login' className="btn btn-outline-primary">Login</Link>
                </div>
            </div> 
        </nav>
    )
}

export default Header
