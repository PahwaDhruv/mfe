import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';

const Login = ({onLogin}) => {

    const history = useHistory();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        onLogin(user);
        setTimeout(() => {
            history.push('/')
        }, 1000)
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="email" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="password" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="offset-sm-2 col-sm-10">
                        <button className="btn btn-outline-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
