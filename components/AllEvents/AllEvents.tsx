import { EventCard } from '@/components';
import { ImageObject, EventsProps } from '../../types/types';

type AllEventsProps = {
  toRender: Object[]
}

export default function AllEvents({ toRender }: AllEventsProps) {

  const findImg = (arr: ImageObject[]): string => {
    let img = '';

    arr.map((val: ImageObject) => {
      if (val["width"] === 640) img = val['url'].toString();
      return
    });

    return img;
  }

  const eventDate = (dateStr: string): string => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
    const date = new Date(dateStr);
    const dayOfWeek = days[date.getUTCDay()];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
  
    return `${dayOfWeek}, ${month} ${day}, ${year}`;
  }

  const renderEventsData = () => {

    return toRender.map((data: any, id: number) => {
      return <EventCard 
        key={id}
        img={findImg(data.images)}
        date={eventDate(data["dates"]["start"]["dateTime"])}
        name={data.name}
        genre={data.classifications[0]["genre"]["name"]}
        place={data["_embedded"]["venues"][0]["city"]["name"]}
        note={data['pleaseNote']}
        info={data['info']}
        prices={data['priceRanges']}
        url={data['url']}
        venue={
          {
            name: data['_embedded']['venues'][0]['name'],
            venUrl: data['_embedded']['venues'][0]['url']
          }
        }
        socials={data["_embedded"]['attractions'][0]['externalLinks']}
      />
    }
  )}
  return (
    <>
      {toRender.length !== 0
        ? renderEventsData()
        : <div className='fetch_error'>
            <h1>Oops, something went wrong!</h1>
            <h3>Try reloading the page.</h3>
          </div>
      }
    </>
  )
}
