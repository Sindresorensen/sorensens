import { useCountdown } from "@/lib/countdownUtils";
import CountdownSection from "./CountdownSection";
import { useContext } from "react";
import { LanguageContext } from "@/App";

function Countdown() {

    const { isNynorsk } = useContext(LanguageContext);
    const weddingDate = new Date(2024, 8, 7, 14, 0);

    let { weeks, days, hours, minutes, seconds } = useCountdown(weddingDate);

    if (weeks + days + hours + minutes + seconds <= 0) {
        weeks = 0;
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    // console.log(`COUNTDOWN: ${weeks} weeks | ${days} days | ${hours} hours | ${minutes} minutes | ${seconds} seconds`)

    return (
        <div className=" h-[75vh] flex items-center mb-[20vh] relative">
            <div className=" w-full">

                <div className=" m-10 mx-4 sm:mx-10 flex items-center gap-4 sm:gap-10 justify-center">
                    {weeks > 0 && <CountdownSection timeLeft={weeks} caption={isNynorsk ? (weeks === 1 ? "veke" : "veker") : (weeks === 1 ? "uke" : "uker")} />}
                    {(days > 0 || weeks !== 0) && <CountdownSection timeLeft={days} caption={isNynorsk ? (days === 1 ? "dag" : "dagar") : (days === 1 ? "dag" : "dager")} />}
                    <CountdownSection timeLeft={hours} caption={isNynorsk ? (hours === 1 ? "time" : "timar") : (hours === 1 ? "time" : "timer")} />
                    {weeks === 0 && <CountdownSection timeLeft={minutes} caption={isNynorsk ? (minutes === 1 ? "minutt" : "minutt") : (minutes === 1 ? "minutt" : "minutter")} />}
                    {(weeks === 0 && days === 0) && <CountdownSection timeLeft={seconds} caption={isNynorsk ? (seconds === 1 ? "sekund" : "sekund") : (seconds === 1 ? "sekund" : "sekunder")} />}

                </div>

            </div>
        </div>
    );
}

export default Countdown;