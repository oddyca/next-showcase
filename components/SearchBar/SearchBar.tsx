'use client'

import React, { useState } from 'react';
import { SearchEvent, CustomFilter } from '@/components';
import { useRouter } from 'next/navigation';
import { SearchBarParams } from '@/types/types';
import './SearchBar.scss';

export default function SearchBar({ allArtists, allGenres }: SearchBarParams) {

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
    router.push(newPathname, {scroll: false});
  }

  return (
    <form
      onSubmit={handleSearch}
      className='search-bar__wrapper'
    >
      <div className="search__input">
        <SearchEvent
          bandName={bandName}
          setBandName={setBandName}
          allArtists={allArtists}
        />
        <button
          type='submit'
          className='search__btn'
        >
          SEARCH
        </button>
      </div>
      <div className="search__filters">
        <CustomFilter
          allGenres={allGenres}
        />
      </div>
    </form>
  )
}
