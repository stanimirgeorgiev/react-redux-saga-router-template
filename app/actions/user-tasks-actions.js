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

export {
  openUserSection,
  closeUserSection
}
