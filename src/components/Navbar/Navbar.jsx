import React, {useContext} from 'react';
import stl from './Navbar.module.css';
import {Link} from "react-router-dom";
import Button from "../_UI/Button/Button";
import {AuthContext} from "../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <header className={stl.navbar}>
            <div className='container'>
                <Button onClick={logout}>Log out</Button>
                <div className="navbar__links">
                    <Link to={'/friends'}>Friends</Link>
                    <Link to={'/posts'}>Posts</Link>
                    <Link to={'/about'}>About</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;