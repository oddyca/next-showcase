import { SearchBar } from '@/components';
import dynamic from 'next/dynamic';
import { PlaceholderCard } from '@/components';
import { EventsProps } from '@/types/types';
import './Events.scss';

const DynamicAllEvents = dynamic(() => import('@/components/AllEvents/AllEvents'), {
  ssr: false,
  loading: () => {
    const loadingElements = [];
    for (let i = 0; i < 10; i++) {
      loadingElements.push(<PlaceholderCard key={i} />);
    }
    return <>{loadingElements}</>;
  }
});

export default function Events({ toRender, allArtists, allGenres }: EventsProps) {
  return (
    <div className="events__container">
      <div className="events__header">
        <h1>Events Catalogue</h1>
        <p>Explore out events you might like</p>
      </div>
      <SearchBar
        allArtists={allArtists}
        allGenres={allGenres}
      />
      <section className='events__cards'>
        <DynamicAllEvents
          toRender={toRender}
        />
      </section>
    </div>
  )
}
