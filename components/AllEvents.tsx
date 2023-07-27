'use client'

import { useState, useEffect } from 'react';
import { getAllEvents } from '@/controller/Controller';
import { EventCard } from '@/components';
import { ImageObject } from '../types/types';

export default function AllEvents() {
  const [toRender, setToRender] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getAllEvents();
      setToRender(fetchedData["_embedded"]["events"]);
    }

    fetchData();
  }, []);

  const findImg = (arr: ImageObject[]): string => {
    let img = '';

    arr.map((val: ImageObject) => {
      if (val["width"] === 1024) img = val['url'].toString();
    })

    return img;
  }

  const renderEventsData = () => {
    return toRender.map((data: any, id: number) => {
      return <EventCard 
        key={id}
        img={findImg(data.images)}
        date={data["dates"]["start"]["localDate"]}
        name={data.name}
        genre={data.classifications[0]["genre"]["name"]}
        place={data["_embedded"]["venues"][0]["city"]["name"]}
      />
    }
  )}
  return (
    <>
      {toRender.length !== 0 && 
        renderEventsData()
      }
    </>
  )
}
