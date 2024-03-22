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
import { Loader2Icon } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

type LocationDialogType = {
    children: JSX.Element;
    icon: JSX.Element;
    eventType: string;
    location: string;
    time: string;
    link: string;
    iframesrc: string;
    className?: string;
}

export default function LocationDialog(p: LocationDialogType) {

    const { isNynorsk } = useContext(LanguageContext);
    return (
        <Dialog>
            <DialogTrigger className={cn("border", p.className)}>
                {p.children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <div className=" flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-5">
                            <div>
                                {p.icon}
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
                    <iframe src={p.iframesrc}
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