import { GET_PHILOSOPHY_RECEIVED } from '../actions'

const initialState = {
  id: '',
  title: '',
  body: '',
  sections: [],
  bottomOutro: ''
}

const philosophy = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PHILOSOPHY_RECEIVED: {
      return {
        ...state,
        ...payload.philosophy
      }
    }

    default: {
      return state
    }
  }
}

export default philosophy