import React from 'react'
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {

    const navigate = useNavigate()

    const onRegister = () => {
        navigate('/', {
            replace:true
        })
    }

    const getLogin = () => {
        navigate('/auth/login', {
            replace:true
        })
    }


  return (
    <div className='container mt-5'>
        <h1>Registrar</h1>
        <hr />

        <button 
            className='btn btn-primary'
            onClick={onRegister}
        >
            Registrar
        </button>

        <br/>
        
        <a 
            className='btn-primary'
            onClick={getLogin}
        >
            Crear cuenta
        </a>

    </div>
    )
}
