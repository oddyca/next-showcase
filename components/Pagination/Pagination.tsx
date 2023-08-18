'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PaginationProps } from '@/types/types';
import './Pagination.scss';

export default function Pagination({ pageLinks, pages }: PaginationProps) {

  const router = useRouter();
  const [fivePages, setFivePages] = useState([...new Array(5)]);

  const handleUpdateParams = (e: string) => {

    const searchParams = new URLSearchParams(window.location.search);

    //searchParams.set('page', );

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);
  }

  return (
    <div className='pagination__container'>
      {
        fivePages.map((page, id) => (<a key={`${page}-${id}`}>{id+1}</a>))
      }
      <span>...</span>
      <a>{pages['totalPages']}</a>
    </div>
  )
}
