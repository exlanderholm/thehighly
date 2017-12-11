import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPhilosophy } from '../actions'
import Philosophy from '../components/philosophy'

class PhilosophyContainer extends Component {
  componentDidMount() {
    this.props.getPhilosophy()
  }

  render() {
    return <Philosophy {...this.props} />
  }
}

const mapStateToProps = ({philosophy}) => {
  return {
    ...philosophy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhilosophy: () => dispatch(getPhilosophy())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhilosophyContainer)