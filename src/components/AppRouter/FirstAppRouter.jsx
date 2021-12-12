import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, registrationRoutes, secondStepRoutes} from "../../router/route";
import {AuthContext, ProfileContext} from "../../context/context";


const FirstAppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {createProfile, setCreateProfile} = useContext(ProfileContext);


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


// isAuth && Object.keys(createProfile).length !== 0
//     ?
//     <Routes>
//         {privateRoutes.map(route =>
//             <Route
//                 path={route.path}
//                 element={route.element}
//                 key={route.path}
//             />
//         )}
//     </Routes>
//     :
//     <Routes>
//         {publicRoutes.map(route =>
//             <Route
//                 path={route.path}
//                 element={route.element}
//                 key={route.path}
//             />
//         )}
//     </Routes>

export default FirstAppRouter;