import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import {AuthContext, ProfileContext} from "./context/context";
import {useEffect, useState} from "react";


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [createProfile, setCreateProfile] = useState({});

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, [])

    return (
        <ProfileContext.Provider value={{createProfile, setCreateProfile}}>
            <AuthContext.Provider value={{isAuth, setIsAuth}}>
                <BrowserRouter>
                    <div className={'App'}>
                        {/*<Navbar/>*/}
                        <AppRouter/>
                    </div>
                </BrowserRouter>
            </AuthContext.Provider>
        </ProfileContext.Provider>
    );
}

export default App;
