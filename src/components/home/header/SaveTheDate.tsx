import { LanguageContext } from "@/App";
import { Button } from "@/components/ui/button";
import { CalendarEvent, createDownloadICSFile } from "@/lib/calendarUtils";
import { useContext } from "react";



const calendarEvent: CalendarEvent = {
    startTime: new Date(2024, 8, 7, 14, 0),
    endTime: new Date(2024, 8, 7, 15, 0),
    title: 'Hanna og Sindre gifter seg!',
    description: 'Hanna og Sindre gifter seg i Time kyrkje! Håper du vil komme!',
}

const calendarEventNynorsk: CalendarEvent = {
    startTime: new Date(2024, 8, 7, 14, 0),
    endTime: new Date(2024, 8, 7, 15, 0),
    title: 'Hanna og Sindre giftar seg!',
    description: 'Hanna og Sindre giftar seg i Time kyrkje! Håpar du vil komma!',
}

/* NYNORSK DONE */
function SaveTheDate() {
    const { isNynorsk } = useContext(LanguageContext);

    return(
        <Button
            variant="outline" 
            className=" text-white py-6 px-8 sm:py-2 sm:px-4 text-lg sm:text-sm"
            onClick={() => createDownloadICSFile(isNynorsk ? calendarEventNynorsk : calendarEvent)}
        >
            <p>Legg til i kalender</p>
        </Button>
    );

}

export default SaveTheDate;