import { Landing, Events } from '@/components'
import { getAllEvents, searchArtists } from '@/controller/Controller';
import './page.scss'
import { HomeProps } from '@/types/types';

export default async function Home({ searchParams }: HomeProps) {

  // Default fetch
  const fetchedData = await getAllEvents({ 
    band: searchParams.band || '',
    genre: searchParams.genre || '',
    state: searchParams.state || ''
   });
  const toRender = fetchedData["_embedded"]["events"];

  // Fetch Artists' names and genres
  const response = await searchArtists();
  const allArtists = new Set<string>();
  const allGenres = new Map<string, string>()
  response["_embedded"]["events"].forEach((artist: any) => { //_________ ANY
    allArtists.add(artist['name']);
    allGenres.set(artist['classifications'][0]["genre"]['name'], artist['classifications'][0]["genre"]['id'])
  }); 

  return (
    <main className='main'>
      <Landing />
      <div className="home__events" id="events">
        <Events
          toRender={toRender}
          allArtists={allArtists}
          allGenres={allGenres}
        />
      </div>
    </main>
  )
}
