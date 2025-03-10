import { useEffect, useState } from "react";
import TimeStamp from "./TimeStamp";

const LeftSide = () => {
    const [locationDetails, setLocationDetails] = useState('');

    // Fetch user's location and weather data
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=db56188e8340270796b46e16c6468532`)
                .then(res => res.json())
                .then(data => setLocationDetails(data));
        });
    }, []);

    // Convert temperature from Kelvin to Celsius
    const celsiusTemp = (locationDetails?.main?.temp - 273.15).toFixed(2);

    return (
        <div className="h-full flex text-white items-end gap-5 bg-black/20 px-[2%] py-[4%] text-center">
            <TimeStamp />
            <div className="text-center">
                <h1 className="text-7xl">{celsiusTemp}°C</h1> {/* Display temperature */}
            </div>
        </div>
    );
};

export default LeftSide;