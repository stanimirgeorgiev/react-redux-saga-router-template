import axios from 'axios';

import { TASKS_URL } from '../constants/urls';

export const getTasks = () => {
    return axios.get(TASKS_URL);
};
