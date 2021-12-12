import React from "react";
import About from "../pages/About";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login/Login";
import Friends from "../pages/Friends/Friends";
import FriendProfile from "../pages/FriendProfile";
import AuthForm from "../components/AuthForm/AuthForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import SecondAppRouter from "../components/AppRouter/SecondAppRouter";

export const privateRoutes = [
    {path: 'about', element: <About/>},
    {path: 'posts', element: <Posts/>},
    {path: 'posts/:id', element: <PostPage/>},
    {path: 'friends', element: <Friends/>},
    {path: 'friends/:id', element: <FriendProfile/>},
    {path: '*', element: <Error/>},
]

export const authRoutes = [
    {path: '*', element: <AuthForm/>},
    {path: 'auth', element: <AuthForm/>},
    // {path: 'login', element: <Login/>},
    // {path: 'registration', element: <RegistrationForm/>},
]

export const registrationRoutes = [
    {path: '*', element: <RegistrationForm/>},
    {path: 'registration', element: <RegistrationForm/>},
    // {path: 'login', element: <Login/>},
    // {path: 'auth', element: <AuthForm/>},
]

export const secondStepRoutes = [
    {path: '*', element: <SecondAppRouter/>},
    {path: 'secondstep', element: <SecondAppRouter/>},
    // {path: 'login', element: <Login/>},
    // {path: 'auth', element: <AuthForm/>},
]