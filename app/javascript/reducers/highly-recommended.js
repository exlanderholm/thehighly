import {
  GET_HIGHLY_RECOMMENDED_DETAIL_RECEIVED,
  GET_HIGHLY_RECOMMENDED_LANDING_RECEIVED,
  GET_HIGHLY_RECOMMENDED_RECEIVED
} from "../actions";

const initialState = {
  destinations: [],
  destinationsComingSoon: [],
  destinationsPresentPast: [],
  destination: {
  },
  recommendedLanding: {
    mapIllustration: {
      url: ""
    }
  }
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

    case GET_HIGHLY_RECOMMENDED_LANDING_RECEIVED: {
      return {
        ...state,
        recommendedLanding: payload.recommendedLanding
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
