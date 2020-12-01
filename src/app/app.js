import React from 'react';
import { rootRoutes } from '../config/app-factory';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from '../controls/header/header';

import './app.css';

export const App = () => {
    const routes = rootRoutes.map((AppRoute, index) => {
        return <AppRoute key={index} />;
    });
    return (
        <>
            <Router>
                <Header />
                {routes}
            </Router>
        </>
    );
};
