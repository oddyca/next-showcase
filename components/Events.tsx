import './Events.scss';
import { SearchBar } from '@/components';
import dynamic from 'next/dynamic';
import { PlaceholderCard } from '@/components';

const DynamicAllEvents = dynamic(() => import('@/components/AllEvents'), {
  loading: () => <p>loading...</p>
});

export default function Events() {
  return (
    <div className="events__container">
      <div className="events__header">
        <h1>Events Catalogue</h1>
        <p>Explore out events you might like</p>
      </div>
      <SearchBar />
      <div className='events__cards'>
        <DynamicAllEvents />
      </div>
    </div>
  )
}
