import React, {useContext, useState} from 'react';
import stl from './Login.module.css';
import {useLoginInput} from "../../hooks/useLoginInput";
import {AuthContext, ProfileContext} from "../../context/context";


const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {createProfile, setCreateProfile} = useContext(ProfileContext);

    const [emailErrMessage, setEmailErrMessage] = useState('');
    const [passwordErrMessage, setPasswordErrMessage] = useState('');

    const email = useLoginInput({isEmpty: true, isEmail: true});
    const password = useLoginInput({isEmpty: true, minLength: 8});

    const disableSpace = (event) => {
        if (event.keyCode === 32) event.preventDefault();
    }

    const checkValidation = (event) => {
        event.preventDefault();
        let helper = '';
        if (email.isEmpty) {
            setEmailErrMessage('Поле обязательно для заполнения');
            helper = 'str';
        } else if (email.emailError) {
            setEmailErrMessage('Некорректный email');
            helper = 'str';
        }
        if (password.isEmpty) {
            setPasswordErrMessage('Поле обязательно для заполнения');
            helper = 'str';
        } else if (password.minLengthError) {
            setPasswordErrMessage('Пароль должен содержать как минимум 8 символов');
            helper = 'str';
        }
        if (!helper) {
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
        }
    }

    const forTest = false;

    const testFunc1 = () => {
        let style;
        forTest ? style = {display: 'flex'} : style = {display: 'none'}
        return style;
    }

    const testFunc2 = () => {
        let style;
        forTest ? style = {display: 'none'} : style = {display: 'block'}
        return style;
    }

    return (
        <div className={stl.pageWrapper}>
            <div className={stl.authPageWrapper}>
                <div className={stl.titleWrapper}>
                    <h1 className={stl.title}>Добро пожаловать!</h1>
                    <h2 className={stl.text}>Пожалуйста, пройдите авторизацию для доступа к сайту</h2>
                </div>
                <div className={stl.formWrapper}>
                    <form className={stl.formContainer}>
                        <h2 className={stl.formTitle}>Заполните форму</h2>
                        <div className={stl.inputContainer}>
                            <label htmlFor={'email'}>Email</label>
                            <input
                                className={stl.input}
                                onChange={event => email.changeValue(event)}
                                value={email.value}
                                onKeyDown={event => disableSpace(event)}
                                type="text"
                                name={'email'} id={'email'}
                                placeholder={'Введите email...'}
                            />
                            <div className={stl.error}>{emailErrMessage}</div>
                        </div>
                        <div className={stl.inputContainer}>
                            <label htmlFor={'password'}>Пароль</label>
                            <input
                                className={stl.input}
                                onChange={event => password.changeValue(event)}
                                value={password.value}
                                onKeyDown={event => disableSpace(event)}
                                type="password"
                                name={'password'}
                                id={'password'}
                                placeholder={'Введите пароль...'}
                            />
                            <div className={stl.error}>{passwordErrMessage}</div>
                        </div>
                        <button
                            className={stl.btn}
                            onClick={checkValidation}
                        >Авторизироваться
                        </button>
                    </form>
                </div>
            </div>

            <div className={stl.regPageWrapper}>

            </div>
        </div>
    );
};

export default Login;