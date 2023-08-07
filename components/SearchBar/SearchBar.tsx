'use client'

import { useState } from 'react';
import { SearchEvent } from '@/components';

export default function SearchBar() {

  const [bandName, setBandName] = useState('');

  return (
    <form className='search-bar__wrapper'>
      <>
        <SearchEvent
          bandName={bandName}
          setBandName={setBandName}
        />
      </>
    </form>
    
  )
}
