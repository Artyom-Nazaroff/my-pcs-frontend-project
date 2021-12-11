import React, {useContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../router/route";
import {AuthContext} from "../../context/context";


const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        isAuth
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
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
    );
};

export default AppRouter;