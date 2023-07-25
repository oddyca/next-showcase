'use client';

import Image from "next/image";
import { TSearchEvent } from "@/types/types";
import { Combobox, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

export default function SearchEvent({ bandName, setBandName }: TSearchEvent) {

  const [query, setQuery] = useState('');

  return (
    <div className='search-event'>
      <Combobox>
        <div className='search-event__input'>
          <Combobox.Button>
            <Image
              src='/search.svg'
              width={20}
              height={20}
              alt='search icon'
            />
          </Combobox.Button>
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

          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
