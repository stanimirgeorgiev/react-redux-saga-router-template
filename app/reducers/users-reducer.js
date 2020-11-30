//import {userData} from '../utils/mocked-data';
import { ActionTypes } from '../constants/action-types';

const initialUsersState = {
    userData: [],
    //userData,
    isOpened: true,
    selectedUserId: null,
};

const users = (state = initialUsersState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.OPEN_USER_SECTION: {
            return { ...state, isOpened: true };
        }
        case ActionTypes.CLOSE_USER_SECTION: {
            return { ...state, isOpened: false };
        }
        case ActionTypes.CLICK_ON_USER: {
            return { ...state, selectedUserId: payload.selectedUserId };
        }
        case ActionTypes.UPDATE_USER_AND_DATA: {
            return { ...state, ...payload };
        }
        case ActionTypes.USERS_RECEIVED: {
            return { ...state, ...payload };
        }
    }

    return state;
};

export default users;
