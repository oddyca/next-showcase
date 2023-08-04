export type CustomLink = {
  innerText: string,
  linkTo: string
}

export type TSearchEvent = {
  bandName: string,
  setBandName: (value: string) => void
}

interface eventPrcies {
  type: string,
  currency: string,
  min: number,
  max: number
}

export interface EventCardProps {
  img: string,
  date: string,
  name: string,
  genre: string,
  place: string,
  note: string,
  info: string,
  prices: eventPrcies[],
  venue: {
    name: string,
    venUrl: string
  }
}

export type MoreDetailsModal = {
  innerText: string,
  isOpen: boolean,
  eventObject: EventCardProps,
  closeModal: () => void,
  onClick: () => void
}

export interface ImageObject {
  [key: string]: string | number | boolean
}