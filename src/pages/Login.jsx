import React, {useContext, useState} from 'react';
import {useLoginInput} from "../hooks/useLoginInput";
import {AuthContext} from "../context/context";


const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

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

    return (
        <form>
            <h1>Регистрация</h1>
            <div>{emailErrMessage}</div>
            <div>
                <input onChange={event => email.changeValue(event)} value={email.value}
                       onKeyDown={event => disableSpace(event)} type="text"
                       name={'email'} placeholder={'Enter your email...'}/>
            </div>
            <div>{passwordErrMessage}</div>
            <div>
                <input onChange={event => password.changeValue(event)} value={password.value}
                       onKeyDown={event => disableSpace(event)}
                       type="password" name={'password'} placeholder={'Enter your password...'}/>
            </div>
            <button onClick={checkValidation}>Registration</button>
        </form>
    );
};

export default Login;