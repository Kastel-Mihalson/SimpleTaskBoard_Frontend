import React, { Component } from "react"
import './register.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthApiService from "../../../services/auth-api-service";

// Паттерн для валидации имени
const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/

// Паттерн для валидации email
const EMAIL_REGEX = /^\S+@\S+\.\S+$/

// Паттерн для валидации пароля
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = () => {

    const service = new AuthApiService();

    const [ name, setName ] = useState('')
    const [ isNameValid, setIsValidName ] = useState(false)

    const [ email, setEmail ] = useState('')
    const [ isEmailValid, setIsEmailValid ] = useState(false)

    const [ pass, setPass ] = useState('')
    const [ isPassValid, setIsPassValid ] = useState(false)
    
    const [ matchPass, setMatchPass ] = useState('')
    const [ isValidMatch, setIsValidMatch ] = useState(false)

    const [ message, setMessage ] = useState('')
    const [ success, setSuccess ] = useState( false )

    useEffect(() => {
        const isValid = NAME_REGEX.test( name )
        setIsValidName( isValid )
    }, [ name ] )

    useEffect( () => {
        const isValid = EMAIL_REGEX.test( email )
        setIsEmailValid( isValid )
    }, [ email ] );

    useEffect( () => {
        const isValid = PASS_REGEX.test( pass )
        setIsPassValid( isValid )

        const isMatchPass = matchPass === pass
        setIsValidMatch( isMatchPass )
    }, [ pass, matchPass ]);

    const onRegister = async ( event ) => {
        event.preventDefault()

        const data = JSON.stringify({ 
            Email: email, 
            Name: name, 
            Password: pass 
        })
        try {
            const response = await service.registerUser( data );
            setSuccess( true )
        }
        catch ( ex ) {
            setSuccess( false )
            setMessage(`${ ex.response.data }`)
        }
    }

    return (
        <>
        <form method="post" onSubmit={onRegister} >
            <h3 className="text-center pb-3">Регистрация</h3>
            { success && <span>User successfully created!</span> }
            { !success && message && <span>{ message }</span> }
            <div className="form-group mb-2">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Name" 
                    required="required"
                    onChange={ ( event ) => setName( event.target.value ) } />
                { 
                    !isNameValid && name &&
                    <span className="field-valid-tooltip">
                    4 to 24 characters. Must begins with a letter. Letters, numbers, underscores.<br/>
                    Example correct name: JBond_007
                    </span>
                }
            </div>
            <div className="form-group mb-2">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Email" 
                    required="required"
                    onChange={ ( e ) => setEmail( e.target.value ) } />
                { 
                    !isEmailValid && email &&
                    <span className="field-valid-tooltip">
                    Invalid email.<br/>Example correct email: JBond_007@mail.ru
                    </span>
                }
            </div>
            <div className="form-group mb-2">
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    required="required"
                    onChange={ ( e ) => setPass( e.target.value ) } />
                { 
                    !isPassValid && pass &&
                    <span className="field-valid-tooltip">
                    8 to 24 characters.<br/>
                    Password must include: A-Z, 0-9, !@#$%
                    </span>
                }
            </div>
            <div className="form-group mb-2">
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Confirm password" 
                    required="required"
                    onChange={ ( e ) => setMatchPass( e.target.value ) } />
                { 
                    !isValidMatch && matchPass &&
                    <span className="field-valid-tooltip">
                    Passwords not equals!
                    </span>
                }
            </div>
            <div className="form-group">
                <div className="d-grid">
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        disabled={ !isNameValid || !isEmailValid || !isPassValid || !isValidMatch }>
                        Создать
                    </button>
                </div>
            </div>
            <div className="additional-actions d-flex justify-content-center">
                <Link to="/forgot" className="forgot-password">Забыли пароль?</Link>
                <Link to="/login" className="signin-account">Войти в аккаунт</Link>
            </div>
        </form>
        </>
    )
}

export default Register