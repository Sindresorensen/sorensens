import { HeaderImage } from "./HeaderImage";
import PageDownToggle from "./PageDownToggle";
import SaveTheDate from "./SaveTheDate";


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
            <div className="flex sm:hidden absolute w-full h-full items-end  bottom-40 justify-center z-20 ">
                <SaveTheDate />
            </div>

            <HeaderImage />
            <PageDownToggle />
        </div>
    );
}