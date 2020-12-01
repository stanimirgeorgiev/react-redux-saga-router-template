import React from 'react';
import { rootRoutes } from './config/app-factory';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './controls/header/header';

import './app.css';

export const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    {rootRoutes.map((AppRoute, index) => {
                        return <AppRoute key={index} />;
                    })}
                    <Route path="/about">About</Route>
                </Switch>
            </Router>
        </>
    );
};
