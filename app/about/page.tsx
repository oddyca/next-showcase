import Image from 'next/image';
import Link from 'next/link';
import './about.scss';

export default function About() {
  return (
    <div className='about-page'>
      <h1>About this app</h1>
      <p>A pet project I made to practice creating an app with SSR. It was the first time i tried NextJS and Three.JS</p>
      <div className="about__wrapper">
        <div className="about__divider"></div>
        <div className="about__row">
          <Image
            src='/stack.svg'
            alt='stack icon'
            width={18}
            height={20}
            className="block__img"
          />
          <p>This is a <span className='about__highlight'>Next.JS 13</span> + <span className='about__highlight'>TypeScript</span> app that utilizes <a className='about__highlight' href='https://headlessui.com/' target='_blank'>Headless UI</a> library and three.js (particularly - React Three Fiber and Drei).</p>
        </div>
        <div className="about__row">
          <Image
            src='/api.svg'
            alt='api icon'
            width={18}
            height={20}
            className="block__img"
          />
          <p>The API used in this app is <a className='about__highlight' href='https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/' target='_blank'>Ticketmaster.com Discovery API</a></p>
        </div>
        <div className="about__row">
          <Image
            src='/link_bold.svg'
            alt='link icon'
            width={18}
            height={20}
            className="block__img"
          />
          <p>My <Link className='about__highlight' href='/contacts'>contacts</Link></p>
        </div>
      </div>
    </div>
  )
}
