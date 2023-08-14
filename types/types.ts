export type CustomLink = {
  innerText: string,
  linkTo: string
}

export type TSearchEvent = {
  bandName: string,
  setBandName: (value: string) => void
}

export type EventsProps = {
  toRender: Object[]
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
  url: string,
  venue: {
    name: string,
    venUrl: string
  },
  socials: {
    [social: string]: {[url: string]: string}[]
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
