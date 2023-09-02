import Image from 'next/image';
import './Footer.scss';

export default function Footer() {

  const placeLink = (social: string, at?: string) => {
    return (
      <div className="footer__link">
        <Image
          src={`/${social.toLowerCase()}.svg`}
          alt={`${social} logo`}
          width={32}
          height={32}
        />
        { social === 'Telegram' ?
          <p>@emilsin</p> :
          <a href={`https://${social.toLowerCase()}.com/${at}`} target='_blank'>{social}</a>
        }
      </div>
    )
  }

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
          {placeLink('LinkedIn', 'in/siarhei-prakapovich-511466213/')}
          {placeLink('GitHub', 'oddyca')}
          {placeLink('Telegram')}
        </div>
        <div className="footer__column">
          <p>© 2023</p>
        </div>
      </div>
    </footer>
  )
}
