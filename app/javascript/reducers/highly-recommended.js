import {
  GET_HIGHLY_RECOMMENDED_RECEIVED,
  GET_HIGHLY_RECOMMENDED_DETAIL_RECEIVED
} from "../actions";

const initialState = {
  destinations: [],
  destinationsComingSoon: [],
  destinationsPresentPast: [],
  destination: {}
}

const highlyRecommended = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_HIGHLY_RECOMMENDED_RECEIVED: {
      return {
        ...state,
        destinations: payload.destinations,
        destinationsComingSoon: payload.destinationsComingSoon,
        destinationsPresentPast: payload.destinationsPresentPast
      }
    }

    case GET_HIGHLY_RECOMMENDED_DETAIL_RECEIVED: {
      return {
        ...state,
        destination: payload.destination
      }
    }

    default: {
      return state;
    }
  }
};

export default highlyRecommended;
