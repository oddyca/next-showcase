import Image from 'next/image';
import './about.scss';

export default function About() {
  return (
    <div className='about-page'>
      <h1>About this app</h1>
      <div className="about__wrapper">
        <div className="about__block">
          <Image
            src='/stack.svg'
            alt='stack iamge'
            width={150}
            height={150}
            className="block__img"
          />
          <p>This is a <span className='about__highlight'>Next.JS v13</span> + <span className='about__highlight'>TypeScript</span> app that utilizes <a className='about__highlight' href='https://headlessui.com/' target='_blank'>Headless UI</a> library.</p>
        </div>
        <hr />
        <div className="about__block">
          <Image
            src='/api.svg'
            alt='api iamge'
            width={150}
            height={150}
            className="block__img"
          />
          <p>The API used in this app is <a className='about__highlight' href='https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/' target='_blank'>Ticketmaster.com Discovery API</a></p>
        </div>
        <div className="about__contact">

        </div>
      </div>
    </div>
  )
}
