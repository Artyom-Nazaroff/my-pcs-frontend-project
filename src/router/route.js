import React from "react";
import About from "../pages/About";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Login from "../pages/Login/Login";
import Friends from "../pages/Friends/Friends";
import FriendProfile from "../pages/FriendProfile";

export const privateRoutes = [
    {path: 'about', element: <About/>},
    {path: 'posts', element: <Posts/>},
    {path: 'posts/:id', element: <PostPage/>},
    {path: 'friends', element: <Friends/>},
    {path: 'friends/:id', element: <FriendProfile/>},
    {path: '*', element: <Error/>},
]

export const publicRoutes = [
    {path: 'login', element: <Login/>},
    {path: '*', element: <Login/>},
]