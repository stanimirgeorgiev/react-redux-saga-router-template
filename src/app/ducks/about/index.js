import React from 'react';
import { Route } from 'react-router-dom';

import { aboutRoute } from './constants/routes';
import { About } from './views/about';
export { ABOUT_ID } from './constants/common';

export default {
  component: About,
  path: aboutRoute,
  route: () => (
    <Route path={aboutRoute}>
      <About />
    </Route>
  ),
};
