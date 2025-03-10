const TempDetails = ({ weatherData }) => {
    console.log("Weather Data:", weatherData);

    return (
        <div>
            {/* Display location details */}
            <p className="rightP">
                <span>Location:</span>
                <span>{weatherData?.location?.name}, {weatherData?.location?.country}</span>
            </p>

            {/* Display temperature and condition */}
            <p className="rightP">
                <span>Temp:</span>
                <span>{weatherData?.current?.temp_c}°C ({weatherData?.current?.condition?.text})</span>
            </p>

            {/* Display humidity */}
            <p className="rightP">
                <span>Humidity:</span>
                <span>{weatherData?.current?.humidity}%</span>
            </p>

            {/* Display visibility */}
            <p className="rightP">
                <span>Visibility:</span>
                <span>{weatherData?.current?.vis_miles} mi</span>
            </p>

            {/* Display wind speed */}
            <p className="rightP">
                <span>Wind Speed:</span>
                <span>{weatherData?.current?.wind_kph} k/h</span>
            </p>
        </div>
    );
};

export default TempDetails;