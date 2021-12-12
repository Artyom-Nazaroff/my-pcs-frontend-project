import React, {useContext, useState} from 'react';
import stl from './RegistrationForm.module.css'
import Input from "../_UI/Input/Input";
import {ProfileContext} from "../../context/context";
import Button from "../_UI/Button/Button";

const RegistrationForm = () => {
    const {createProfile, setCreateProfile} = useContext(ProfileContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    // const [photo, setPhoto] = useState('');

    const createNewProfile = () => {
        const user = {
            firstName,
            lastName,
            city,
            phone,
            // photo,
        }
        setCreateProfile(user);
        localStorage.setItem('person', JSON.stringify(user))
    }


    return (
        <div className={stl.regPageWrapper}>
            <h2 className={stl.title}>Создать профиль</h2>
            <form className={stl.form}>
                <div className={stl.inputWrapper}>
                    <label>Имя</label>
                    <Input value={firstName} onChange={event => setFirstName(event.target.value)}/>
                </div>
                <div className={stl.inputWrapper}>
                    <label>Фамилия</label>
                    <Input value={lastName} onChange={event => setLastName(event.target.value)}/>
                </div>
                <div className={stl.inputWrapper}>
                    <label>Город</label>
                    <Input value={city} onChange={event => setCity(event.target.value)}/>
                </div>
                <div className={stl.inputWrapper}>
                    <label>Телефон</label>
                    <Input value={phone} onChange={event => setPhone(event.target.value)}/>
                </div>
                {/*<div className={stl.inputWrapper}>*/}
                {/*    <label>Загрузить фото</label>*/}
                {/*    <Input*/}
                {/*        style={{border: 'none'}}*/}
                {/*        type={'file'}*/}
                {/*        value={photo}*/}
                {/*        onChange={event => setPhoto(event.target.value)}*/}
                {/*    />*/}
                {/*</div>*/}
                <Button onClick={createNewProfile}>Регистрация</Button>
            </form>
        </div>
    );
};

export default RegistrationForm;