import React, {useContext} from 'react';
import stl from './Navbar.module.css';
import {Link} from "react-router-dom";
import Button from "../_UI/Button/Button";
import {AuthContext, ProfileContext} from "../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {createProfile, setCreateProfile} = useContext(ProfileContext);

    const logout = () => {
        setIsAuth(false);
        setCreateProfile({});
        localStorage.removeItem('auth');
    }

    return (
        <header className={stl.navbar}>
            <div className='container'>
                <div className={stl.navbarInner}>
                    <div className={stl.logo}>
                        <img src="https://s1.mzstatic.com/us/r30/Purple4/v4/df/00/e3/df00e3a2-8afd-a2b2-0cdc-67738800d435/mzl.nhwlesvh.png" alt="logo"/>
                    </div>
                    <div className={stl.navbarLinks}>
                        <Link to={'/profile'}>Profile</Link>
                        <Link to={'/friends'}>Friends</Link>
                        <Link to={'/posts'}>Posts</Link>
                        <Link to={'/about'}>About</Link>
                    </div>
                    <Button
                        style={{backgroundColor: 'white', color: 'rgb(26, 183, 234)'}}
                        onClick={logout}
                    >Выйти</Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;