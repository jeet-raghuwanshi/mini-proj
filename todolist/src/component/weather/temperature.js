// https://api.openweathermap.org/data/2.5/weather?q=guna&appid=dca9e2795771e87a058297590bc1f194

import React,{useEffect, useState} from 'react';
import WeatherCard from './weatherCard';
import "./style.css";


const Temperature = () => {
    const [searchValue, setSearchValue] = useState("Guna");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async() => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=dca9e2795771e87a058297590bc1f194`;

            const res = await fetch(url);
            const data = await res.json();

            const {temp, humidity, pressure} = data.main;
            const {main: weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input type='search'
                placeholder='search...'
                autoFocus
                id='search'
                className='searchTerm'
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button 
                className='searchButton' 
                type="button" 
                onClick={getWeatherInfo}>
                Search
            </button>
        </div>
      </div>
        {/* our weather card   // directly sending the data of temp info using spread operator*/}
        <WeatherCard {...tempInfo} />  
    </>
  )
}

export default Temperature;