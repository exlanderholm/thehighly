import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPrivacyPolicy } from '../actions'
import PrivacyPolicy from '../components/PrivacyPolicy'

class PrivacyPolicyContainer extends Component {
  componentDidMount() {
    this.props.getPrivacyPolicy()
  }

  render() {
    return <PrivacyPolicy {...this.props} />
  }
}

const mapStateToProps = (state) => {
  const { privacyPolicy } = state

  return {
    ...privacyPolicy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPrivacyPolicy: () => dispatch(getPrivacyPolicy())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicyContainer)