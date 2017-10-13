import { OPEN_NAVIGATION, CLOSE_NAVIGATION } from "../actions";

const initialState = { isOpen: false }

const navigation = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case OPEN_NAVIGATION: {
      return {
        ...state,
        isOpen: true
      }
    }
    case CLOSE_NAVIGATION: {
      return {
        ...state,
        isOpen: false
      }
    }
    default: {
      return state;
    }
  }
};

export default navigation;
