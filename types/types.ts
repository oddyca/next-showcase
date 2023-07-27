export type CustomLink = {
  innerText: string,
  linkTo: string
}

export type CustomButton = {
  innerText: string,
  onClick: () => void
}

export type TSearchEvent = {
  bandName: string,
  setBandName: (value: string) => void
}

export interface EventCardProps {
  img: string,
  date: string,
  name: string,
  genre: string,
  place: string,
}