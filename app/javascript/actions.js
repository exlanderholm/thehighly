// Action Types
export const OPEN_NAVIGATION = 'OPEN_NAVIGATION'
export const CLOSE_NAVIGATION = 'CLOSE_NAVIGATION'

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

export const getHighlyRecommended = () => {
  return {
    type: GET_HIGHLY_RECOMMENDED
  }
}

export const getHighlyRecommendedReceived = ({destinations}) => {
  return {
    type: GET_HIGHLY_RECOMMENDED_RECEIVED,
    payload: {
      destinations
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
