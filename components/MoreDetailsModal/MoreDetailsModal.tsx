import Image from 'next/image';
import './MoreDetailsModal.scss';
import { MoreDetailsModal } from '../../types/types';

export default function MoreDetailsModal({ innerText, isOpen, onClick, closeModal, eventObject }: MoreDetailsModal) {

  const { img, date, name, genre, place, note } = eventObject;

  return (
    <>
      <a className='custom_btn' onClick={onClick}>{innerText}</a>
      {
        isOpen 
          &&
            <div className='modal__window'>
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
            </div>
      }
    </>
    
  )
}
