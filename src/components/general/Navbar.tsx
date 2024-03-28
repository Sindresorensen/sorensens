import "@/App.css";
import NavButton from "@/components/general/nav-button/nav-button";
import { Link } from "react-router-dom";
import { Bars3Icon, EnvelopeIcon, GiftIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import LanguageToggle from "../home/header/LanguageToggle";
import SaveTheDate from "../home/header/SaveTheDate";
import { Close } from "@radix-ui/react-dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageContext } from "@/App";
import { cn } from "@/lib/utils";
  

const HamburgerMenuContentWithIcons = ({isNynorsk}: {isNynorsk: boolean}) => {
    return (
        <div className=" text-black bg-transparent pt-20">
            <div className="flex flex-col items-end mx-10 gap-10">
                <Close asChild>
                    <Link to="/">
                        <div className="flex items-end gap-4">
                            <NavButton color="black" className="uppercase font-semibold text-lg">{isNynorsk ? "Heim" : "Hjem"}</NavButton>
                            <HomeIcon className="h-6" />
                        </div>
                    </Link>
                </Close>
                <Close asChild>
                    <Link to="/su">
                        <div className="flex items-end gap-4">
                            <NavButton color="black" className="uppercase font-semibold text-lg">Svar utbes</NavButton>
                            <EnvelopeIcon className="h-6" />
                        </div>
                    </Link>
                </Close>
                <Close asChild>
                    <Link to="/kontakt">
                        <div className="flex items-end gap-4">
                            <NavButton color="black" className="uppercase font-semibold text-lg">Kontakt</NavButton>
                            <PhoneIcon className="h-6" />
                        </div>
                    </Link>
                </Close>
                <Close asChild>
                    <Link target="_blank" to="https://www.onskelister.no/liste?id=8bZLMTJcU9tDfIJ0YPIF">
                        <div className="flex items-end gap-4">
                            <NavButton color="black" className="uppercase font-semibold text-lg">Ønskeliste</NavButton>
                            <GiftIcon className="h-6" />
                        </div>
                    </Link>
                </Close>
            </div>
        </div>
    );
}

const HamburgerMenu = ({isNynorsk}: {isNynorsk: boolean}) => {
    return (
        <Sheet>
            <SheetTrigger>
                <div className=" z-50 w-10 h-10 flex items-center justify-center" >
                    <Bars3Icon className="h-8 text-white" />
                </div>
            </SheetTrigger>
            <SheetContent>
                <HamburgerMenuContentWithIcons isNynorsk={isNynorsk} />
            </SheetContent>
        </Sheet>
    );
}


export function Navbar() {

    const { isNynorsk } = useContext(LanguageContext);
    
    const [hidden, setHidden] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    let prevScrollPos = 0;

    const handleScroll = () => {
        const fromTop = Math.abs(document.body.getBoundingClientRect().top);
        if (fromTop > 300) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        
        if ((fromTop > 100 && fromTop - prevScrollPos < 0) || fromTop < 100) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }

        prevScrollPos = fromTop;

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    


    return (
        <>

        <div className={cn(
            "flex sm:hidden fixed z-30 w-full transition duration-500", 
            (showMenu ? "opacity-100" : "opacity-0"))}
        >
            <div className="flex items-center justify-between w-full mt-6 mx-6">

                <div className="flex sm:hidden h-10 items-center justify-between">
                    <LanguageToggle />
                </div>

                <HamburgerMenu isNynorsk={isNynorsk} />
            </div>
        </div>


        <div className={cn(
            "hidden sm:flex justify-between fixed pt-8 px-8 pb-2 z-30 w-full transition duration-500 sm:hover:opacity-100", 
            (hidden ? "sm:opacity-0" : "sm:opacity-100"))}
        >
            <div className=" flex items-center justify-left gap-6 ">
                <Link to="/">
                    <NavButton color="white" className="uppercase font-extralight">{isNynorsk ? "Heim" : "Hjem"}</NavButton>
                </Link>
                <Link to="/su">
                    <NavButton color="white" className="uppercase font-extralight">Svar utbes</NavButton>
                </Link>
                <Link to="/kontakt">
                    <NavButton color="white" className="uppercase font-extralight">Kontakt</NavButton>
                </Link>
                <Link target="_blank" to="https://www.onskelister.no/liste?id=8bZLMTJcU9tDfIJ0YPIF">
                    <NavButton color="white" className="uppercase font-extralight">Ønskeliste</NavButton>
                </Link>
            </div>
            <div className=" flex z-20 items-center gap-8">
                <LanguageToggle />
                <SaveTheDate />
            </div>
        </div>
        </>
    );
}