import { ChurchIcon, PartyPopperIcon } from 'lucide-react';
import LocationElement from "./LocationElement";
import NavButton from '@/components/general/nav-button/nav-button';
import { Link } from 'react-router-dom';

export type LocationInfoType = {
    eventType: {nynorsk: string, notNynorsk: string};
    location: string;
    time: string;
    description: {nynorsk: string, notNynorsk: string};
    icon: JSX.Element;
    link: string;
    iframesrc: string;
}

const locationInfo: LocationInfoType[] = [
    {
        eventType: {nynorsk: "Open vigsel", notNynorsk: "Åpen vielse"},
        location: "Time kyrkje",
        time: "14:00",
        description: {
            nynorsk: "Velkomen til open vigsel i Time kyrkje! Vigselen starter kl. 14:00.",
            notNynorsk: "Velkommen til åpen vielse i Time kyrkje! Vielsen starter kl. 14:00."
        },
        icon: <ChurchIcon size={100} strokeWidth={.2} />,
        link: "https://maps.app.goo.gl/DasVEJTgtob42xRw8",
        iframesrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2071.2142924193536!2d5.690506092882754!3d58.72642589294683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a38e803a92967%3A0x9722165c8928e0d3!2sTime%20kyrkje!5e0!3m2!1sno!2sno!4v1705481385778!5m2!1sno!2sno",
    },
    {
        eventType: {nynorsk: "Bryllaupsfest", notNynorsk: "Bryllupsfest"},
        location: "Jærgarden Kvalbein",
        time: "17:00",
        description: {
            nynorsk: "Etter vigselen fortsetter festen på Jærgarden Kvalbein kl. 17:00.",
            notNynorsk: "Etter vielsen fortsetter festen på Jærgarden Kvalbein kl. 17:00."
        },
        icon: <PartyPopperIcon size={100} strokeWidth={.2} />,
        link: "https://maps.app.goo.gl/LNxRmSNP9suvANjv7",
        iframesrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.197602898751!2d5.706918176889132!3d58.541704973815854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a14157c69ce13%3A0x200cffec9debc221!2sJ%C3%A6rgarden%20Kvalbein!5e0!3m2!1sno!2sno!4v1705498491295!5m2!1sno!2sno"
    }
]

export default function LocationBox() {

    const vigsel = locationInfo[0];
    const fest = locationInfo[1];

    return (
        <div className=" bg-beige flex flex-col items-center justify-center relative overflow-hidden ">

            <div className="flex flex-col items-center w-[90%] sm:w-5/6 md:w-3/5 lg:w-2/5 h-[80vh] justify-evenly">
                <LocationElement info={vigsel} />
                <LocationElement info={fest} />
            </div>

            <div className="flex items-center gap-2 sm:gap-4 mb-6">
                <Link to="/su"><NavButton><i>Si ifra om du kommer</i></NavButton></Link>
                <p>//</p>
                <Link to="/kontakt"><NavButton><i>Ta kontakt</i></NavButton></Link>
                <p>//</p>
                <Link to="https://www.onskelister.no/liste?id=8bZLMTJcU9tDfIJ0YPIF" target="_blank">
                    <NavButton><i>Se ønskeliste</i></NavButton>
                </Link>
            </div>
        </div>
    )
}