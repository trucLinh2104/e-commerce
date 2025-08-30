import Login from '../page/Login/Login.jsx';
import NotFound from '../page/NotFound/NotFound.jsx';
import Home from '../page/Home/Home.jsx';

export const publicRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];
