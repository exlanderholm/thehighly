// Action Types
export const OPEN_NAVIGATION = 'OPEN_NAVIGATION'
export const CLOSE_NAVIGATION = 'CLOSE_NAVIGATION'
export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION'

export const GET_NAVIGATION_LINK = 'GET_NAVIGATION_LINK'
export const GET_NAVIGATION_LINK_RECEIVED = 'GET_NAVIGATION_LINK_RECEIVED'

export const GET_HOME_PAGE = 'GET_HOME_PAGE'
export const GET_HOME_PAGE_RECEIVED = 'GET_HOME_PAGE_RECEIVED'

export const GET_HIGHLY_RECOMMENDED_LANDING = 'GET_HIGHLY_RECOMMENDED_LANDING'
export const GET_HIGHLY_RECOMMENDED_LANDING_RECEIVED = 'GET_HIGHLY_RECOMMENDED_LANDING_RECEIVED'

export const GET_HIGHLY_RECOMMENDED = 'GET_HIGHLY_RECOMMENDED'
export const GET_HIGHLY_RECOMMENDED_RECEIVED = 'GET_HIGHLY_RECOMMENDED_RECEIVED'

export const GET_HIGHLY_RECOMMENDED_DETAIL = 'GET_HIGHLY_RECOMMENDED_DETAIL'
export const GET_HIGHLY_RECOMMENDED_DETAIL_RECEIVED = 'GET_HIGHLY_RECOMMENDED_DETAIL_RECEIVED'

export const GET_HIGHLY_CONVERSATIONS = 'GET_HIGHLY_CONVERSATIONS'
export const GET_HIGHLY_CONVERSATIONS_RECEIVED = 'GET_HIGHLY_CONVERSATIONS_RECEIVED'

export const GET_HIGHLY_CONVERSATIONS_DETAIL = 'GET_HIGHLY_CONVERSATIONS_DETAIL'
export const GET_HIGHLY_CONVERSATIONS_DETAIL_RECEIVED = 'GET_HIGHLY_CONVERSATIONS_DETAIL_RECEIVED'

export const GET_HIGHLY_REPORTS = 'GET_HIGHLY_REPORTS'
export const GET_HIGHLY_REPORTS_RECEIVED = 'GET_HIGHLY_REPORTS_RECEIVED'

export const GET_ABOUT_PAGE = 'GET_ABOUT_PAGE'
export const GET_ABOUT_PAGE_RECEIVED = 'GET_ABOUT_PAGE_RECEIVED'

export const GET_CONTACT_PAGE = 'GET_CONTACT_PAGE'
export const GET_CONTACT_PAGE_RECEIVED = 'GET_CONTACT_PAGE_RECEIVED'

export const GET_PRIVACY_POLICY = 'GET_PRIVACY_POLICY'
export const GET_PRIVACY_POLICY_RECEIVED = 'GET_PRIVACY_POLICY_RECEIVED'

export const GET_TERMS_AND_CONDITIONS = 'GET_TERMS_AND_CONDITIONS'
export const GET_TERMS_AND_CONDITIONS_RECEIVED = 'GET_TERMS_AND_CONDITIONS_RECEIVED'

export const GET_PHILOSOPHY = 'GET_PHILOSOPHY'
export const GET_PHILOSOPHY_RECEIVED = 'GET_PHILOSOPHY_RECEIVED'

export const OPEN_POPUP = 'OPEN_POPUP'
export const CLOSE_POPUP = 'CLOSE_POPUP'
export const GET_POPUP = 'GET_POPUP'
export const GET_POPUP_RECEIVED = 'GET_POPUP_RECEIVED'

export const DEACTIVATE_WELCOME_SCREEN = 'DEACTIVATE_WELCOME_SCREEN'

// Action Creators
export const openNavigation = () => {
  return {
    type: OPEN_NAVIGATION
  }
}

export const closeNavigation = () => {
  return {
    type: CLOSE_NAVIGATION
  }
}

export const toggleNavigation = () => {
  return {
    type: TOGGLE_NAVIGATION
  }
}

export const getNavigationLink = ({slug}) => {
  return {
    type: GET_NAVIGATION_LINK,
    payload: {
      slug
    }
  }
}

export const getNavigationLinkReceived = ({navigationLink}) => {
  return {
    type: GET_NAVIGATION_LINK_RECEIVED,
    payload: {
      navigationLink
    }
  }
}

export const getHomePage = () => {
  return {
    type: GET_HOME_PAGE
  }
}

export const getHomePageReceived = ({homePage}) => {
  return {
    type: GET_HOME_PAGE_RECEIVED,
    payload: {
      homePage
    }
  }
}

export const getHighlyRecommendedLanding = () => {
  return {
    type: GET_HIGHLY_RECOMMENDED_LANDING
  }
}

export const getHighlyRecommendedLandingReceived = ({recommendedLanding}) => {
  return {
    type: GET_HIGHLY_RECOMMENDED_LANDING_RECEIVED,
    payload: {
      recommendedLanding
    }
  }
}

export const getHighlyRecommended = () => {
  return {
    type: GET_HIGHLY_RECOMMENDED
  }
}

export const getHighlyRecommendedReceived = ({destinations, destinationsComingSoon, destinationsPresentPast}) => {
  return {
    type: GET_HIGHLY_RECOMMENDED_RECEIVED,
    payload: {
      destinations,
      destinationsComingSoon,
      destinationsPresentPast
    }
  }
}

export const getHighlyRecommendedDetail = ({id}) => {
  return {
    type: GET_HIGHLY_RECOMMENDED_DETAIL,
    payload: {
      id
    }
  }
}

export const getHighlyRecommendedDetailReceived = ({destination}) => {
  return {
    type: GET_HIGHLY_RECOMMENDED_DETAIL_RECEIVED,
    payload: {
      destination
    }
  }
}

export const getHighlyConversations = () => {
  return {
    type: GET_HIGHLY_CONVERSATIONS
  }
}

export const getHighlyConversationsReceived = ({posts}) => {
  return {
    type: GET_HIGHLY_CONVERSATIONS_RECEIVED,
    payload: {
      posts
    }
  }
}

export const getHighlyConversationsDetail = ({id}) => {
  return {
    type: GET_HIGHLY_CONVERSATIONS_DETAIL,
    payload: {
      id
    }
  }
}

export const getHighlyConversationsDetailReceived = ({post}) => {
  return {
    type: GET_HIGHLY_CONVERSATIONS_DETAIL_RECEIVED,
    payload: {
      post
    }
  }
}


export const getHighlyReports = () => {
  return {
    type: GET_HIGHLY_REPORTS
  }
}

export const getHighlyReportsReceived = () => {
  return {
    type: GET_HIGHLY_REPORTS_RECEIVED
  }
}

export const getAboutPage = () => {
  return {
    type: GET_ABOUT_PAGE
  }
}

export const getAboutPageReceived = ({aboutPage}) => {
  return {
    type: GET_ABOUT_PAGE_RECEIVED,
    payload: {
      aboutPage
    }
  }
}

export const getContactPage = () => {
  return {
    type: GET_CONTACT_PAGE
  }
}

export const getContactPageReceived = ({contactPage}) => {
  return {
    type: GET_CONTACT_PAGE_RECEIVED,
    payload: {
      contactPage
    }
  }
}

export const getPrivacyPolicy = () => {
  return {
    type: GET_PRIVACY_POLICY
  }
}

export const getPrivacyPolicyReceived = ({privacyPolicy}) => {
  return {
    type: GET_PRIVACY_POLICY_RECEIVED,
    payload: {
      privacyPolicy
    }
  }
}

export const getTermsAndConditions = () => {
  return {
    type: GET_TERMS_AND_CONDITIONS
  }
}

export const getTermsAndConditionsReceived = ({termsAndConditions}) => {
  return {
    type: GET_TERMS_AND_CONDITIONS_RECEIVED,
    payload: {
      termsAndConditions
    }
  }
}

export const getPhilosophy = () => {
  return {
    type: GET_PHILOSOPHY
  }
}

export const getPhilosophyReceived = ({philosophy}) => {
  return {
    type: GET_PHILOSOPHY_RECEIVED,
    payload: {
      philosophy
    }
  }
}

export const openPopup = () => {
  return {
    type: OPEN_POPUP
  }
}

export const closePopup = () => {
  return {
    type: CLOSE_POPUP
  }
}

export const getPopup = () => {
  return {
    type: GET_POPUP
  }
}

export const getPopupReceived = ({popup}) => {
  return {
    type: GET_POPUP_RECEIVED,
    payload: {
      popup
    }
  }
}

export const deactivateWelcomeScreen = () => {
  return {
    type: DEACTIVATE_WELCOME_SCREEN
  }
}
