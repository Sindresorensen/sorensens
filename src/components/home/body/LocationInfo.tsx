import { Button } from "@/components/ui/button";
import { ChurchIcon, PartyPopperIcon } from "lucide-react";
import { Link } from "react-router-dom";
import LocationDialog from "./LocationDialog";
import { useContext } from "react";
import { LanguageContext } from "@/App";


type LocationBox = {
    eventType: string;
    iconChurch: boolean;
    location: string;
    time: string;
    link: string;
}

const LocationBox = (props: LocationBox) => {
    const { isNynorsk } = useContext(LanguageContext);
    return (
        <div className="xl:mb-20 h-1/2 md:h-96 w-full overflow-hidden md:w-72 bg-white bg-opacity-90 md:bg-opacity-70 border-2 rounded-sm border-trueblue text-black">

            <div className="md:hidden my-2 ml-6 mr-4 flex flex-col gap-8 ">
                <div className=" flex items-center gap-3 justify-between ">

                    <div className="flex flex-col gap-0">
                        <p className=" text-3xl">{props.location}</p>
                        <p className="flex items-center gap-2">
                            <p>{props.eventType}</p>
                            <p className="font-extralight">|</p>
                            <p>{props.time}</p>
                        </p>
                    </div>

                    <div>
                        {props.iconChurch ? 
                        <ChurchIcon size={80} strokeWidth={.2} /> :
                        <PartyPopperIcon size={80} strokeWidth={.2} />}
                    </div>
                </div>

                <div className=" flex justify-center">
                    <Link to={props.link} target="_blank">
                        <Button variant={"outline"} className="mb-4 border-black hover:bg-black hover:text-white py-6 px-8 md:py-2 md:px-4 text-lg md:text-md">
                            {isNynorsk ? "SJÅ KART" : "SE KART"}
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="hidden md:flex flex-col items-center justify-between gap-4 h-full mx-10">

                <div className="flex flex-col items-center w-full mt-8 gap-6">
                    <div className=" w-full text-center ">
                        <p className="text-3xl font-light border-b border-black">{props.location}</p>
                    </div>
                    <div className="flex justify-between w-[80%]">
                        <p>{props.eventType}</p>
                        <p className="font-extralight">|</p>
                        <p>{props.time}</p>
                    </div>
                </div>
                
                <Link className="block sm:hidden" to={props.link} target="_blank">
                    <Button variant={"outline"} className="border-black mt-6 hover:bg-black hover:text-white">
                        {isNynorsk ? "SJÅ KART" : "SE KART"}
                    </Button>
                </Link>

                {/* Dialog */}
                <LocationDialog 
                    iconChurch={props.iconChurch}
                    className="hidden sm:block"
                    eventType={props.eventType}
                    location={props.location}
                    time={props.time}
                    link={props.link}
                >
                    <Button variant={"outline"} className="border-black mt-6 hover:bg-black hover:text-white">
                        {isNynorsk ? "SJÅ KART" : "SE KART"}
                    </Button>
                </LocationDialog>

                <div className="mb-4 hidden md:block">
                    {props.iconChurch ? 
                    <ChurchIcon size={120} strokeWidth={.2} /> :
                    <PartyPopperIcon size={120} strokeWidth={.2} />}
                </div>
            </div>
        </div>
    );
}


function LocationInfo() {
    const { isNynorsk } = useContext(LanguageContext);
    return (
        <div className="bg-black overflow-hidden flex items-center h-auto min-h-[75vh] m-auto relative py-8 md:py-0">

            {/* Image */}
            <div className=" absolute z-10 h-full w-full bg-[url('/images/sky.JPG')] md:bg-[url('/images/IMG_0205.JPG')] bg-cover bg-center opacity-80" />

            <div className="flex flex-col md:flex-row z-20 w-[88%] m-auto justify-between items-center gap-8 md:gap-0">
                <LocationBox
                    eventType={isNynorsk ? "Open vigsel" : "Åpen vielse"}
                    iconChurch={true}
                    location="Time kyrkje"
                    link="https://maps.app.goo.gl/DasVEJTgtob42xRw8"
                    time="14:00"
                />
                
                <LocationBox
                    eventType={isNynorsk ? "Bryllaupsfest" : "Bryllupsfest"}
                    iconChurch={false}
                    location={isNynorsk ? "Kvalbein gard" : "Kvalben gård"}
                    link="https://maps.app.goo.gl/LNxRmSNP9suvANjv7"
                    time="17:00"
                />
            </div>
            
        </div>
    );
}

export default LocationInfo;