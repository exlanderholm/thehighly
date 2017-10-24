import React from 'react'
import { connect } from 'react-redux'
import RecommendedDetail from '../components/RecommendedDetail'

import {
  getHighlyRecommendedDetail
} from '../actions'

class RecommendedDetailContainer extends React.Component {
  render() {
    return <RecommendedDetail {...this.props} />
  }
}

const mapStateToProps = ({highlyRecommended}) => {
  const { destination } = highlyRecommended
  return destination
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlyConversationsDetail: ({id}) => {
      dispatch(getHighlyConversationsDetail({id}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedDetailContainer)