import {
  GET_HIGHLY_CONVERSATIONS_RECEIVED,
  GET_HIGHLY_CONVERSATIONS_DETAIL_RECEIVED
} from "../actions";

const initialState = {
  intro: `Delve into the minds and ideas charting this new frontier.`,
  posts: [],
  post: {
    featuredImage: {
      url: ''
    }
  },
  isLoading: true
}

const highlyConversations = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_HIGHLY_CONVERSATIONS_RECEIVED: {
      return {
        ...state,
        posts: payload.posts,
        isLoading: false
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
