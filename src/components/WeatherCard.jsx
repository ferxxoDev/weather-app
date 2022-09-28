import React, { useState } from 'react'

const WeatherCard = ({ weather, temperature }) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeUnit = () => setIsCelsius(!isCelsius)



  return (
    <article className='card'>

      <h1></h1>
      <h2 className='card-location'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
      <h3 className='card-name-weather'>{weather?.weather[0].description}</h3>

      <section>
        <div className='icon-temp'>
          <h3 className='temperature'>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h3>
          <img className='icon-weather' src={weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` : ''} alt="" />
          <button className='btn-unit' onClick={changeUnit}>{isCelsius ? 'to °F' : 'to °C'}</button>

        </div>
        <div className='description-weather'>

          <div >
            <h4>Wind Speed</h4>
            <h3>{weather?.wind.speed} m/s</h3>
          </div>
          <div className=''>
            
            <h4>Clouds</h4>
            <h3>{weather?.clouds.all} %</h3>
          </div>
          <div className=''>
            
            <h4>Preassure</h4>
            <h3>{weather?.main.pressure} hPa</h3>
          </div>
        </div>
      </section>


    </article>
  )
}

export default WeatherCard