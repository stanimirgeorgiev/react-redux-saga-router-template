import { get } from 'axios';

import { TASKS_URL } from '../constants/urls';

export const getTasks = () => {
    return get(TASKS_URL);
};
