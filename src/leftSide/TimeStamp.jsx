import React, { useEffect, useState } from 'react';

// Get formatted time and date
function formattedTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return { time, date };
}

const TimeStamp = () => {
    const [timeStamp, setTimeStamp] = useState(formattedTime());

    // Update time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeStamp(formattedTime());
        }, 1000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div>
            <h3 className='text-semibold text-5xl'>{timeStamp.time}</h3> {/* Display time */}
            <p className='text-2xl'>{timeStamp.date}</p> {/* Display date */}
        </div>
    );
};

export default TimeStamp;