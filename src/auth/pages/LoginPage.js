import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

    const navigate = useNavigate()

    const onLogin = () => {
        navigate('/', {
            replace:true
        })
    }

    const getRegister = () => {
        navigate('/auth/register', {
            replace:true
        })
    }

    return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr />

        <button 
            className='btn btn-primary'
            onClick={onLogin}
        >
            Login
        </button>

        <br/>

        <a 
            className='btn-primary'
            onClick={getRegister}
        >
            Crear cuenta
        </a>

    </div>

  )
}
