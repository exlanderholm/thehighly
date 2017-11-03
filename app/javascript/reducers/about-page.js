import {
  GET_ABOUT_PAGE_RECEIVED
} from "../actions"

const initialState = {
  id: '',
  title: '',
  intro: '',
  content: '',
  featuredImage: '',
}

const aboutPage = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ABOUT_PAGE_RECEIVED: {
      return {
        ...state,
        ...payload.aboutPage
      }
    }

    default: {
      return state;
    }
  }
}

export default aboutPage