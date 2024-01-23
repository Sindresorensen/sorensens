import { useCountdown } from "@/lib/countdownUtils";
import CountdownSection from "./CountdownSection";
import { useContext } from "react";
import { LanguageContext } from "@/App";

function Countdown() {

    const { isNynorsk } = useContext(LanguageContext);
    const weddingDate = new Date(2024, 8, 7, 16, 15);

    let [weeks, days, hours, minutes, seconds] = useCountdown(weddingDate);

    if (weeks + days + hours + minutes + seconds <= 0) {
        weeks = 0;
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    return (
        <div className=" h-[75vh] flex items-center mb-[20vh] relative">
            <div className=" w-full">

                <div className=" m-10 mx-4 sm:mx-10 flex items-center gap-6 sm:gap-10 justify-center">

                    {weeks > 0 && <CountdownSection timeLeft={weeks} caption={isNynorsk ? "vekar" : "uker"} />}
                    {days > 0 && <CountdownSection timeLeft={days} caption={isNynorsk ? "dagar" : "dager"} />}
                    <CountdownSection timeLeft={hours} caption={isNynorsk ? "timar" : "timer"} />
                    {weeks === 0 && <CountdownSection timeLeft={minutes} caption={isNynorsk ? "minutt" : "minutter"} />}
                    {days === 0 && <CountdownSection timeLeft={seconds} caption={isNynorsk ? "sekund" : "sekunder"} />}

                </div>

            </div>
        </div>
    );
}

export default Countdown;