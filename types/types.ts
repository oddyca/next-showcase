export type CustomLink = {
  innerText: string,
  linkTo: string
}

export type TSearchEvent = {
  bandName: string;
  setBandName: (value: string) => void;
  allArtists: Set<string>;
}

interface Pages {
  [key: string]: number
}

export type EventsProps = {
  toRender: Event[],
  allArtists: Set<string>,
  allGenres: Map<string, string>,
  pages: Pages
}

export type AllEvents = {
  toRender: Event[]
}

export interface EventCardProps {
  img: string,
  date: string,
  name: string,
  genre: string,
  place: string,
  note: string | undefined,
  info: string | undefined,
  prices: PriceRange[] | undefined,
  url: string,
  venue: {
    name: string,
    venUrl: string | undefined
  },
  socials: ExternalLinks
}

export type MoreDetailsModal = {
  innerText: string,
  isOpen: boolean,
  eventObject: EventCardProps,
  closeModal: () => void,
  onClick: () => void
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


// Fetched JSON


export interface Root {
  events: Event[]
}

export interface Event {
  name: string
  type: string
  id: string
  test: boolean
  url: string
  locale: string
  images: Image[]
  sales: Sales
  dates: Dates
  classifications: Classification[]
  promoter?: Promoter
  promoters?: Promoter2[]
  info?: string
  pleaseNote?: string
  priceRanges?: PriceRange[]
  accessibility?: Accessibility
  ticketLimit?: TicketLimit
  ageRestrictions?: AgeRestrictions
  ticketing?: Ticketing
  _links: Links
  _embedded: Embedded
  seatmap?: Seatmap
  doorsTimes?: DoorsTimes
  outlets?: Outlet[]
  products?: Product[]
}

export interface Image {
  ratio: string
  url: string
  width: number
  height: number
  fallback: boolean
}

export interface Sales {
  public: Public
  presales?: Presale[]
}

export interface Public {
  startDateTime: string
  startTBD: boolean
  startTBA: boolean
  endDateTime: string
}

export interface Presale {
  startDateTime: string
  endDateTime: string
  name: string
}

export interface Dates {
  start: Start
  timezone?: string
  status: Status
  spanMultipleDays: boolean
  initialStartDate?: InitialStartDate
}

export interface Start {
  localDate: string
  localTime: string
  dateTime: string
  dateTBD: boolean
  dateTBA: boolean
  timeTBA: boolean
  noSpecificTime: boolean
}

export interface Status {
  code: string
}

export interface InitialStartDate {
  localDate: string
  localTime: string
  dateTime: string
}

export interface Classification {
  primary: boolean
  segment: Segment
  genre: Genre
  subGenre: SubGenre
  type?: Type
  subType?: SubType
  family: boolean
}

export interface Segment {
  id: string
  name: string
}

export interface Genre {
  id: string
  name: string
}

export interface SubGenre {
  id: string
  name: string
}

export interface Type {
  id: string
  name: string
}

export interface SubType {
  id: string
  name: string
}

export interface Promoter {
  id: string
  name: string
  description: string
}

export interface Promoter2 {
  id: string
  name: string
  description: string
}

export interface PriceRange {
  type: string
  currency: string
  min: number
  max: number
}

export interface Accessibility {
  ticketLimit?: number
}

export interface TicketLimit {
  info: string
}

export interface AgeRestrictions {
  legalAgeEnforced: boolean
  ageRuleDescription?: string
}

export interface Ticketing {
  safeTix: SafeTix
  allInclusivePricing: AllInclusivePricing
}

export interface SafeTix {
  enabled: boolean
}

export interface AllInclusivePricing {
  enabled: boolean
}

export interface Links {
  self: Self
  attractions: Attraction[]
  venues: Venue[]
}

export interface Self {
  href: string
}

export interface Attraction {
  href: string
}

export interface Venue {
  href: string
}

export interface Embedded {
  venues: Venue2[]
  attractions: Attraction2[]
}

export interface Venue2 {
  name: string
  type: string
  id: string
  test: boolean
  url?: string
  locale: string
  images?: Image2[]
  postalCode: string
  timezone: string
  city: City
  state: State
  country: Country
  address: Address
  location: Location
  markets?: Market[]
  dmas: Dma[]
  social?: Social
  boxOfficeInfo?: BoxOfficeInfo
  parkingDetail?: string
  accessibleSeatingDetail?: string
  generalInfo?: GeneralInfo
  upcomingEvents: UpcomingEvents
  ada?: Ada
  _links: Links2
}

export interface Image2 {
  ratio: string
  url: string
  width: number
  height: number
  fallback: boolean
}

export interface City {
  name: string
}

export interface State {
  name: string
  stateCode: string
}

export interface Country {
  name: string
  countryCode: string
}

export interface Address {
  line1: string
}

export interface Location {
  longitude: string
  latitude: string
}

export interface Market {
  name: string
  id: string
}

export interface Dma {
  id: number
}

export interface Social {
  twitter: Twitter
}

export interface Twitter {
  handle: string
}

export interface BoxOfficeInfo {
  phoneNumberDetail: string
  openHoursDetail: string
  acceptedPaymentDetail: string
  willCallDetail?: string
}

export interface GeneralInfo {
  generalRule: string
  childRule: string
}

export interface UpcomingEvents {
  ticketmaster?: number
  _total: number
  _filtered: number
  tmr?: number
}

export interface Ada {
  adaPhones: string
  adaCustomCopy: string
  adaHours: string
}

export interface Links2 {
  self: Self2
}

export interface Self2 {
  href: string
}

export interface Attraction2 {
  name: string
  type: string
  id: string
  test: boolean
  url: string
  locale: string
  externalLinks: ExternalLinks
  images: Image3[]
  classifications: Classification2[]
  upcomingEvents: UpcomingEvents2
  _links: Links3
}

export interface ExternalLinks {
  youtube?: Youtube[]
  twitter?: Twitter2[]
  wiki: Wiki[]
  facebook?: Facebook[]
  spotify?: Spotify[]
  musicbrainz: Musicbrainz[]
  instagram?: Instagram[]
  homepage?: Homepage[]
  itunes?: Itune[]
}

export interface Youtube {
  url: string
}

export interface Twitter2 {
  url: string
}

export interface Wiki {
  url: string
}

export interface Facebook {
  url: string
}

export interface Spotify {
  url: string
}

export interface Musicbrainz {
  id: string
}

export interface Instagram {
  url: string
}

export interface Homepage {
  url: string
}

export interface Itune {
  url: string
}

export interface Image3 {
  ratio: string
  url: string
  width: number
  height: number
  fallback: boolean
}

export interface Classification2 {
  primary: boolean
  segment: Segment2
  genre: Genre2
  subGenre: SubGenre2
  type: Type2
  subType: SubType2
  family: boolean
}

export interface Segment2 {
  id: string
  name: string
}

export interface Genre2 {
  id: string
  name: string
}

export interface SubGenre2 {
  id: string
  name: string
}

export interface Type2 {
  id: string
  name: string
}

export interface SubType2 {
  id: string
  name: string
}

export interface UpcomingEvents2 {
  tmr: number
  ticketmaster: number
  _total: number
  _filtered: number
}

export interface Links3 {
  self: Self3
}

export interface Self3 {
  href: string
}

export interface Seatmap {
  staticUrl: string
}

export interface DoorsTimes {
  localDate: string
  localTime: string
  dateTime: string
}

export interface Outlet {
  url: string
  type: string
}

export interface Product {
  name: string
  id: string
  url: string
  type: string
  classifications: Classification3[]
}

export interface Classification3 {
  primary: boolean
  segment: Segment3
  genre: Genre3
  subGenre: SubGenre3
  type: Type3
  subType: SubType3
  family: boolean
}

export interface Segment3 {
  id: string
  name: string
}

export interface Genre3 {
  id: string
  name: string
}

export interface SubGenre3 {
  id: string
  name: string
}

export interface Type3 {
  id: string
  name: string
}

export interface SubType3 {
  id: string
  name: string
}
