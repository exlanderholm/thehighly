import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'

class FooterContainer extends React.Component {
  render() {
    return <Footer {...this.props} />
  }
}

const mapStateToProps = ({router}) => {
  const { location } = router
  const { pathname } = location

  var backgroundColor = ''
  switch(pathname.split("/")[1]) {
    case 'about': {
      backgroundColor = '#efeddd'
      break
    }
    case 'recommended': {
      backgroundColor = '#F6F2E9'
      break
    }
    case 'conversations': {
      backgroundColor = '#dfccc8'
      break
    }
    default: {
      backgroundColor = 'transparent'
      break
    }
  }
  if (pathname === "/") {
    backgroundColor = '#e8ece3'
  }

  return {
    backgroundColor
  }
}

export default connect(mapStateToProps)(FooterContainer)