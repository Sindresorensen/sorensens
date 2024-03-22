import { useContext } from "react";
import { LocationInfoType } from "./LocationBox";
import { LanguageContext } from "@/App";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LocationDialog from "./LocationDialog";


export default function LocationElement({info}: {info: LocationInfoType}) {

    const { isNynorsk } = useContext(LanguageContext);

    return (
        <div className="flex flex-col sm:flex-row w-full justify-between items-end sm:items-center gap-6">
            <div className="flex gap-4">
                <div>{info.icon}</div>

                <div className="text-left flex flex-col gap-2 ">
                    <p className="text-2xl font-medium">{info.location}</p>
                    <p className=" font-light font-sarabun">{isNynorsk ? info.description.nynorsk : info.description.notNynorsk}</p>
                </div>

            </div>

            <div className="">

                <Link className="block sm:hidden" to={info.link} target="_blank">
                    <Button variant={"outline"} className="border-black hover:bg-black hover:text-white">
                        {isNynorsk ? "SJÅ KART" : "SE KART"}
                    </Button>
                </Link>

                {/* Dialog */}
                <LocationDialog
                    eventType={isNynorsk ? info.eventType.nynorsk : info.eventType.notNynorsk}
                    location={info.location}
                    time={info.time}
                    icon={info.icon}
                    link={info.link}
                    iframesrc={info.iframesrc}
                    className="hidden sm:block"
                >
                    <Button variant={"outline"} className="border-black hover:bg-black hover:text-white">
                        {isNynorsk ? "SJÅ KART" : "SE KART"}
                    </Button>
                </LocationDialog>
            </div>
        </div>
    )
}