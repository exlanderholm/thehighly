import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'

import { openPopup } from '../actions'

class FooterContainer extends React.Component {
  render() {
    return <Footer {...this.props} />
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    openPopup: () => dispatch(openPopup()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer)
