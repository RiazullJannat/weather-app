
const TempDetails = ({ weatherData }) => {
    console.log("w", weatherData);
    return (
        <div>
            <p className="rightP">
                <span>Location:</span>
                <span>{weatherData?.location?.name}, {weatherData?.location?.country}</span>
            </p>
            <p className="rightP">
                <span>Temp:</span>
                <span>{weatherData?.current?.temp_c}°C ({weatherData?.current?.condition?.text})</span>
            </p>
            <p className="rightP">
                <span>Humidity:</span>
                <span>{weatherData?.current?.humidity}%</span>
            </p>
            <p className="rightP">
                <span>Visibility:</span>
                <span>{weatherData?.current?.vis_miles} mi</span>
            </p>
            <p className="rightP">
                <span>Wind Speed:</span>
                <span>{weatherData?.current?.wind_kph} k/h</span>
            </p>
        </div>
    );
};

export default TempDetails;