import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
           <div class="container">
                <a class="navbar-brand" href="#">App</a>
                <div className="d-flex">
                    <button className="btn btn-outline-primary">Login</button>
                </div>
            </div> 
        </nav>
    )
}

export default Header
