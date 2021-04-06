import React from 'react'

const WhatCard = ({ id, title, icon, info }) => {
  const [readMore, setReadMore] = React.useState(false)
  return (
    <div className='col-md-4 mx-auto'>
      <div className='what_card'>
        <div className='what_icon'>{icon}</div>
        <h4>{title}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)} `}
        </p>
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `Show less...` : ` Read more...`}
          </button>
      </div>
    </div>
  )
}

export default WhatCard
