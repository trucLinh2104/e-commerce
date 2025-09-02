import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { setupRoutes } from './routes';
import Header from '/src/component/common/header/Header.jsx';
import Footer from '/src/component/common/footer/Footer.jsx';


const AppRoutes = () => {
    const isAuthenticated = true; // Replace with actual auth logic
    const routes = setupRoutes(isAuthenticated);
    return useRoutes(routes);
};

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <AppRoutes />
            <Footer></Footer>
        </BrowserRouter>
    );
}

export default App;
