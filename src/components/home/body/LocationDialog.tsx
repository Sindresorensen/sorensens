import { LanguageContext } from "@/App";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ChurchIcon, Loader2Icon, PartyPopperIcon } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

type LocationDialogType = {
    children: JSX.Element;
    iconChurch: boolean;
    eventType: string;
    location: string;
    time: string;
    link: string;
    className?: string;
}

const iframeSource = {
    time: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2071.2142924193536!2d5.690506092882754!3d58.72642589294683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a38e803a92967%3A0x9722165c8928e0d3!2sTime%20kyrkje!5e0!3m2!1sno!2sno!4v1705481385778!5m2!1sno!2sno",
    kvalbein: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.197602898751!2d5.706918176889132!3d58.541704973815854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a14157c69ce13%3A0x200cffec9debc221!2sJ%C3%A6rgarden%20Kvalbein!5e0!3m2!1sno!2sno!4v1705498491295!5m2!1sno!2sno"
}

export default function LocationDialog(p: LocationDialogType) {

    const { isNynorsk } = useContext(LanguageContext);
    return (
        <Dialog>
            <DialogTrigger className={cn("", p.className)}>
                {p.children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <div className=" flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-5">
                            <div>
                                {p.iconChurch ? 
                                <ChurchIcon size={60} strokeWidth={.2} /> :
                                <PartyPopperIcon size={60} strokeWidth={.2} />}
                            </div>

                            <div>
                                <DialogTitle className=" text-3xl">{p.location}</DialogTitle>
                                <DialogDescription className="flex items-center gap-2">
                                    <p>{p.eventType}</p>
                                    <p className="font-extralight">|</p>
                                    <p>{p.time}</p>
                                </DialogDescription>
                            </div>
                        </div>

                        <div>
                            <Link to={p.link} target="_blank">
                                <Button variant={"outline"} className="border-black hover:bg-black hover:text-white">
                                    {isNynorsk ? "OPNE KART" : "ÅPNE KART"}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </DialogHeader>

                <div className=" w-full h-[50vh] mt-4 relative ">
                    <div className="absolute h-full w-full -z-10">
                        <div className=" w-full h-full m-auto flex justify-center">
                            <div className="flex items-center gap-2">
                                <Loader2Icon className=" animate-spin" />
                                <p className="text-lg">Laster kart...</p>
                            </div>
                        </div>
                    </div>
                    <iframe src={p.iconChurch ? iframeSource.time : iframeSource.kvalbein}
                        className="w-full h-full" 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </DialogContent>

        </Dialog>
    );
}