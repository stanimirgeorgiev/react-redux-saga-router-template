import About from './ducks/about';
import { ABOUT_ID } from './ducks/about/constants/common';

import Tasks from './ducks/tasks';
import { TASKS_ID } from './ducks/tasks/constants/common';

export default {
  [TASKS_ID]: Tasks,
  [ABOUT_ID]: About,
};
