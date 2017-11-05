import React from 'react'
import { connect } from 'react-redux'
import { getTermsAndConditions } from '../actions'
import TermsAndConditions from '../components/TermsAndConditions'

class TermsAndConditionsContainer extends React.Component {
  componentDidMount() {
    this.props.getTermsAndConditions()
  }

  render() {
    return <TermsAndConditions {...this.props} />
  }
}

const mapStateToProps = ({termsAndConditions}) => {
  return {
    ...termsAndConditions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTermsAndConditions: () => dispatch(getTermsAndConditions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConditionsContainer)