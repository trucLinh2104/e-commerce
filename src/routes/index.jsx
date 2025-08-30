import { publicRoutes } from './publicRoutes';
import { privateRoutes } from './privateRoutes.jsx';
import { PrivateRoute } from './RouteWrapper';

export const setupRoutes = (isAuthenticated) => [
    {
        element: <PrivateRoute isAuthenticated={isAuthenticated} />,
        children: privateRoutes,
    },
    ...publicRoutes,
];
