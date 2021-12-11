import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className="navbar">
            <Button onClick={logout}>Log out</Button>
            <div className="navbar__links">
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/about'}>About</Link>
            </div>
        </div>
    );
};

export default Navbar;