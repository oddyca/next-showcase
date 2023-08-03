'use client'

import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import './MoreDetailsModal.scss';
import { MoreDetailsModal } from '../../types/types';

export default function MoreDetailsModal({ innerText, isOpen, onClick, closeModal, eventObject }: MoreDetailsModal) {

  const { img, date, name, genre, place, note } = eventObject;

  return (
    <>
      <a className='custom_btn' onClick={onClick}>{innerText}</a>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as='div' onClose={closeModal} className='modal__portal'>
            <div className='modal__bg'/>
            <div className="modal__test">
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
                <div className="modal__header">
                  <h1>{name}</h1>
                  <div className="header__details">
                    <p>{genre}</p>
                    <span>·</span>
                    <p>{date}</p>
                  </div>
                  <h2>{place}</h2>
                </div>
                <p className='modal__description'>
                  {note}
                </p>
              </Dialog.Panel>
            </div>            
          </Dialog>
        </Transition>
    </>
    
  )
}
