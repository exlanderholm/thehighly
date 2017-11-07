import { DEACTIVATE_WELCOME_SCREEN } from "../actions"

const initialState = { isActive: true }

const welcome = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case DEACTIVATE_WELCOME_SCREEN: {
      return {
        ...state,
        isActive: false
      }
    }

    default: {
      return state
    }
  }
}

export default welcome
