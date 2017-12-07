import {
  OPEN_POPUP,
  CLOSE_POPUP,
  GET_POPUP_RECEIVED
} from "../actions"

const initialState = {
  isOpen: true,
  backgroundImage: {
    url: ""
  },
  copy: "",
  title: ""
}

const popup = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case OPEN_POPUP: {
      return {
        ...state,
        isOpen: true
      }
    }
    case CLOSE_POPUP: {
      return {
        ...state,
        isOpen: false
      }
    }

    case GET_POPUP_RECEIVED: {
      return {
        ...state,
        ...payload.popup
      }
    }

    default: {
      return state;
    }
  }
};

export default popup