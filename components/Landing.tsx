import CustomLink from './CustomLink';
import './landing.scss';

export default function Landing() {
  return (
    <div className='hero_container'>
      <div className='hero__main'>
        <div className='hero__welcome'>
          <h1>Find and book events — quickly and easily!</h1>
          <p>Streamline your leisure experience with our effortless booking process.</p>
          <CustomLink linkTo={'#events'} innerText={'Find Events'}/>
        </div>
      </div>
    </div>
  )
}
