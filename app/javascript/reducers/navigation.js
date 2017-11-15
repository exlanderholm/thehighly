import {
  TOGGLE_NAVIGATION,
  GET_NAVIGATION_LINK_RECEIVED
} from "../actions"

const initialState = {
  isOpen: false,
  navigationLinks: {
    recommended: '/recommended',
    conversations: '/conversations'
  }
}

const navigation = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case TOGGLE_NAVIGATION: {
      if (state.isOpen) {
        return {
          ...state,
          isOpen: false
        }
      } else {
        return {
          ...state,
          isOpen: true
        }
      }
    }

    // case OPEN_NAVIGATION: {
    //   return {
    //     ...state,
    //     isOpen: true
    //   }
    // }
    // case CLOSE_NAVIGATION: {
    //   return {
    //     ...state,
    //     isOpen: false
    //   }
    // }

    case GET_NAVIGATION_LINK_RECEIVED: {
      const { navigationLink } = payload
      const { section, href } = navigationLink
      var navigationLinks = state.navigationLinks
      navigationLinks[navigationLink.section] = href
      return {
        ...state,
        navigationLinks
      }
    }

    default: {
      return state;
    }
  }
};

export default navigation