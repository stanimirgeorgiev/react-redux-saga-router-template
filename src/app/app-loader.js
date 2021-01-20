import About, { ABOUT_ID } from './ducks/about';
import Tasks, { TASKS_ID } from './ducks/tasks';

export default {
  [TASKS_ID]: Tasks,
  [ABOUT_ID]: About,
};
