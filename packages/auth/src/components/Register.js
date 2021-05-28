import React from 'react'

const Register = ({onRegister}) => {
    return (
        <div>
            <h1>Register</h1>
            <button type="button" className="btn btn-outline-info" onClick={onRegister}>Login</button>
        </div>
    )
}

export default Register
