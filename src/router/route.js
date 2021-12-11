import React from "react";
import About from "../pages/About";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import LoginPage from "../pages/LoginPage/LoginPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: 'about', element: <About/>},
    {path: 'posts', element: <Posts/>},
    {path: 'posts/:id', element: <PostPage/>},
    {path: '*', element: <Error/>},
]

export const publicRoutes = [
    {path: 'login', element: <Login/>},
    {path: '*', element: <Login/>},
]