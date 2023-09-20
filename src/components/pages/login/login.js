import React from "react"
import './login.css'

const Login = () => {
    return (
        <form action="#" method="post">
            <h3 className="text-center pb-3">Авторизация</h3>
            <div className="form-group mb-2">
                <input type="text" className="form-control" placeholder="Email" required="required" />
            </div>
            <div className="form-group mb-2">
                <input type="password" className="form-control" placeholder="Password" required="required" />
            </div>
            <div className="form-group">
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Войти</button>
                </div>
            </div>
            <div className="additional-actions d-flex justify-content-center">
                <a href="#" className="forgot-password">Забыли пароль?</a>
                <a href="#" className="create-account">Создать аккаунт</a>
            </div>
        </form>
    )
}

export default Login