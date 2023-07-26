import Image from 'next/image';

export default function EventCard() {
  return (
    <div className='events__card'>
      <Image
        className='card__image'
        src='/next.svg'
        alt='event image'
        width={100}
        height={25}
      />
      <div className="card__main">
        <div className="card__header">
          <div className="card__date">Event date</div>
          <div className="card__name">Event name</div>
        </div>
        <div className="card__genre">genre</div>
        <div className="card__place">place</div>
        <div className="card__cta">MORE DETAILS</div>
      </div>
    </div>
  )
}
