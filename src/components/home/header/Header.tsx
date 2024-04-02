import { Button } from "@/components/ui/button";
import { HeaderImage } from "./HeaderImage";
import PageDownToggle from "./PageDownToggle";
import SaveTheDate from "./SaveTheDate";
import { Link } from "react-router-dom";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";


export function Header() {

    return (
        <div className="bg-black z-0 h-screen overscroll-contain w-full relative"> {/* Black for filter effect */}

            {/* Headline */}
            <div className="absolute flex flex-col items-center top-[12vh] md:top-[10vh] w-full z-10">
                <p className="font-tangerine text-white text-7xl md:text-8xl">Hanna & Sindre</p>
                <div className=" flex items-center gap-2 ">
                    <div className=" border-t w-3 border-white"/>
                    <p className="text-white ">07.09.2024</p>
                    <div className=" border-t w-3 border-white"/>
                </div>
            </div>

            {/* Smaller screens */}
            <div className="flex sm:hidden absolute w-full h-full items-end  bottom-40 justify-center z-20">
                <SaveTheDate />
            </div>

            <div className="absolute hidden sm:block z-20 bottom-8 right-8">
                <Link to="/last_opp">
                    <Button variant={"outline"} className=" text-white py-6 px-8 sm:py-2 sm:px-4 text-lg sm:text-sm hover:text-black" >
                        <div className="flex gap-3 items-center">
                            <ArrowUpTrayIcon className="h-4" />
                            <p>Last opp bilde</p>
                        </div>
                    </Button>
                </Link>
            </div>

            <HeaderImage />
            <PageDownToggle />
        </div>
    );
}