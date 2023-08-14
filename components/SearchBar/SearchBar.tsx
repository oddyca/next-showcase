'use client'

import React, { useState } from 'react';
import { SearchEvent } from '@/components';
import './SearchBar.scss';
import { useRouter } from 'next/navigation';

export default function SearchBar() {

  const [bandName, setBandName] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (bandName === '') alert('Fill the search bar');

    updateSearchParams(bandName.toLowerCase());
  }

  const updateSearchParams = (band: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (band) {
      searchParams.set('band', band)
    } else {
      searchParams.delete('band')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);
  }

  return (
    <form
      onSubmit={handleSearch}
      className='search-bar__wrapper'
    >
      <SearchEvent
        bandName={bandName}
        setBandName={setBandName}
      />
      <button
        type='submit'
        className='search__btn'
      >
        SEARCH
      </button>
    </form>
  )
}
