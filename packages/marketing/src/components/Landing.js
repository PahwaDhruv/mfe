import React from 'react'
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <div className="container">
            <h1>Landing Page</h1>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to='/pricing' href='/pricing' className="btn btn-primary">See Pricing</Link>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Be a member</h5>
                        <p class="card-text">Create an account to get more features</p>
                        <Link to='/pricing' href='/pricing' className="btn btn-success">Sign Up</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
