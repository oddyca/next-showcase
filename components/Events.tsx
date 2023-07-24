import './Events.scss';
import { SearchBar } from '@/components';

export default function Events() {
  return (
    <div className="events__container">
      <div className="events__header">
        <h1>Events Catalogue</h1>
        <p>Explore out events you might like</p>
      </div>
      <SearchBar />
    </div>
  )
}
