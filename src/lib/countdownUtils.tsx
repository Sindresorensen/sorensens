/* Countdown */
import { useEffect, useState } from 'react';

const oneWeek = 7 * 24 * 60 * 60 * 1000;
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

type CountdownValues = {
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}


const calculateCountdown = (targetDate: Date): CountdownValues => {

    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    const weeks = Math.floor(diff / oneWeek);
    const days = Math.floor((diff % oneWeek) / oneDay);
    const hours = Math.floor((diff % oneDay) / oneHour);
    const minutes = Math.floor((diff % oneHour) / oneMinute);
    const seconds = Math.floor((diff % oneMinute) / 1000);

    return { weeks, days, hours, minutes, seconds };
};

/* Hook */
export const useCountdown = (targetDate: Date) => {

    const [countdown, setCountdown] = useState<CountdownValues>(calculateCountdown(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(calculateCountdown(targetDate));
        }, 1000);
    
        return () => clearInterval(timer);
    }, []);

    return countdown;
};