'use client';

import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './CustomFilter.scss';

interface CustomFilterProps {
  allGenres: Map<string, string>;
}

const CustomFilter: React.FC<CustomFilterProps> = ({ allGenres }) => {

  const genreNames = [...allGenres.keys()];
  const genreIDs = [...allGenres.values()];
  const [selected, setSelected] = useState('');

  const router = useRouter();

  const handleUpdateParams = (e: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    const genreID = genreIDs[genreNames.indexOf(e)];
    searchParams.delete('page');
    searchParams.set('genre', genreID);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname, {scroll: false});
  }

  return (
    <Listbox
      value={selected}
      onChange={(e) => {
        setSelected(e);
        handleUpdateParams(e);
      }}
    >
      <Listbox.Label className='filters__label'>Genre:</Listbox.Label>
      <div className="filter__box">
        <Listbox.Button
          className='filter__btn'
        >
          <span>{selected ? selected : 'Genre'}</span>
          <Image
            src='/chevron-up-down.svg'
            width={20}
            height={20}
            alt='up-down button'
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options
            className='filter__options'
          >
            {genreNames.map((genre) => (
              <Listbox.Option 
                key={genre}
                value={genre}
                className={({ active }) => `filter__option ${active ? 'filter_active' : ''}`}
              >
                {
                  ({ selected }) => (
                    <span>{genre}</span>
                  )
                }
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default CustomFilter
