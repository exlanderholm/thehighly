import {
  GET_ABOUT_PAGE,
  GET_CONTACT_PAGE,
  GET_HIGHLY_CONVERSATIONS,
  GET_HIGHLY_CONVERSATIONS_DETAIL,
  GET_HIGHLY_RECOMMENDED,
  GET_HIGHLY_RECOMMENDED_DETAIL,
  GET_HIGHLY_REPORTS,
  GET_PRIVACY_POLICY,
  GET_TERMS_AND_CONDITIONS,
  DEACTIVATE_WELCOME_SCREEN,

  getAboutPageReceived,
  getContactPageReceived,
  getHighlyRecommendedDetailReceived,
  getHighlyRecommendedReceived,
  getHighlyConversationsDetailReceived,
  getHighlyConversationsReceived,
  getHighlyReportsReceived,
  getPrivacyPolicyReceived,
  getTermsAndConditionsReceived
} from '../actions'

export default ({ dispatch, getState }) => {
  return next => action => {
    const { type, payload } = action
    const state = getState();

    switch (type) {
      case GET_HIGHLY_RECOMMENDED: {
        const credentials = 'same-origin'
        fetch('/api/destinations', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyRecommendedReceived(json))
        }).catch(error => {
          console.error(error);
        })
        break;
      }

      case GET_HIGHLY_RECOMMENDED_DETAIL: {
        const { id } = payload;
        const credentials = 'same-origin';

        fetch(`/api/destinations/${id}`, { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyRecommendedDetailReceived(json))
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

      case GET_HIGHLY_CONVERSATIONS_DETAIL: {
        const { id } = payload;

        const credentials = 'same-origin'
        fetch(`/api/posts/${id}`, { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyConversationsDetailReceived(json))
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

      case GET_ABOUT_PAGE: {
        const credentials = 'same-origin'
        fetch('/api/about_page', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getAboutPageReceived(json))
        }).catch(error => {
          console.error(error);
        })
        break;
      }

      case GET_CONTACT_PAGE: {
        const credentials = 'same-origin'
        fetch('/api/contact_page', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getContactPageReceived(json))
        }).catch(error => {
          console.error(error);
        })
        break;
      }

      case GET_PRIVACY_POLICY: {
        const credentials = 'same-origin'
        fetch('/api/privacy_policy', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getPrivacyPolicyReceived(json))
        }).catch(error => {
          console.error(error);
        })
        break;
      }

      case GET_TERMS_AND_CONDITIONS: {
        const credentials = 'same-origin'
        fetch('/api/terms_and_conditions', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getTermsAndConditionsReceived(json))
        }).catch(error => {
          console.error(error);
        })
        break;
      }

      case DEACTIVATE_WELCOME_SCREEN: {
        console.log('deactivating');
        localStorage.setItem('isOlderThan21', true)
        break;
      }
    }
    return next(action)
  }
}