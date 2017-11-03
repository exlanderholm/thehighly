import {
  GET_CONTACT_PAGE_RECEIVED
} from "../actions"

const initialState = {
  id: '',
  title: '',
  intro: '',
  content: '',
  featuredImage: '',
}

const contactPage = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_CONTACT_PAGE_RECEIVED: {
      return {
        ...state,
        ...payload.contactPage
      }
    }

    default: {
      return state;
    }
  }
}

export default contactPage