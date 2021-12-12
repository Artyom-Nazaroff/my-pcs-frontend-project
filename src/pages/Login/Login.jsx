import React, {useContext, useEffect, useState} from 'react';
import stl from './Login.module.css';
import {useLoginInput} from "../../hooks/useLoginInput";
import {AuthContext, ProfileContext} from "../../context/context";
import AuthForm from "../../components/AuthForm/AuthForm";
import Input from "../../components/_UI/Input/Input";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import {Route, Routes} from "react-router-dom";


const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {createProfile, setCreateProfile} = useContext(ProfileContext);


    return (
        <div>
            <RegistrationForm/>
        </div>
        // isAuth
        //     ?
        //     <Routes>
        //         <Route path={'auth'} element={<AuthForm/>}/>
        //     </Routes>
        //     :
        //     <Routes>
        //         <Route path={'registration'} element={<RegistrationForm/>}/>
        //     </Routes>
    );
};

export default Login;