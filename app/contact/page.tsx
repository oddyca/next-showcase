import Image from "next/image";
import './contact.scss';

export default function page() {
  return (
    <div className='contact-page'>
      <div className="contact__wrapper">
        <div className="contact__socials">
          <div className="socials__link">
            <Image
              src={`/linkedin.svg`}
              alt={`linkedin logo`}
              width={32}
              height={32}
            />
            <a href='https://www.linkedin.com/in/siarhei-prakapovich-511466213/' target='_blank'>Linkedin</a>
          </div>
          <div className="socials__link">
            <Image
              src={`/telegram.svg`}
              alt={`telegram logo`}
              width={32}
              height={32}
            />
            <p>@emilsin</p>
          </div>
          <div className="socials__link">
            <Image
              src={`/github.svg`}
              alt={`github logo`}
              width={32}
              height={32}
            />
            <a href='https://www.github.com/oddyca' target='_blank'>GitHub</a>
          </div>
          <div className="socials__link">
            <Image
              src={`/mail.svg`}
              alt={`mail icon`}
              width={32}
              height={32}
            />
            <a href = 'mailto: prokser27@icloud.com'>prokser27@icloud.com</a>
          </div>
        </div>
        <div className="contact__location">
          <Image
            src='/location.svg'
            alt='location icon'
            width={18}
            height={18}
          />
          <p>Currently in: <span>Minsk, Belarus</span></p>
        </div>
      </div>
    </div>
  )
}
