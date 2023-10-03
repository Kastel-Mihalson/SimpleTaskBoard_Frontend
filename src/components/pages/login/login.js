import React from "react"
import './login.css'
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../../../contexts/auth-provider'
import AuthService from '../../../services/auth-api-service'

const Login = () => {

    const service = new AuthService()
    const { setAuth } = useContext( AuthContext )

    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ success, setSuccess] = useState( false )

    const onSignIn = async ( event ) => {
        event.preventDefault()

        const data = JSON.stringify({ Email: email, Password: pass });
        try {
            const response = await service.signInUser( data )
            console.log(response?.data)
            setSuccess( true )
        } 
        catch( ex ) {
            if ( !ex?.response ) {
                setMessage( 'No Server response' )
            } else if ( ex?.response.status === 401 ) {
                setMessage( 'Unauthorized' )
            } else {
                setMessage( 'Login Failed!' )
            }
        }
    }

    return (
        <>
        { success ? (
            <span>Signed In!</span>
        ) : (
            <form onSubmit={ onSignIn } >
            <h3 className="text-center pb-1">Авторизация</h3>
            { message && <span>{ message }</span> }
            <div className="form-group mb-2">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    required="required"
                    onChange={ ( event ) => setEmail( event.target.value ) }
                    value={ email } />
            </div>
            <div className="form-group mb-2">
                <input 
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required="required"
                    onChange={ ( event ) => setPass( event.target.value ) } />
            </div>
            <div className="form-group">
                <div className="d-grid">
                    <button className="btn btn-primary">Войти</button>
                </div>
            </div>
            <div className="additional-actions d-flex justify-content-center">
                <Link to="/forgot" className="forgot-password">Забыли пароль?</Link>
                <Link to="/register" className="create-account">Создать аккаунт</Link>
            </div>
        </form>
        ) }
        </>
    )
}

export default Login