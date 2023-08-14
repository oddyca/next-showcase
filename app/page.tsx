import { Landing } from '@/components'
import { Events } from '@/components'
import { getAllEvents } from '@/controller/Controller';
import './page.scss'

export default async function Home() {

  const fetchedData = await getAllEvents(); // ALL EVENTS FETCH
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
