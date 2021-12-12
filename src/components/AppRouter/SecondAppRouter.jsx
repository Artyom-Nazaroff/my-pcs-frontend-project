import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, registrationRoutes} from "../../router/route";
import {ProfileContext} from "../../context/context";


const SecondAppRouter = () => {
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