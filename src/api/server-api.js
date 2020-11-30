import axios from 'axios';

import { USERS_URL, TODOS_URL } from '../constants/urls';

const getUsers = () => {
    return axios.get(USERS_URL);
};

const getTodos = () => {
    return axios.get(TODOS_URL);
};

export { getUsers, getTodos };
