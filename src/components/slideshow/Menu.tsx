import { Maximize, Minimize } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import DurationSelector from "./DurationSelector";
import { secs } from "@/pages/Slideshow";
import { Label } from "../ui/label";
import TransitionSelector from "./TransitionSelector";


type MenuProps = {
    showMenu: boolean;
    isFullscreen: boolean;
    seconds: number;
    setSeconds: (val: number) => void;
    hasTransition: boolean;
    setHasTransition: (val: boolean) => void;
    handleFullscreen: () => void;
    exit: () => void;
}

export default function Menu({ showMenu, isFullscreen, seconds, setSeconds, hasTransition, setHasTransition, exit, handleFullscreen }: MenuProps) {
    
    return (
        <div className={cn(
            "absolute w-full h-1/3 bottom-0 z-50 bg-gradient-to-t from-black to-transparent flex items-end justify-center transition-all",
            showMenu ? "opacity-100" : "opacity-0"
        )}>
            <div className=" mx-10 w-full h-28 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Button variant="outline" className="px-10 text-white"
                        onClick={exit}
                    >Avslutt</Button>

                    <DurationSelector 
                        secs={secs}
                        seconds={seconds}
                        setSeconds={setSeconds}
                        className="bg-transparent text-white"
                    />

                    <div className="flex gap-2 items-center ml-4">
                        <TransitionSelector hasTransition={hasTransition} setHasTransition={setHasTransition} 
                            className="border-white"
                            iconClassName="text-white "
                        />
                        <Label htmlFor="transitionOn" className="text-white text-base font-normal cursor-pointer">Transition</Label>
                    </div>
                </div>
                
                <div className="cursor-pointer" onClick={handleFullscreen} >
                    {isFullscreen ? 
                    <Minimize size={40} color="white" strokeWidth={1} /> :
                    <Maximize size={40} color="white" strokeWidth={1} />}
                </div>
            </div>
        </div>
    );
}