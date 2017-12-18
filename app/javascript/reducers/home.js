import {
  GET_HOME_PAGE_RECEIVED
} from "../actions"

const initialState = {
  id: '',
  title: '',
  content: '',
}

const homePage = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_HOME_PAGE_RECEIVED: {
      return {
        ...state,
        ...payload.homePage
      }
    }

    default: {
      return state;
    }
  }
}

export default homePage