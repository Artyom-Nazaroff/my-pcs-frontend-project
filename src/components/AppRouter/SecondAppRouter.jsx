import React, {useContext, useEffect} from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import {privateRoutes, registrationRoutes} from "../../router/route";
import {ProfileContext} from "../../context/context";
import Navbar from "../Navbar/Navbar";
import Profile from "../../pages/Profile/Profile";


const SecondAppRouter = () => {
    const {createProfile, setCreateProfile} = useContext(ProfileContext);

    useEffect(() => {
        if (localStorage.getItem('person')) {
            setCreateProfile({key: 'value'});
        }
    }, [])


    return (
        Object.keys(createProfile).length !== 0
            ?
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    {privateRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    )}
                </Route>
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

    function Layout() {
        return (
            <div>
                <Navbar/>
                <main className="content">
                    <Outlet/>
                </main>
            </div>
        )
    }
};

export default SecondAppRouter;