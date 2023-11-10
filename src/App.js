import { useEffect, useState } from 'react';
import './App.css';
import { Weather } from './Componets/Weather';

function App() {
  const [searchCity, setSearchCity] = useState("")
  const [searchState, setSearchState] = useState("")
  const [searchCountry, setSearchCountry] = useState("USA")
  const [weeklyWeather, setWeeklyWeather] = useState(null)
  const key = "935a7f94cfbe1a018e49ba67ee7b2f49"
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity},${searchState},${searchCountry}&appid=${key}&units=imperial`

  const handleSearch = (event)=>{
    event.preventDefault();

    setWeeklyWeather(null)
    if(searchCity && searchState && searchCountry && searchCity !== "" && searchState !== "" && searchCountry !== ""){
      getApiData();
    }
  }

  const getApiData = () =>{
		fetch(url)
			.then(resp => resp.json())
			.then(data =>{
				console.log(data)
          setWeeklyWeather(data)
			}) 
			.catch(err => console.log(err))
	}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Widget 3.0</h1>
      </header>
      <div className='form'>
        <form onSubmit={handleSearch}>
          <label>City: </label>
          <input type='text' value={searchCity} onChange={(evt) => setSearchCity(evt.target.value)} /><br />
          <label>State:</label>
          <input type='text' value={searchState} onChange={(evt) => setSearchState(evt.target.value)} /><br />
          <label>Country:</label>
          <input type='text' value={searchCountry} onChange={(evt) => setSearchCountry(evt.target.value)} /><br />
          <button type='submit'>Get The Weather</button>
        </form>
      </div>
      <section>
        {
          weeklyWeather ? <Weather weatherData={weeklyWeather} /> : <></>
        }
      </section>
    </div>
  );
}

export default App;
