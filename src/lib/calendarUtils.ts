/* Calendar event download */

/* Event type */
export type CalendarEvent = {
    startTime: Date,
    endTime: Date,
    title: string,
    description: string,
}

/* This function is responsible for downloading the calendar event */
const download = (filename: string, icsBody: string) => {

    const blob = new Blob([icsBody], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename + '.ics';
    document.body.appendChild(a);
    a.click();

    // Clean up the URL and remove the temporary element
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
}


// Function to generate a UUIDv4
const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};


export function createDownloadICSFile(event: CalendarEvent) {

    const location = 'Time Kyrkje\nVestlyvegen 1\, 4347 Lyefjell\, Norge';
    const icsBody = [
        'BEGIN:VCALENDAR',
        'CALSCALE:GREGORIAN',
        'VERSION:2.0',
        'METHOD:PUBLISH',
        'BEGIN:VTIMEZONE',
        'TZID:Europe/Oslo',
        'BEGIN:DAYLIGHT',
        'TZOFFSETFROM:+0100',
        'DTSTART:19810329T020000',
        'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
        'TZNAME:CEST',
        'TZOFFSETTO:+0200',
        'END:DAYLIGHT',
        'BEGIN:STANDARD',
        'TZOFFSETFROM:+0200',
        'DTSTART:19961027T030000',
        'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
        'TZNAME:CET',
        'TZOFFSETTO:+0100',
        'END:STANDARD',
        'END:VTIMEZONE',
        'BEGIN:VEVENT',
        'TRANSP:OPAQUE',
        'DTEND;TZID=Europe/Oslo:20240907T150000',
        'GEO:37.386013;-122.082932',
        `X-APPLE-STRUCTURED-LOCATION;VALUE=URI;X-APPLE-MAPKIT-HANDLE=CAES/gEIrk0Q
         zNvP/siWpdGWARoSCUWrSab5XE1AEfSjhttGyBZAIlYKBU5vcmdlEgJOTxoIUm9nYWxhbmQi
         AjExKgxUaW1lIGtvbW11bmUyCEx5ZWZqZWxsOgQ0MzQ3UgtWZXN0bHl2ZWdlbloBMWINVmVz
         dGx5dmVnZW4gMSoLVGltZSBLeXJramUyDVZlc3RseXZlZ2VuIDEyDTQzNDcgTHllZmplbGwy
         BU5vcmdlOC9QAVpMCiUIzNvP/siWpdGWARISCUWrSab5XE1AEfSjhttGyBZAGK5NkAMBoh8i
         CMzbz/7IlqXRlgEaFQoLVGltZSBLeXJramUQACoCbmJAAA==;X-APPLE-RADIUS=141.1753
         284332634;X-APPLE-REFERENCEFRAME=1;X-TITLE="Time Kyrkje\nVestlyvegen 1, 
         4347 Lyefjell, Norge":geo:58.726369,5.695583`,
        `UID:${uuidv4()}`,  // Generate a unique identifier for the event
        'DTSTAMP:20240109T200034Z',
        `LOCATION:${location}`,
        'SEQUENCE:3',
        `SUMMARY:${event.title}`,
        'DTSTART;TZID=Europe/Oslo:20240907T140000',
        'BEGIN:VALARM',
        `UID:${uuidv4()}`,  // Generate a unique identifier for the event
        'TRIGGER:-PT10M',
        `DESCRIPTION:${event.description}`,
        'ACTION:DISPLAY',
        'END:VALARM',
        'END:VEVENT',
        'END:VCALENDAR',
    ].join('\n');
    

    download(event.title + '.ics', icsBody);
}



/* Returns a date/time in ICS format */
export function convertToICSDate(dateTime: Date): string {
    const year = dateTime.getFullYear().toString();
    const month = (dateTime.getMonth() + 1) < 10 ? "0" + (dateTime.getMonth() + 1).toString() : (dateTime.getMonth() + 1).toString();
    const day = dateTime.getDate() < 10 ? "0" + dateTime.getDate().toString() : dateTime.getDate().toString();
    const hours = dateTime.getHours() < 10 ? "0" + dateTime.getHours().toString() : dateTime.getHours().toString();
    const minutes = dateTime.getMinutes() < 10 ? "0" +dateTime.getMinutes().toString() : dateTime.getMinutes().toString();

    console.log(year + month + day + "T" + hours + minutes + "00")
    return year + month + day + "T" + hours + minutes + "00";
}