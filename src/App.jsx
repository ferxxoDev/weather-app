import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import sky3 from '../public/img/sky3.mp4'
import Loading from './components/Loading'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()


  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj);
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  // console.log(coords);

  useEffect(() => {
    if (coords) {

      const APIKEY = '6c16badfdf5de6ecf2b639dbd2164ac4'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(0)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(0)
          setTemperature({ celsius, farenheit })
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [coords])


  console.log(weather)

  return (
    <div className="App">
      <video className='videoTag' autoPlay loop muted>
        <source src={sky3} type='video/mp4' />
      </video>
      {
        weather ?
          <>

            <WeatherCard
              weather={weather}
              temperature={temperature}
            />
          </>
          :
          <Loading />
      }

    </div>
  )
}

export default App
