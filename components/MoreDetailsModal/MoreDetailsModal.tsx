'use client'

import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import './MoreDetailsModal.scss';
import { MoreDetailsModal } from '../../types/types';

export default function MoreDetailsModal({ innerText, isOpen, onClick, closeModal, eventObject }: MoreDetailsModal) {
  const { img, date, name, genre, place, info, prices, url, venue, socials} = eventObject;
  const generateColor = (): string => {
    return "hsl(" + 360 * Math.random() + ',' +
               (20 + 70 * Math.random()) + '%,' + 
               (75 + 10 * Math.random()) + '%)'
  }

  interface linkObj {
    [key: string]: string
  }

  const filterSocials = () => {
    const socialsLinks: linkObj = {}

    if (socials !== undefined) {
      Object.keys(socials).forEach(elem => {
        if (
          elem === 'twitter' ||
          elem === 'youtube' ||
          elem === 'spotify' ||
          elem === 'instagram'
        ) {
          socialsLinks[elem] = socials[elem]![0]['url'];
        }
      });

      return (
        <>
          { Object.keys(socialsLinks).map(socialNetwork => (
            <a
              key={socialNetwork}
              href={socialsLinks[socialNetwork]}
              target="_blank"
            >
              <Image
                src={`/${socialNetwork}.svg`}
                height={32}
                width={32}
                alt='social network icon'
                className='socials_icon'
              />
            </a>
            ))
          }
        </>
      )
    } else {
      return []
    }
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
                          className='table__value link'
                          href={venue['venUrl']}
                          target='_blank'
                        >{venue['name']}
                          <Image
                            src='/link.svg'
                            width={16}
                            height={16}
                            alt='link icon'
                          />
                        </a>
                    </div>
                    <div className="table__row">
                      <p>Price</p>
                      {
                        prices 
                        ? <div className='table__prices'>
                            <span className='price__from'>from</span>
                            <p className='price__value'>{'$' + prices[0]['min']}</p>
                          </div>
                        : <p className='price__value'>-</p>  
                      }
                      
                    </div>
                  </div>
                  <div className='modal__description'>
                    {
                      info && 
                        <>
                          <p>Info</p>
                          <p className='event__description'>{info}</p>
                        </>
                    }
                    
                  </div>
                  <div className="modal__footer">
                    <div className="footer__socials">{filterSocials()}</div>
                    <a href={url} target='_blank' className='footer__book'>BOOK</a>
                  </div>
                </div>
              </Dialog.Panel>         
          </Dialog>
        </Transition>
    </>
  )
}
