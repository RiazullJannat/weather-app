import React, { useEffect, useState } from 'react';


function formattedTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false })
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    return { time, date };
}
const TimeStamp = () => {
    const [timeStamp, setTimeStamp] = useState(formattedTime())
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeStamp(formattedTime());
        }, 1000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="">
            <h3 className='text-semibold text-5xl'>{timeStamp.time}</h3>
            <p className='text-2xl'>{timeStamp.date}</p>
        </div>
    );
};

export default TimeStamp;