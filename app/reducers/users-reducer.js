import {userData} from '../utils/mocked-data';
import {ActionTypes} from '../constants/action-tipes';

const initialUsersState = {
  userData,
  isOpened: true,
};

const users = (state = initialUsersState, action) => {
  const {type, paylaod} = action;
  switch (type) {
    case ActionTypes.OPEN_USER_SECTION: {
      return  {...state, isOpened: true};
    }
    case ActionTypes.CLOSE_USER_SECTION: {
      return {...state, isOpened: false};
    }
  }

  return state;
}

export default users;