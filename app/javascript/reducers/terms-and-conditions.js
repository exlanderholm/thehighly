import {
  GET_TERMS_AND_CONDITIONS_RECEIVED
} from "../actions"

const initialState = {
  id: '',
  title: '',
  content: '',
}

const termsAndConditions = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_TERMS_AND_CONDITIONS_RECEIVED: {
      return {
        ...state,
        ...payload.termsAndConditions
      }
    }

    default: {
      return state;
    }
  }
}

export default termsAndConditions