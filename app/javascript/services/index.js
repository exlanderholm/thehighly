import {
  GET_HIGHLY_RECOMMENDED,
  GET_HIGHLY_CONVERSATIONS,
  GET_HIGHLY_REPORTS,
  getHighlyRecommendedReceived,
  getHighlyConversationsReceived,
  getHighlyReportsReceived
} from '../actions'

export default ({ dispatch, getState }) => {
  return next => action => {

    const { type } = action

    switch (type) {
      case GET_HIGHLY_RECOMMENDED: {
        const credentials = 'same-origin'
        fetch('/api/categories/highly-recommended', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyRecommendedReceived(json))
        }).catch(error => {
          console.error(error);
        })
        break;
      }

      case GET_HIGHLY_CONVERSATIONS: {
        const credentials = 'same-origin'
        fetch('/api/categories/highly-conversations', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyConversationsReceived(json))
        }).catch(error => {
          console.error(error);
        })
        break;
      }

      case GET_HIGHLY_REPORTS: {
        const credentials = 'same-origin'
        fetch('/api/categories/highly-reports', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyReportsReceived(json))
        }).catch(error => {
          console.error(error);
        })
        break;
      }
    }
    return next(action)
  }
}