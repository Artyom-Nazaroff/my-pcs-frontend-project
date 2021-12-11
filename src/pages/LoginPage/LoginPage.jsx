import React, {useContext} from 'react';
import styles from './LoginPage.module.css'
import Input from "../../components/_UI/Input/Input";
import Button from "../../components/_UI/Button/Button";
import {AuthContext} from "../../context/context";
import LoginField from "../../components/LoginField/LoginField";

const LoginPage = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true'); // Создаем запись в localStorage о том, что зарегестрированы
    }

    return (
        <section className={styles.inputWindow}>
            <h1 className="input-window__title">Регистрация</h1>
            <form action="#" className="input-window__form form">
                <div className="form__email-container">
                    <LoginField
                        type={'text'}
                        id={'email'}
                        placeholder={'Введите email'}
                        class={'form__email-warning'}
                    >Email*</LoginField>
                </div>
                <div className="form__password-container">
                    <LoginField
                        type={'password'}
                        id={'password'}
                        placeholder={'Введите пароль'}
                        class={'form__password-warning'}
                    >Пароль*</LoginField>
                </div>
                <div className="form__checkbox-container">
                    <Input type="checkbox" className="form__checkbox-input" name="" id="checkbox"/>
                    <label htmlFor="checkbox" className="form__checkbox-label">Я согласен с <a href="">Правилами
                        пользования приложением</a>*</label>
                    <div className="form__checkbox-warning warning"></div>
                </div>

                <Button className="form__btn">Регистрация</Button>
            </form>
        </section>
    )
}

export default LoginPage;