import {
  DEACTIVATE_WELCOME_SCREEN,
  GET_ABOUT_PAGE,
  GET_CONTACT_PAGE,
  GET_HIGHLY_CONVERSATIONS,
  GET_HIGHLY_CONVERSATIONS_DETAIL,
  GET_HIGHLY_RECOMMENDED,
  GET_HIGHLY_RECOMMENDED_DETAIL,
  GET_HIGHLY_RECOMMENDED_LANDING,
  GET_HIGHLY_REPORTS,
  GET_HOME_PAGE,
  GET_NAVIGATION_LINK,
  GET_PHILOSOPHY,
  GET_POPUP,
  GET_PRIVACY_POLICY,
  GET_TERMS_AND_CONDITIONS,

  getAboutPageReceived,
  getContactPageReceived,
  getHighlyConversationsDetailReceived,
  getHighlyConversationsReceived,
  getHighlyRecommendedDetailReceived,
  getHighlyRecommendedLandingReceived,
  getHighlyRecommendedReceived,
  getHighlyReportsReceived,
  getHomePageReceived,
  getNavigationLinkReceived,
  getPhilosophyReceived,
  getPopupReceived,
  getPrivacyPolicyReceived,
  getTermsAndConditionsReceived
} from '../actions'

export default ({ dispatch, getState }) => {
  return next => action => {
    const { type, payload } = action
    const state = getState()
    const credentials = 'same-origin'

    switch (type) {
      case DEACTIVATE_WELCOME_SCREEN: {

        localStorage.setItem('isOlderThan21', true)
        break
      }

      case GET_ABOUT_PAGE: {
        fetch('/api/about_page', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getAboutPageReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_CONTACT_PAGE: {
        fetch('/api/contact_page', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getContactPageReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_HIGHLY_CONVERSATIONS: {
        fetch('/api/categories/highly-conversations', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyConversationsReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_HIGHLY_CONVERSATIONS_DETAIL: {
        const { id } = payload

        fetch(`/api/posts/${id}`, { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyConversationsDetailReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_HIGHLY_RECOMMENDED: {
        fetch('/api/destinations', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyRecommendedReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_HIGHLY_RECOMMENDED_DETAIL: {
        const { id } = payload

        fetch(`/api/destinations/${id}`, { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyRecommendedDetailReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_HIGHLY_RECOMMENDED_LANDING: {
        fetch(`/api/recommended_landing`, { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyRecommendedLandingReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_HIGHLY_REPORTS: {
        fetch('/api/categories/highly-reports', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHighlyReportsReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_HOME_PAGE: {
        fetch('/api/home_page', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getHomePageReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_NAVIGATION_LINK: {
        const { slug } = payload;
        switch (slug) {
          case 'conversations': {
            fetch('/api/posts', { credentials })
            .then(response => response.json())
            .then(json => {
              const post = json.posts[0]
              const section = 'conversations'
              const { slug } = post
              const href = `/conversations/${slug}`
              const navigationLink = { section, href }
              dispatch(getNavigationLinkReceived({navigationLink}))
            }).catch(error => {
              console.error(error)
            })

            break
          }
          case 'recommended': {
            fetch('/api/destinations', { credentials })
            .then(response => response.json())
            .then(json => {
              const destination = json.destinationsPresentPast[0]
              const section = 'recommended'
              const { slug } = destination
              const href = `/recommended/${slug}`
              const navigationLink = { section, href }
              dispatch(getNavigationLinkReceived({navigationLink}))
            }).catch(error => {
              console.error(error)
            })

            break
          }
        }
        break
      }

      case GET_PRIVACY_POLICY: {
        fetch('/api/privacy_policy', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getPrivacyPolicyReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_TERMS_AND_CONDITIONS: {
        fetch('/api/terms_and_conditions', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getTermsAndConditionsReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_PHILOSOPHY: {
        fetch('/api/philosophy_page', { credentials })
        .then(response => response.json())
        .then(json => {
          console.log({json})
          console.log('GET_PHILOSOPHY_SERVICE')
          dispatch(getPhilosophyReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

      case GET_POPUP: {
        fetch('/api/popup', { credentials })
        .then(response => response.json())
        .then(json => {
          dispatch(getPopupReceived(json))
        }).catch(error => {
          console.error(error)
        })
        break
      }

    }
    return next(action)
  }
}