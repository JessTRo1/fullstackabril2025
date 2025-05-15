import React, { useState, useEffect } from 'react';
import './weatherApp.css';

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_KEY = 'beda6575d48a4b7b9f5567b415414724';
    const [city, setCity] = useState('Ciudad Real,ES');
    const [inputValue, setInputValue] = useState('Ciudad Real,ES');

    useEffect(() => {
        const fetchWeather = () => {
            if (!city.trim()) return;

            setLoading(true);
            setError(null);

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Ciudad no encontrada');
                    }
                    return response.json();
                })
                .then(data => {
                    setWeather(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                });
        };

        fetchWeather();

        const intervalId = setInterval(fetchWeather, 300000);

        return () => clearInterval(intervalId); 
    }, [city, API_KEY]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setCity(inputValue);
        }
    };

    return (
        <div className="weather">
            <form className='weather__form' onSubmit={handleSubmit}>
                <input
                    className='weather__input'
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ej: Madrid,ES"
                />
                <button className='weather__button' type="submit">Buscar</button>
            </form>

            {loading && <div>Cargando...</div>}
            {error && <div className="error">{error}</div>}
            {weather && !loading && !error && (
                <>
                    <h2 className='title'>Clima en {weather.name}</h2>
                    <p className='title'>Temperatura: {Math.round(weather.main.temp)}°C</p>
                    <p className='title'>Sensación térmica: {Math.round(weather.main.feels_like)}°C</p>
                    <p className='title'>{weather.weather[0].description}</p>
                    <p className='title'>Humedad: {weather.main.humidity}%</p>
                    <p className='title'>Última actualización: {new Date().toLocaleTimeString()}</p>
                </>
            )}
        </div>
    );
};

export default WeatherApp;