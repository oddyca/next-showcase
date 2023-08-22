'use client'

import Image from 'next/image';
import { useState } from 'react';
import '../EventCards.scss';
import { MoreDetailsModal } from '@/components';
import { EventCardProps } from '../../types/types';

export default function EventCard({ img, date, name, genre, place, note, info, prices, url, venue, socials }: EventCardProps) {
  const eventObject = {
    img: img,
    date: date,
    name: name,
    genre: genre,
    place: place,
    note: note,
    info: info,
    prices: prices,
    url: url,
    venue: venue,
    socials: socials
  }

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen(true)
  }

  return (
    <div className='events__card'>
      <div className="card__image">
        <Image
          className='card_img'
          src={img}
          alt='event image'
          width={305}
          height={203}
          unoptimized={true}
        />
      </div>
      
      <div className="card__main">
        <div className="card__header">
          <div className="card__date">
            {date}
            <div className="card__important">
              {note && note.length &&
                <>
                  <Image
                    src='/caution.svg'
                    alt='caution icon'
                    width={20}
                    height={20}
                    className='message-icon'
                    onMouseOver={(e) => {
                      const sibling =  (e.target as HTMLImageElement).nextElementSibling!
                      sibling.classList.add('show-message');
                    }}
                    onMouseLeave={(e) => {
                      const sibling =  (e.target as HTMLImageElement).nextElementSibling!
                      sibling.classList.remove('show-message');
                    }}
                />
                <div className="important__message">{note}</div>
                </>
              }
              
            </div>
          </div>
          <div className="card__name">
            {name}
            <div className="card__genre">{genre}</div>
          </div>
        </div>
        <div className="card__place">{place}</div>
        <div className="card__cta">
          <MoreDetailsModal
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            eventObject={eventObject}
            onClick={handleClick}
            innerText={'MORE DETAILS'} 
          />
        </div>
      </div>
    </div>
  )
}
