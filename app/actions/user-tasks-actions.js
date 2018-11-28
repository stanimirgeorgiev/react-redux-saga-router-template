import {ActionTypes} from '../constants/action-tipes';

const openUserSection = () => {
  return {
    type: ActionTypes.OPEN_USER_SECTION,
    payload: {}
  }
};

const closeUserSection = () => {
  return {
    type: ActionTypes.CLOSE_USER_SECTION,
    payload: {}
  }
};

const clickOnUser = (selectedUserId) => {
  return {
    type: ActionTypes.CLICK_ON_USER,
    payload: {selectedUserId}
  }
};

const updateSelectedUserAndData = (selectedUserId, userData) => {
  return {
    type: ActionTypes.UPDATE_USER_AND_DATA,
    payload: {selectedUserId, userData}
  }
};

export {
  openUserSection,
  closeUserSection,
  clickOnUser,
  updateSelectedUserAndData,
}
