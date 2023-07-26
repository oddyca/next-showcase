import React from 'react'

export default function PlaceholderCard() {
  return (
    <div className='events__placeholder'>
      <div className='placeholder__image'></div>
      <div className="palceholder__main">
        <div className="palceholder__header">
          <div className="placeholder__date"></div>
          <div className="placeholder__name"></div>
        </div>
        <div className="placeholder__genre"></div>
        <div className="placeholder__place"></div>
        <div className="placeholder__cta"></div>
      </div>
    </div>
  )
}
