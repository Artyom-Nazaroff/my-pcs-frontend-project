import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, secondStepRoutes} from "../../router/route";
import {AuthContext} from "../../context/context";


const FirstAppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);


    return (
        isAuth
            ?
            <Routes>
                {secondStepRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
            :
            <Routes>
                {authRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
    );
};

export default FirstAppRouter;