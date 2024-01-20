/* Countdown */
import { useEffect, useState } from 'react';

/* countDown: milliseconds until date */
const getReturnValues = (countDown: number) => {
    /* 
     * 1000 millisekunder per sekund
     * 60 sekunder per minutt
     * 60 minutter per time
     * 24 timer per dag
     * 7 dager per uke
     * Multipliseringen av disse verdiene gir 
     * totalt antall millisekunder i en uke. 
     * Så, dette uttrykket representerer 
     * 1000 millisekunder * 60 sekunder * 60 minutter * 24 timer * 7 dager, 
     * som tilsvarer antall millisekunder i én uke.
     */

    const weeks = Math.floor(countDown / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((countDown % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [weeks, days, hours, minutes, seconds];
};

/* Hook */
export const useCountdown = (targetDate: Date) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

  return getReturnValues(countDown);
};