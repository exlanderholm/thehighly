import React from 'react'

import styles from './philosophy.css'

const Philosophy = ({title, body, sections, bottomOutro}) =>
  <div className="philosophy wrapper philosophy-container">
    <div className="wrapper__inner">
      <h1 className="main-title">{title}</h1>
      <div className="philosophy__body" dangerouslySetInnerHTML={createMarkupObject(body)} />
      <div className="sections">
        {sections.map( section => <PhilosophySection {...section} key={section.id} />)}
      </div>
      <div className="philosophy__bottom-outro" dangerouslySetInnerHTML={createMarkupObject(bottomOutro)} />
    </div>
  </div>

const PhilosophySection = ({id, title, body, sections, bottomOutro}) => {
  console.log('PhilosophySection')

  return (
    <div className="philosophy-section" id={id}>
      <h2 className="title"><label htmlFor={`section__${id}`}>{title}</label></h2>

      <input type="checkbox" className="philosophy-section__checkbox" id={`section__${id}`} />

      <div className="philosophy-section__content">
        <div className="philosophy-section__body" dangerouslySetInnerHTML={createMarkupObject(body)} />
        {sections.map( section => <PhilosophySubSection {...section} key={section.id} />)}
        <div className="philosophy-section__bottom-outro" dangerouslySetInnerHTML={createMarkupObject(bottomOutro)} />
      </div>
    </div>
  )
}

const PhilosophySubSection = ({id, title, body, sections, bottomOutro}) =>
  <div className="philosophy-subsection" id={id}>
    <h3 className="philosophy-subsection__title">{title}</h3>
    <div className="philosophy-subsection__body" dangerouslySetInnerHTML={createMarkupObject(body)} />
    {sections.map( section => <PhilosophySubSection {...section} key={section.id} />)}
    <div className="philosophy-subsection__bottom-outro" dangerouslySetInnerHTML={createMarkupObject(bottomOutro)} />
  </div>

const createMarkupObject = __html => ({ __html })

export default Philosophy
