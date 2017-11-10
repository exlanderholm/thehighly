import React from 'react'
import { connect } from 'react-redux'
import RecommendedDetail from '../components/RecommendedDetail'

import {
  getHighlyRecommendedDetail
} from '../actions'

class RecommendedDetailContainer extends React.Component {
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getHighlyRecommendedDetail({id})
  }

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
    getHighlyRecommendedDetail: ({id}) => {
      dispatch(getHighlyRecommendedDetail({id}))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RecommendedDetailContainer)