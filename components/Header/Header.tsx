import './Header.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Image src='' alt='site logo'/>
      </div>
      <nav>
      <ul className='header__nav'>
        <li className='nav__link'><a href='#'>Contact</a></li>
        <li className='nav__link'><a href='#'>About</a></li>
      </ul>
      </nav>
    </header>
  )
}