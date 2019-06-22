// import React from 'react'
import Home from './Views/Home'
import Blogs from './Views/Blogs'
import Detail from './Views/Detail'
import Contact from './Views/Contact'
import Login from './Views/Login'
import NotFound from './Views/NotFound'
import Dashboard from './Views/Dashboard'
import Insert from './Views/Insert'
import Update from './Views/Update'



const routes = [
    {
        path: '/',
        component: Home,
        exact: true

    },
    {
        path: '/blogs',
        component: Blogs,
        exact: true
    },
    {
        path: '/blogs/:id',
        component: Detail,
        exact: true
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/contact',
        component: Contact
    }, 
    {
        path:'/admin/dashboard',
        component: Dashboard,
        auth: true,
        exact: true
    },
    {
        path:'/admin/insert',
        component: Insert,
        auth: true,
        exact: true
    }, 
    {
        path:'/admin/update/:id',
        component: Update,
        auth: true,
        exact: true
    }, 
    {
        component: NotFound
    }
]   

export default routes