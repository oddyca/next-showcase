import { Landing, Events } from '@/components'
import { getAllEvents, searchArtists } from '@/controller/Controller';
import './page.scss'
import { HomeProps } from '@/types/types';

export default async function Home({ searchParams }: HomeProps) {

  // Default fetch
  const fetchedData = await getAllEvents({ 
    band: searchParams.band || '',
    genre: searchParams.genre || '',
    state: searchParams.state || '',
    page: searchParams.page || '0'
   });
  const toRender = fetchedData["_embedded"]["events"];
  type toRenderType = typeof toRender;

  // Fetch Artists' names and genres
  const response = await searchArtists();
  const allArtists = new Set<string>();
  const allGenres = new Map<string, string>()
  response["_embedded"]["events"].forEach((artist: typeof response["_embedded"]["events"][0]) => {
    allArtists.add(artist['name']);
    let genreName = artist['classifications'][0]["genre"]['name'];
    if (genreName.toLowerCase() !== 'undefined') allGenres.set(genreName, artist['classifications'][0]["genre"]['id'])
  }); 

  return (
    <main className='main'>
      <Landing />
      <div className="home__events" id="events">
        <Events
          toRender={toRender}
          allArtists={allArtists}
          allGenres={allGenres}
          pages={fetchedData['page']}
        />
      </div>
    </main>
  )
}
