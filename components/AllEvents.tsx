'use client'

import { useState, useEffect } from 'react';
import { getAllEventst } from '@/controller/Controller';
import { EventCard } from '@/components';

export default function AllEvents() {
  const [toRender, setToRender] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getAllEventst();
      setToRender(fetchedData["_embedded"]["events"]);
    }

    fetchData();
  }, []);

  const renderEventsData = () => {
    return toRender.map((data: any, id: number) => {
      return <EventCard key={id} />
    }
  )}
  return (
    <>
      {toRender === null 
        ? <></> 
        : renderEventsData()
      }
    </>
  )
}
