import Home from './Views/Home'
import Blogs from './Views/Blogs'
import Detail from './Views/Detail'
import Contact from './Views/Contact'
import NotFound from './Views/NotFound'

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
    },
    {
        path: '/contact',
        component: Contact
    },   
    {
        component: NotFound
    }
]   

export default routes