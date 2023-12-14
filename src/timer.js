import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const Timer = ({ style }) => {
    const [seconds, setSeconds] = useState(7380); // Initial value of 60 seconds

    useEffect(() => {
    // Function to decrement the timer every second
    const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
    }, []);

    // Format the remaining seconds as minutes and seconds
    let hours = Math.floor(seconds / 3600);
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = Math.floor(seconds / 60) % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let remainingSeconds = seconds % 60;
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    const timerString = `${hours}:${minutes}:${remainingSeconds}`;
    return (
        <Text style={style}>{timerString}</Text>
    );
};

export default Timer;
