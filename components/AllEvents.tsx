'use client'

import { useState, useEffect } from 'react';
import { getAllEvents } from '@/controller/Controller';
import { EventCard } from '@/components';

export default function AllEvents() {
  const [toRender, setToRender] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getAllEvents();
      setToRender(fetchedData["_embedded"]["events"]);
    }

    fetchData();
  }, []);

  const renderEventsData = () => {
    return toRender.map((data: any, id: number) => {
      return <EventCard key={id} img={data.images[2]['url']} date={data["dates"]["start"]["localDate"]} name={data.name} genre={data.classifications[0]["genre"]["name"]} place={data["_embedded"]["venues"][0]["city"]["name"]}/>
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
