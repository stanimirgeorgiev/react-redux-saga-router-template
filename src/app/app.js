import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { rootRoutes } from '../config/app-factory';
import { Header } from '../lib/controls/header/header';

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
