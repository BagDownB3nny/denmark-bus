import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const CurrentTimer = ({ style }) => {

        // Get the current date and time
    var now = new Date();

    // Extract the hours, minutes, seconds, and milliseconds
    var hours1 = now.getHours();
    var minutes1 = now.getMinutes();
    var seconds1 = now.getSeconds();
    var milliseconds1 = now.getMilliseconds();

    // Get number of deciseconds since start of day
    var nowDeciseconds = (hours1 * 36000 + minutes1 * 600 + milliseconds1 / 10);


    const [deciseconds, setDeciSeconds] = useState(nowDeciseconds); // Initial value of 60 seconds

    useEffect(() => {
    // Function to decrement the timer every second
    const timer = setInterval(() => {
        setDeciSeconds((prevDeciseconds) => prevDeciseconds + 1);
    }, 100);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
    }, []);

    // Format the remaining seconds as minutes and seconds
    let hours = Math.floor(deciseconds / 36000);
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = Math.floor(deciseconds / 600) % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let remainingSeconds = deciseconds % 600;
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    let remainingDeciseconds = (Math.floor(remainingSeconds)) % 10;
    remainingSeconds = Math.floor((Math.floor(remainingSeconds)) / 10);
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    const timerString = `${hours}:${minutes}:${remainingSeconds}:${remainingDeciseconds}`;
    return (
        <Text style={style}>{timerString}</Text>
    );
};

export default CurrentTimer;
