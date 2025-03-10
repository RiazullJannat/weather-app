import React, { useRef, useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import TempDetails from './TempDetails';

const RightSide = () => {
    const searchRef = useRef();
    const [weatherData, setWeatherData] = useState([]);

    // Fetch weather data based on user input
    const handleSearch = async () => {
        const value = searchRef.current.value;
        if (value) {
            const res = await (await fetch(`https://api.weatherapi.com/v1/current.json?key=cbcb21eaf00f461baa980911241505&q=${value}&aqi=no`)).json();
            setWeatherData(res);
        }
    };

    return (
        <div>
            {/* Search input */}
            <div className='text-center my-10 flex justify-center items-center gap-1'>
                <input 
                    type="text" 
                    ref={searchRef} 
                    placeholder='Search any city' 
                    className='border-b text-white bg-white/20 py-2 px-4' 
                />
                <span
                    className='text-xl bg-white/20 py-2 px-2 rounded-full cursor-pointer'
                    onClick={handleSearch}
                >
                    <FaSearchLocation />
                </span>
            </div>

            {/* Display weather details if data is available */}
            {weatherData ? <TempDetails weatherData={weatherData} /> : ''}
        </div>
    );
};

export default RightSide;