import { GET_HIGHLY_CONVERSATIONS_RECEIVED } from "../actions";

const initialState = { posts: [] }

const highlyConversations = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_HIGHLY_CONVERSATIONS_RECEIVED: {
      return {
        ...state,
        posts: payload.posts
      }
    }
    default: {
      return state;
    }
  }
};

export default highlyConversations;
