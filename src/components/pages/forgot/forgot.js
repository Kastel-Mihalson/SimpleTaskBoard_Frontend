import React from "react"
import './forgot.css'

const Forgot = () => {
    return (
        <form action="#" method="post">
            <h3 className="text-center pb-3">Восстановление пароля</h3>
            <div className="form-group mb-2">
                <input type="text" className="form-control" placeholder="Email" required="required" />
            </div>
            <div className="form-group">
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Отправить</button>
                </div>
            </div>
            <div className="additional-actions d-flex justify-content-center">
                <a href="#" className="signin-account">Войти в аккаунт</a>
                <a href="#" className="create-account">Создать аккаунт</a>
            </div>
        </form>
    )
}

export default Forgot