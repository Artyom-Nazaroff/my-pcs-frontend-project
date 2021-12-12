import React from 'react';
import stl from './Profile.module.css'

const Profile = () => {

    const row = localStorage.getItem('person');
    const userInfo = JSON.parse(row);

    return (
        <div className={'container'}>
            <div className={stl.profileContainer}>
                <div className={stl.profilePic}>
                    <img src="/img/profilePhoto.jpg" alt="avatar"/>
                </div>
                <div className={stl.profileInfo}>
                    <h2 className={stl.profileTitle}>Информация о пользователе:</h2>
                    <div className={stl.gridContainer}>
                        <p>Имя:</p>
                        <div>{userInfo.firstName}</div>
                        <p>Фамилия:</p>
                        <div>{userInfo.lastName}</div>
                        <p>Город:</p>
                        <div>{userInfo.city}</div>
                        <p>Номер телефона:</p>
                        <div>{userInfo.phone}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;