import {
  GET_HIGHLY_CONVERSATIONS_RECEIVED,
  GET_HIGHLY_CONVERSATIONS_DETAIL_RECEIVED
} from "../actions";

const initialState = {
  posts: [],
  post: {
    featuredImage: {
      url: ''
    }
  }
}

const highlyConversations = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_HIGHLY_CONVERSATIONS_RECEIVED: {
      console.log(payload.posts);
      return {
        ...state,
        posts: payload.posts
      }
    }

    case GET_HIGHLY_CONVERSATIONS_DETAIL_RECEIVED: {
      return {
        ...state,
        post: payload.post
      }
    }

    default: {
      return state;
    }
  }
};

export default highlyConversations;
