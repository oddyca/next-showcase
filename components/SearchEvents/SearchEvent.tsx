'use client';

import Image from "next/image";
import { TSearchEvent } from "@/types/types";
import { Combobox, Transition } from '@headlessui/react';
import { useState, useEffect, useTransition, Fragment } from 'react';

export default function SearchEvent ({ bandName, setBandName, allArtists }: TSearchEvent) {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const allArtistsArr = [...allArtists]

  const filteredArtists = query === '' 
    ? allArtistsArr
    : allArtistsArr.filter(item => (
      item.toLocaleUpperCase()
        .replace(/\s+/g, '')
        .includes(query.toLocaleUpperCase().replace(/\s+/g, '')))
    )

  return (
    <Combobox value={bandName} onChange={setBandName} nullable>
      <div className='search-event__input'>
        <Image
          src='/search.svg'
          width={20}
          height={20}
          alt='search icon'
        />
        <Combobox.Input
          placeholder='Search Event'
          displayValue={(bandName: string) => bandName}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacitty-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className='search__options'>
            {
              filteredArtists.map(item => (
                <Combobox.Option
                  key={item}
                  className={({ active }) => `search__option ${active ? 'search_active' : ''}`}
                  value={item}
                >
                  {({selected, active}) => (
                    <>
                      <span>
                        {item}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            }
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}
