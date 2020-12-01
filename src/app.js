import React from 'react';
import { rootComponents } from './config/app-factory';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './controls/header/header';

import './app.css';

export const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        {rootComponents.map((Component, index) => {
                            return <Component key={index} />;
                        })}
                    </Route>
                    <Route path="/about">About</Route>
                </Switch>
            </Router>
        </>
    );
};
