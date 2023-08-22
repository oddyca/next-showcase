'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PaginationProps } from '@/types/types';
import './Pagination.scss';


export default function Pagination({ pages }: PaginationProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(pages.number);

  const handleUpdateParams = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', `${pageNumber}`);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    const visiblePages = 5;

    if (currentPage > 2) {
      pageButtons.push(
        <a key="first" onClick={() => handleUpdateParams(0)}>
          first
        </a>
      );
    }

    const minPage = 
      currentPage <= 2 ? 0 
      : currentPage >= 97 ? 95
      : Math.max(currentPage - 2, 0)
      ;
    const maxPage = currentPage <= 2 ? 4 : Math.min(currentPage + 2, 99);

    for (let i = minPage; i <= maxPage; i++) {
      pageButtons.push(
        <a
          key={`page-${i}`}
          onClick={() => handleUpdateParams(i)}
          className={i === currentPage ? 'pagination__active' : ''}
        >
          {i + 1}
        </a>
      );
    }

    if (currentPage < 99 - 2) {
      pageButtons.push(
        <a
          key="last"
          onClick={() => handleUpdateParams(99)}
        >
          last
        </a>
      );
    }

    return pageButtons;
  };

  return <div className="pagination__container">{renderPageButtons()}</div>;
}
