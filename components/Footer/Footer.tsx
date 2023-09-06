import Image from 'next/image';
import './Footer.scss';

export default function Footer() {

  return (
    <footer className='footer'>
      <div className="footer__container">
        <div className="footer__column">
          <Image
            src='/logo.svg'
            alt='site logo'
            width={64}
            height={64}
          />
        </div>
        <div className="footer__column">
          <div className="footer__link">
            <Image
              src={`/github.svg`}
              alt={`github logo`}
              width={32}
              height={32}
            />
            <a href='https://www.github.com/oddyca' target='_blank'>GitHub</a>
          </div>
        </div>
        <div className="footer__column">
          <p>© 2023</p>
        </div>
      </div>
    </footer>
  )
}
