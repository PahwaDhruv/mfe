import React from 'react'
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <div className="text-center">
            <h1>Landing Page</h1>
            <Link to='/pricing' href='/pricing' className="btn btn-primary">Pricing</Link>
        </div>
    )
}

export default Landing
