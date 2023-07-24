'use client'

import React from 'react'

export default function SearchBar() {
  return (
    <div className='search-bar__wrapper'>
      <input
        className='search-bar__input'
        type='text'
        placeholder='Search Events'
      />
    </div>
    
  )
}
