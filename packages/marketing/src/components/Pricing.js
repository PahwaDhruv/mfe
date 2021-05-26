import React from 'react'
import {Link} from 'react-router-dom';
const Pricing = () => {
    return (
        <div className="container">
            <h1>Pricing</h1>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Package 1</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Package 2</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Package 3</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                    </div>
                </div>
            </div>
            <Link to='/' href='/' className="btn btn-success">Home</Link>
        </div>
    )
}

export default Pricing;
