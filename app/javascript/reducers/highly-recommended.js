import { GET_HIGHLY_RECOMMENDED_RECEIVED } from "../actions";

const initialState = { highlyRecommended: ['f', 'a', 'c', 'e'] }

const highlyRecommended = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_HIGHLY_RECOMMENDED_RECEIVED: {
      return {
        ...state,
        highlyRecommended: payload.posts
      }
    }
    default: {
      return state;
    }
  }
};

export default highlyRecommended;
