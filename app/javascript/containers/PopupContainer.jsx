import React, { Component } from 'react'
import { connect } from 'react-redux'

import Popup from '../components/Popup'

import {
  getPopup,
  closePopup
} from '../actions'

class PopupContainer extends React.Component {
  componentDidMount() {
    this.props.getPopup()
  }

  render() {
    return <Popup {...this.props } />
  }
}

const mapStateToProps = ({popup}) => {
  return {
    ...popup
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPopup: () => dispatch(getPopup()),
    closePopup: () => dispatch(closePopup())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer)