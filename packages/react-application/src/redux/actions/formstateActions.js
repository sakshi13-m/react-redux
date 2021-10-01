import ACTION_TYPES from '../types';

const setName = (data) => (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_NAME,
    payload: data
  });
};

export default setName;
