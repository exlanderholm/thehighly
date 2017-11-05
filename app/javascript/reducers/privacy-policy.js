import {
  GET_PRIVACY_POLICY_RECEIVED
} from "../actions"

const initialState = {
  id: '',
  title: '',
  content: '',
}

const privacyPolicy = (state = initialState, action) => {
  const { type, payload } = action


  switch (type) {
    case GET_PRIVACY_POLICY_RECEIVED: {
      return {
        ...state,
        ...payload.privacyPolicy
      }
    }

    default: {
      return state;
    }
  }
}

export default privacyPolicy