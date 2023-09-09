import React from "react";
import './login.css';

const Login = () => {
    return (
        
            <form action="#" method="post">
                <h3 class="text-center pb-3">Авторизация</h3>
                <div class="form-group mb-2">
                    <input type="text" class="form-control" placeholder="Email" required="required" />
                </div>
                <div class="form-group mb-2">
                    <input type="password" class="form-control" placeholder="Password" required="required" />
                </div>
                <div class="form-group">
                    <div className="d-grid">
                        <button type="submit" class="btn btn-primary">Войти</button>
                    </div>
                </div>
                <div className="additional-actions d-flex justify-content-center">
                    <a href="#" className="forgot-password">Забыли пароль?</a>
                    <a href="#" className="create-account">Создать аккаунт</a>
                </div>
            </form>
        
    );
};

export default Login;