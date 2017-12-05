import React from 'react'
import { connect } from 'react-redux'
import Recommended from '../components/Recommended'

import {
  getHighlyRecommended,
  getHighlyRecommendedLanding
} from '../actions'

class RecommendedContainer extends React.Component {
  componentDidMount() {
    this.props.getHighlyRecommended()
    this.props.getHighlyRecommendedLanding()
  }

  render() {
    return <Recommended {...this.props} />
  }
}

const mapStateToProps = ({ highlyRecommended }) => {
  const { destinationsComingSoon, destinationsPresentPast, recommendedLanding } = highlyRecommended

  return {
    ...recommendedLanding,
    destinationsComingSoon,
    destinationsPresentPast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlyRecommended: () => {
      dispatch(getHighlyRecommended())
    },
    getHighlyRecommendedLanding: () => {
      dispatch(getHighlyRecommendedLanding())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedContainer)