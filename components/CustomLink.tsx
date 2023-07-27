import './CustomLink.scss';
import { CustomLink } from '../types/types';

export default function CustomLink({ innerText, linkTo }: CustomLink) {
  return (
    <a className='link_btn' href={linkTo}>{innerText}</a>
  )
}
