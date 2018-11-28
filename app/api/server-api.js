import axios from 'axios';

import {USERS_URL} from '../constants/urls';

const getUsers = () => {
  return axios.get(USERS_URL);
};

export {
  getUsers,
};


