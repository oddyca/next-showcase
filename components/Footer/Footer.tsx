import Image from 'next/image';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <div className="footer__column">
          <Image
            src=''
            alt='site logo'
            width={256}
            height={44}
          />
        </div>
        <div className="footer__column">
          <div className="footer__link">
            <Image
              src=''
              alt='linkedin logo'
              width={32}
              height={32}
            />
            <a href='#'>LinkedIn</a>
          </div>
          <div className="footer__link">
            <Image
                src=''
                alt='github logo'
                width={32}
                height={32}
              />
              <a href='#'>Github</a>
          </div>
          <div className="footer__link">
            <Image
                  src=''
                  alt='telegram logo'
                  width={32}
                  height={32}
                />
                <p>@emilsin</p>
          </div>
        </div>
        <div className="footer__column">
          <p>© 2023</p>
        </div>
      </div>
    </footer>
  )
}
