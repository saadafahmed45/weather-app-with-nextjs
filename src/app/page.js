'use client'
import Spinner from '@/components/Spinner';
import Weather from '@/components/Weather';
import axios from 'axios';
import Image from 'next/image'
import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
export default function Home() {


  const [city, setCity] = useState('')
  const [weathers, setWeather] = useState([])
  const [loading, setLoading] = useState(false)

  // console.log(city)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url)
      .then((res) => {
        setWeather(res.data)
        console.log(res.data.weathers[0]);
      })
    setCity('')
    setLoading(false)
  };


  if (loading) {
    return <Spinner />
  }
  else {
    return (
      <main >
        <h1>Hello World</h1>
        {/* overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]'>
        </div>


        {/* background image  */}
        <Image alt='bg' src='https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' layout='fill' className='object-cover' />

        {/* search here */}
        <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
          <form onSubmit={fetchWeather} className='flex justify-between w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className='bg-transparent border-none  focus:outline-none text-2xl ' type="text" placeholder="Search city..." />
            </div>
            <button onClick={fetchWeather}><BsSearch size={22} /></button>
          </form>
        </div>

        {/* weather data */}
        {weathers.main && <Weather data={weathers} />}

        <Weather />


      </main>
    )
  }
}
