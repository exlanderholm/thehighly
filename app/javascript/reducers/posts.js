import { LOAD_POSTS } from "../actions";

const posts = (
  state = { posts: [] },
  { type, payload }
) => {
  switch (type) {
    case LOAD_POSTS: {
      return {
        ...state,
        posts: payload.posts
      };
    }
    default: {
      return state;
    }
  }
};

export default posts;
