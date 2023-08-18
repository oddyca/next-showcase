'use client';

import { useState } from 'react';
import { Listbox } from '@headlessui/react';
interface CustomFilterProps {
  allGenres: Map<string, string>;
}

const CustomFilter: React.FC<CustomFilterProps> = ({ allGenres }) => {

  const genreNames = [...allGenres.keys()];
  const [selected, setSelected] = useState(genreNames[0]);

  return (
    <Listbox
      value={selected}
      onChange={(e) => setSelected(e)}
    >
      <div className="filter__box">
        <Listbox.Button>
          <span>{selected}</span>
        </Listbox.Button>
      </div>
    </Listbox>
  )
}

export default CustomFilter
