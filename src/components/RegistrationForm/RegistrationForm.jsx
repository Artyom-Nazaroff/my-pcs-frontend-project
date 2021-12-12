import React, {useContext} from 'react';
import stl from './RegistrationForm.module.css'
import Input from "../_UI/Input/Input";
import {ProfileContext} from "../../context/context";
import Button from "../_UI/Button/Button";

const RegistrationForm = () => {
    const {createProfile, setCreateProfile} = useContext(ProfileContext);


    return (
        <div className={stl.regPageWrapper}>
            <h2 className={stl.title}>Создать профиль</h2>
            <form className={stl.form}>
                <div className={stl.inputWrapper}>
                    <label>Имя</label>
                    <Input/>
                </div>
                <div className={stl.inputWrapper}>
                    <label>Фамилия</label>
                    <Input/>
                </div>
                <div className={stl.inputWrapper}>
                    <label>Город</label>
                    <Input/>
                </div>
                <div className={stl.inputWrapper}>
                    <label>Телефон</label>
                    <Input/>
                </div>
                <div className={stl.inputWrapper}>
                    <label>Загрузить фото</label>
                    <Input
                        style={{border: 'none'}}
                        type={'file'}
                    />
                </div>
                <Button onClick={() => setCreateProfile({key: 'Value'})}>Регистрация</Button>
            </form>
        </div>
    );
};

export default RegistrationForm;