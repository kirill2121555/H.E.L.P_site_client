import React from 'react'
import Login from '../Authorization/Login';
import Logout from '../Authorization/Logout'
import Registration from '../Authorization/Registration'
import Loginafterregistration from '../Authorization/Loginafterregistration'
import RecoveryPassword from '../Authorization/RecoveryPassword'
import RemovePassword from '../Authorization/RemovePassword'
import Profil from '../Profile/Profil'
import RequesеForAddPH from '../Profile/Requesе/RequesеForAddPH';
import MainPageCH from '../Posts/CanHelp/MainPageCH';
import MainPagePHH from '../Posts/PostHumHelp/MainPagePHH';
import FullPostCH from '../Posts/CanHelp/FullPostCH';
import FullPostNH from '../Posts/NeedHelp/FullPostNH';
import AddPH from '../Profile/AddPosts/AddPH';
import UpdateCH from '../Profile/UpdatePosts/UpdateCH';
import UpdateNH from '../Profile/UpdatePosts/UpdateNH';
import AddCH from '../Profile/AddPosts/AddCH';
import AddNH from '../Profile/AddPosts/AddNH';
import MainPageNH from '../Posts/NeedHelp/MainPageNH';
import FullPostPHH from '../Posts/PostHumHelp/FullPostPHH';
import Chat from '../Chat/Chat';
import Dialogs from '../Chat/Dialogs';
import Setings from '../Profile/Setings/Setings';
import MainPage from '../Posts/Main/MainPage';
import AddBlogPost from '../Posts/Blog/AddBlogPost';
import FullBlogPost from '../Posts/Blog/FullBlogPost';

export const publicRoutes = [
    {
        path: "/",
        Element: <MainPagePHH />
    },
    {
        path: "/gum",
        Element: <MainPagePHH />
    },
    {
        path: "/gum/:id",
        Element: <FullPostPHH />
    },
    {
        path: "/ch",
        Element: <MainPageCH />
    },
    {
        path: "/ch/:id",
        Element: <FullPostCH />
    },
    {
        path: "/nh",
        Element: <MainPageNH />
    },
    {
        path: "/nh/:id",
        Element: <FullPostNH />
    },
    {
        path: "/login",
        Element: <Login />
    },
    {
        path: "/loginn",
        Element: <Loginafterregistration />
    },
    {
        path: "/registration",
        Element: <Registration />
    },
    {
        path: "/recoveryPassword",
        Element: <RecoveryPassword />
    },
    {
        path: "/removePassword/:id",
        Element: <RemovePassword />
    },
    {
        path: "/main",
        Element: <MainPage />
    },
]

export const authRoutes = [
    {
        path: "/nha",
        Element: < MainPageNH />
    },
    {
        path: "/addneedhelp",
        Element: <AddNH />
    },
    {
        path: "/cha",
        Element: <MainPageCH />
    },
    {
        path: "/addcanhelp",
        Element: <AddCH />
    },
    {
        path: "/logout",
        Element: <Logout />
    },
    {
        path: "/profil",
        Element: <Profil />
    },
    {
        path: "/nhupdate/:id",
        Element: <UpdateNH />
    },
    {
        path: "/chupdate/:id",
        Element: <UpdateCH />
    },
    {
        path: "/chat",
        Element: <Dialogs />
    },
    {
        path: "/chat/:id",
        Element: <Chat />
    },
    {
        path: "/addpointhelp",
        Element: <AddPH />
    },
    {
        path: '/rfaph',
        Element: <RequesеForAddPH />
    },
    {
        path: "/setings",
        Element: < Setings />
    },
    {
        path: "/main",
        Element: <MainPage />
    },
    {
        path: "/addblogpost",
        Element: <AddBlogPost />
    },
    {
        path: "/blogpost/:id",
        Element: <FullBlogPost />
    },
]