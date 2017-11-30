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
      {/* <svg width="32px" height="62px" viewBox="0 0 32 62">
        <polyline fill="none" stroke="#666666" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="31.2,60.8 0.8,31 31.2,1.2 " />
      </svg> */}
      ⟵
    </button>
  )
}

const RightArrow = ({currentSlide, nextSlide, wrapAround}) => {
  return (
    <button style={getButtonStyles(currentSlide === 0 && !wrapAround)} onClick={event => { event.preventDefault(); nextSlide() }}>
      {/* <svg width="32px" height="62px" viewBox="0 0 32 62">
        <polyline fill="none" stroke="#666666" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="0.8,1.2 31.2,31 0.8,60.8 " />
      </svg> */}
      ⟶
    </button>
  )
}

export { LeftArrow, RightArrow }