import React from 'react'

const SectionTitle = ({title, subTitle}) => {
  return (
    <div className='section__title'>
      <h2>{title}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default SectionTitle
