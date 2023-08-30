'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.scss';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const body = document.body as HTMLBodyElement;
    isOpen === true ? body.style.overflowY = 'hidden' : body.style.overflowY = '';
  }, [isOpen]);

  const navLinks = (where: string) => {

    const linkClass = where === 'burger' ? 'burger__link' : 'nav__link';

    return (
      <ul className={`${where === 'burger' ? 'burger__nav' : 'header__nav'}`} onClick={() => setIsOpen(state => state = !state)}>
        <li className={linkClass}>
          <Link shallow={true} href='#' className={pathName == "/contact" ? "link_active" : ""}>
            Contact
          </Link>
        </li>
        <li className={linkClass}>
          <Link shallow={true} href='/about' className={pathName == "/about" ? "link_active" : ""}>
            About
          </Link>
        </li>
      </ul>
    )
  }

  return (
    <header className='header'>
      <Link
        shallow={true}
        className='header__logo'
        href='/'
      >
        <Image
          src='/logo-text.svg'
          alt='site logo'
          width={200}
          height={44}
        />
      </Link>
      <nav>
        <button 
          className='nav__burger'
          onClick={() => setIsOpen(state => state = !state)}
        >
          <Image
            src='/burger.svg'
            width={44}
            height={44}
            alt='burger menu icon'
          />
        </button>
        <div className={`burger_blur ${isOpen ? 'blur_show' : ''}`}>{navLinks('burger')}</div>
        {navLinks('notburger')}
      </nav>
    </header>
  )
}
