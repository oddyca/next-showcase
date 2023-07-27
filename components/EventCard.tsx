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
          src={img}
          alt='event image'
          layout='fill'
          objectFit='contain'
        />
      </div>
      
      <div className="card__main">
        <div className="card__header">
          <div className="card__date">{date}</div>
          <div className="card__name">{name}</div>
        </div>
        <div className="card__genre">{genre}</div>
        <div className="card__place">{place}</div>
        <CustomButton onClick={handleClick} innerText={'MORE DETAILS'} />
      </div>
    </div>
  )
}
