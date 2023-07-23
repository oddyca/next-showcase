import './CustomLink.scss';
import { CustomLink } from '../types/Landing';

export default function CustomButton({ innerText, linkTo }: CustomLink) {
  return (
    <a className='link_btn' href={linkTo} >{innerText}</a>
  )
}
