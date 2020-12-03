import About from './about';
import { ABOUT_MODULE_NAME } from './about/constants/common';

import Tasks from './tasks';
import { TASKS_MODULE_NAME } from './tasks/constants/common';

export default {
  [TASKS_MODULE_NAME]: Tasks,
  [ABOUT_MODULE_NAME]: About,
};
