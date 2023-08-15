import { Landing, Events } from '@/components'
import { getAllEvents } from '@/controller/Controller';
import './page.scss'
import { HomeProps } from '@/types/types';

export default async function Home({ searchParams }: HomeProps) {

  const fetchedData = await getAllEvents({ 
    band: searchParams.band || '',
    genre: searchParams.genre || '',
    state: searchParams.state || ''
   });
  const toRender = fetchedData["_embedded"]["events"];

  return (
    <main className='main'>
      <Landing />
      <div className="home__events" id="events">
        <Events
          toRender={toRender}
        />
      </div>
    </main>
  )
}
