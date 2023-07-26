import './Events.scss';
import { SearchBar } from '@/components';
import AllEvents from './AllEvents';
import dynamic from 'next/dynamic';

const DynamicAllEvents = dynamic(() => import('./AllEvents'), {
  ssr: false,
  loading: () => <p>Fetcheing...</p>
});

export default function Events() {
  return (
    <div className="events__container">
      <div className="events__header">
        <h1>Events Catalogue</h1>
        <p>Explore out events you might like</p>
      </div>
      <SearchBar />
      <DynamicAllEvents />
    </div>
  )
}
