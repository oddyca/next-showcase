import './CustomLink.scss';
import { CustomButton } from '../types/types';

export default function CustomButton({ innerText, onClick }: CustomButton) {
  return (
    <a className='custom_btn' onClick={onClick}>{innerText}</a>
  )
}
