'use client'

import { useState, useEffect } from 'react';
import { getAllEventst } from '@/controller/Controller';

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
    return (toRender.map((data: any, id: number) => {
      return (<h1 key={id}>{data.name}</h1>)
    }))
  }
  return (
    <>
      {toRender === null 
        ? <></> 
        : renderEventsData()
      }
    </>
  )
}
