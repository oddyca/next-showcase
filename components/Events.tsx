import './Events.scss';
import { SearchBar } from '@/components';
import dynamic from 'next/dynamic';
import { PlaceholderCard } from '@/components';

const DynamicAllEvents = dynamic(() => import('@/components/AllEvents'), {
  ssr: false,
  loading: () => {
    const loadingElements = [];
    for (let i = 0; i < 10; i++) {
      loadingElements.push(<PlaceholderCard key={i} />);
    }
    return <>{loadingElements}</>;
  }
});

export default function Events() {
  return (
    <div className="events__container">
      <div className="events__header">
        <h1>Events Catalogue</h1>
        <p>Explore out events you might like</p>
      </div>
      <SearchBar />
        <section className='events__cards'>
          <DynamicAllEvents />
        </section>
    </div>
  )
}
