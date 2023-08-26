'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.scss';

export default function Header() {

  const pathName = usePathname();
  // className={pathName == "/contact" ? "link_active" : ""}

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
      <ul className='header__nav'>
        <li className='nav__link'><Link shallow={true} href='#' className={pathName == "/contact" ? "link_active" : ""}>Contact</Link></li>
        <li className='nav__link'><Link shallow={true} href='/about' className={pathName == "/about" ? "link_active" : ""}>About</Link></li>
      </ul>
      </nav>
    </header>
  )
}
