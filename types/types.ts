export type CustomLink = {
  innerText: string,
  linkTo: string
}

export type TSearchEvent = {
  bandName: string;
  setBandName: (value: string) => void;
  allArtists: Set<string>;
}

interface PageLinks {
  [key: string]: {
    [key: string]: string
  }
}

interface Pages {
  [key: string]: number
}

export type EventsProps = {
  toRender: Object[],
  allArtists: Set<string>,
  allGenres: Map<string, string>,
  pages: Pages
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

export interface SearchParams {
  band: string,
  genre: string,
  state: string,
  page: string
}

export interface SearchBarParams {
  allArtists: Set<string>,
  allGenres: Map<string, string>
}

export interface HomeProps {
  searchParams: SearchParams
}

export interface CustomFilterParams {
  filters: Map<string, string> | undefined
}

export interface PaginationProps {
  pages: Pages
}