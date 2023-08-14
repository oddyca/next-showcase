'use client';

import Image from "next/image";
import { TSearchEvent } from "@/types/types";
import { Combobox, Transition } from '@headlessui/react';
import { useState, useEffect, useTransition, Fragment } from 'react';
import { searchArtists } from "@/controller/Controller";

export default function SearchEvent({ bandName, setBandName }: TSearchEvent) {
  const [artistsList, setArtistsList] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  useEffect(() =>{
    const loadArtists = async () => {
      const response = await searchArtists();
      const allArtists = new Set<string>()
      response["_embedded"]["events"].forEach((artist: any) => allArtists.add(artist['name'])); // ANY
      setArtistsList([...allArtists])
    }
    loadArtists();
  }, []);

  const filteredArtists = query === '' 
    ? artistsList
    : artistsList.filter(item => (
      item.toLocaleUpperCase()
        .replace(/\s+/g, '')
        .includes(query.toLocaleUpperCase().replace(/\s+/g, '')))
    )

  return (
    <div className='search-event'>
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
    </div>
  )
}
