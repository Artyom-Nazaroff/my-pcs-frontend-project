import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import FirstAppRouter from "./components/AppRouter/FirstAppRouter";
import {AuthContext, ProfileContext} from "./context/context";
import {useEffect, useState} from "react";


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [createProfile, setCreateProfile] = useState({});

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        if (localStorage.getItem('person')) {
            setCreateProfile({key: 'value'});
        }
    }, [])

    return (
        <ProfileContext.Provider value={{createProfile, setCreateProfile}}>
            <AuthContext.Provider value={{isAuth, setIsAuth}}>
                <BrowserRouter>
                    <div className={'App'}>
                        <FirstAppRouter/>
                    </div>
                </BrowserRouter>
            </AuthContext.Provider>
        </ProfileContext.Provider>
    );
}

export default App;
