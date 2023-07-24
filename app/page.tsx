import { Landing } from '@/components'
import { Events } from '@/components'
import './page.scss'

export default function Home() {
  return (
    <main className='main'>
      <Landing />
      <div className="home__events" id="events">
        <Events />
      </div>
    </main>
  )
}
