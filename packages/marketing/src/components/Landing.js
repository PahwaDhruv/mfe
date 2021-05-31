import React from 'react'
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <div className="container">
            <h1>Landing Page Test</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to='/pricing' href='/pricing' className="btn btn-danger">See Pricing</Link>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Be a member</h5>
                        <p className="card-text">Create an account to get access to more cool stuffs</p>
                        <Link to='/auth/register' href='/auth/register' className="btn btn-success">Sign Up</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
