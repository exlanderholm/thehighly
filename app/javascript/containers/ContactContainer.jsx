import React, { Component } from 'react'
import { connect } from 'react-redux'
import Contact from '../components/Contact'

import {
  getContactPage
} from '../actions'

class ContactContainer extends React.Component {
  componentDidMount() {
    this.props.getContactPage()
  }

  render() {
    return <Contact {...this.props} />
  }
}

const mapStateToProps = (state) => {
  const { contactPage } = state

  return {
    ...contactPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getContactPage: () => dispatch(getContactPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);