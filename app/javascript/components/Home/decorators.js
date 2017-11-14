import React from 'react';

const getButtonStyles = (disabled) => {
  return {
    border: 0,
    background: 'transparent',
    padding: 0,
    outline: 0,
    opacity: disabled ? 0.3 : 1,
    cursor: 'pointer'
  }
}

const LeftArrow = ({currentSlide, previousSlide, wrapAround}) => {
  return (
    <button style={getButtonStyles(currentSlide === 0 && !wrapAround)} onClick={event => { event.preventDefault(); previousSlide() }}>
      <svg width="60px" height="80px" viewBox="0 0 50 80">
        <polyline fill="none" stroke="#8E9093" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375" />
      </svg>
    </button>
  )
}

const RightArrow = ({currentSlide, nextSlide, wrapAround}) => {
  return (
    <button style={getButtonStyles(currentSlide === 0 && !wrapAround)} onClick={event => { event.preventDefault(); nextSlide() }}>
      <svg width="60px" height="80px" viewBox="0 0 50 80">
        <polyline fill="none" stroke="#8E9093" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8" />
      </svg>
    </button>
  )
}

export { LeftArrow, RightArrow }