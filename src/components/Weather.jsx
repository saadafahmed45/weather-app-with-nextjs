import Image from 'next/image';
import React from 'react'

const Weather = ({ data }) => {

   return (
      <div>
         <div>
            {/* <div>
               <Image alt='weather' src={`http://openweathermap.org/img/wn/${data.weather}@2x.png`}
                  width='100'
                  height='100'
               /> */}
            {/* <h1>weather: {data.weather[0]}</h1> */}

            {/* </div> */}

            {
               console.log(data)
            }

         </div>
      </div>
   )
}

export default Weather