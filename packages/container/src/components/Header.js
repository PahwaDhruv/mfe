import React from 'react'
import {Link} from 'react-router-dom';

const Header = ({user, logout}) => {
    const handleLogout = () => {
        setTimeout(() => {
            logout();
        }, 1000)
    }
    return (
        <nav className="navbar navbar-light bg-light">
           <div className="container">
                {/* <a className="navbar-brand" href="#">App</a> */}
                <Link href='/' to='/' className="navbar-brand">Main App</Link>
                <div className="d-flex">
                    {
                        user.isAuthenticated ? (
                            <div>
                                <span>Welcome, <strong>{user.email}</strong></span>{' '}
                                <Link href='/' to='/' className="btn btn-outline-primary" onClick={handleLogout}>Logout</Link>
                            </div>
                        ) : (
                            <Link href='/auth/login' to='/auth/login' className="btn btn-outline-primary">Login</Link>
                        )
                    }
                    
                </div>
            </div> 
        </nav>
    )
}

export default Header
