import React, {useContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {huyablicRoutes, privateRoutes, publicRoutes, registrationRoutes} from "../../router/route";
import {AuthContext, ProfileContext} from "../../context/context";


const SecondAppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {createProfile, setCreateProfile} = useContext(ProfileContext);


    return (
        Object.keys(createProfile).length !== 0
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
            :
            <Routes>
                {registrationRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
    );
};


export default SecondAppRouter;