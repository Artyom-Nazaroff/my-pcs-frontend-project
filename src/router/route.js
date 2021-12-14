import React from "react";
import PostPage from "../pages/PostPage/PostPage";
import Posts from "../pages/Posts/Posts";
import Friends from "../pages/Friends/Friends";
import FriendProfile from "../pages/FriendProfile/FriendProfile";
import AuthForm from "../components/AuthForm/AuthForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import SecondAppRouter from "../components/AppRouter/SecondAppRouter";
import Profile from "../pages/Profile/Profile";

export const privateRoutes = [
    {path: 'profile', element: <Profile/>},
    {path: 'posts', element: <Posts/>},
    {path: 'posts/:id', element: <PostPage/>},
    {path: 'friends', element: <Friends/>},
    {path: 'friends/:id', element: <FriendProfile/>},
    {path: '*', element: <Profile/>},
]

export const authRoutes = [
    {path: '*', element: <AuthForm/>},
    {path: 'auth', element: <AuthForm/>},
]

export const registrationRoutes = [
    {path: '*', element: <RegistrationForm/>},
    {path: 'registration', element: <RegistrationForm/>},
]

export const secondStepRoutes = [
    {path: '*', element: <SecondAppRouter/>},
    {path: 'secondstep', element: <SecondAppRouter/>},
]