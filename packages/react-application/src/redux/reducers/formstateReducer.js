import ACTION_TYPES from '../types';

const initialState = {
  name: null,
};

const formState = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  };
};

export default formState;