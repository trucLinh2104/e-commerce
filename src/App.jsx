import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { setupRoutes } from './routes';

const AppRoutes = () => {
    const isAuthenticated = true; // Replace with actual auth logic
    const routes = setupRoutes(isAuthenticated);
    return useRoutes(routes);
};

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
