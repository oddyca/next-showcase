'use client'

import Image from 'next/image';
import './EventCards.scss';
import { CustomButton } from '@/components';
import { EventCardProps } from '../types/types';

export default function EventCard({ img, date, name, genre, place }: EventCardProps) {
  const handleClick = () => {

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
          objectFit='cover'
        />
      </div>
      
      <div className="card__main">
        <div className="card__header">
          <div className="card__date">{date}</div>
          <div className="card__name">
            {name}
            <div className="card__genre">{genre}</div>
          </div>
        </div>
        <div className="card__place">{place}</div>
        <div className="card__cta">
          <CustomButton onClick={handleClick} innerText={'MORE DETAILS'} />
        </div>
      </div>
    </div>
  )
}
