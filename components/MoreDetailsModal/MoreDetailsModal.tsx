'use client'

import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import './MoreDetailsModal.scss';
import { MoreDetailsModal } from '../../types/types';

export default function MoreDetailsModal({ innerText, isOpen, onClick, closeModal, eventObject }: MoreDetailsModal) {

  const { img, date, name, genre, place, info, prices, venue } = eventObject;

  const generateColor = (): string => {
    return "hsl(" + 360 * Math.random() + ',' +
               (20 + 70 * Math.random()) + '%,' + 
               (75 + 10 * Math.random()) + '%)'
  }

  return (
    <>
      <a className='custom_btn' onClick={onClick}>{innerText}</a>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' onClose={closeModal} className='modal__portal'>
            <div className='modal__bg'/>
              <Dialog.Panel className="modal__window">
                <button 
                  className='modal__close'
                  onClick={closeModal}
                >
                  <Image
                    src='/close.svg'
                    alt='clsoe icon'
                    width={20}
                    height={20}
                  />
                </button>
                <div
                  className="modal__header"
                  style=
                    {
                      {
                        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.55) 85%), url(${img})`,
                        color: generateColor()
                      }
                    }
                >
                  <h1>{name} <span className='header__genre'>{genre}</span></h1>
                </div>
                <div className="modal__details">
                  <div className="modal__table">
                    <div className="table__row">
                      <p>Date</p>
                      <p className='table__value'>{date}</p>
                    </div>
                    <div className="table__row">
                      <p>City</p>
                      <p className='table__value'>{place}</p>
                    </div>
                    <div className="table__row">
                      <p>Venue</p>
                      <a
                        className='table__value'
                        href={venue['venUrl']}
                        target='_blank'
                      >{venue['name']}</a>
                    </div>
                    <div className="table__row">
                      <p>Price</p>
                      <p className='price__value'>{prices ? '$' + prices[0]['min'] : '-'}</p>
                    </div>
                  </div>
                  <div className='modal__description'>
                    <p>Info</p>
                    <p className='event__description'>{info}</p>
                  </div>
                </div>
              </Dialog.Panel>         
          </Dialog>
        </Transition>
    </>
  )
}
