import React from 'react'
import {Link} from 'react-router-dom';
const Pricing = () => {
    return (
        <div className="container">
            <h1>Pricing</h1>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Package 1</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Package 2</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Package 3</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                    </div>
                </div>
            </div>
            <Link to='/pricing' href='/pricing' className="btn btn-danger">Pricing</Link>
            <Link to='/' href='/' className="btn btn-success">Home</Link>
        </div>
    )
}

export default Pricing;
