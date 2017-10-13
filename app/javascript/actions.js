// Action Types
export const OPEN_NAVIGATION = 'OPEN_NAVIGATION'
export const CLOSE_NAVIGATION = 'CLOSE_NAVIGATION'
export const GET_HIGHLY_RECOMMENDED = 'GET_HIGHLY_RECOMMENDED'
export const GET_HIGHLY_RECOMMENDED_RECEIVED = 'GET_HIGHLY_RECOMMENDED_RECEIVED'
export const GET_HIGHLY_CONVERSATIONS = 'GET_HIGHLY_CONVERSATIONS'
export const GET_HIGHLY_CONVERSATIONS_RECEIVED = 'GET_HIGHLY_CONVERSATIONS_RECEIVED'
export const GET_HIGHLY_REPORTS = 'GET_HIGHLY_REPORTS'
export const GET_HIGHLY_REPORTS_RECEIVED = 'GET_HIGHLY_REPORTS_RECEIVED'

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

export const getHighlyRecommendedReceived = ({posts}) => {
  return {
    type: GET_HIGHLY_RECOMMENDED_RECEIVED,
    payload: {
      posts
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
