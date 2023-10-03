import React from "react"
import './register.css'
import { Link } from 'react-router-dom';
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

    // Состояние и валидность имени
    const [ name, setName ] = useState('')
    const [ isNameValid, setIsValidName ] = useState(false)

    // Состояние и валидность почты
    const [ email, setEmail ] = useState('')
    const [ isEmailValid, setIsEmailValid ] = useState(false)

    // Состояние и валидность пароля
    const [ pass, setPass ] = useState('')
    const [ isPassValid, setIsPassValid ] = useState(false)
    
    // Состояние корректности подтверждения пароля
    const [ matchPass, setMatchPass ] = useState('')
    const [ isValidMatch, setIsValidMatch ] = useState(false)

    // Сообщение отправки запроса регистрации
    const [ message, setMessage ] = useState('')
    const [ success, setSuccess ] = useState( false )

    // Состояние компонента загрузки
    const [ isLoading, setIsLoading ] = useState( false )

    // Состояние редактируемости кнопки Создать
    const [ isEnabled, setIsEnabled ] = useState( false )

    /**
     * Установка значения валидности значения Name
     */
    useEffect(() => {
        const isValid = NAME_REGEX.test( name )
        setIsValidName( isValid )
    }, [ name ] )

    /**
     * Установка значения валидности значения Email
     */
    useEffect( () => {
        const isValid = EMAIL_REGEX.test( email )
        setIsEmailValid( isValid )
    }, [ email ] );

    /**
     * Установка значения валидности значения Pass
     * и корректность совпадения пароля
     */
    useEffect( () => {
        const isValid = PASS_REGEX.test( pass )
        setIsPassValid( isValid )

        const isMatchPass = matchPass === pass
        setIsValidMatch( isMatchPass )
    }, [ pass, matchPass ]);

    /**
     * Установка редактируемости кнопки Создать
     */
    useEffect( () => {
        setIsEnabled( !isNameValid || !isEmailValid || !isPassValid || !isValidMatch || isLoading )
    }, [ isNameValid, isEmailValid, isPassValid, isValidMatch, isLoading ] );

    /**
     * Обработчик нажатия кнопки Создать
     * @param {*} event - событие нажатия на кнопку
     */
    const onRegister = async ( event ) => {
        event.preventDefault()

        setIsLoading( true )

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
            setMessage( !ex?.response ? 'No server response' : `${ ex.response.data }` );
        }

        setIsLoading( false )
    }

    return (
        <>
        <form method="post" onSubmit={ onRegister } >
            <h3 className="text-center pb-1">Регистрация</h3>
            { success && <span className="success-register-message">User successfully created!</span> }
            { !success && message && <span className="error-register-message">{ message }</span> }
            <div className="form-group mb-2">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Name" 
                    required="required"
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
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
                    autoComplete="off"
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
                        disabled={ isEnabled }>
                        { isLoading ? "Обработка..." : "Создать" }
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