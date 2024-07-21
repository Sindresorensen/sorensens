import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Menu from "./Menu";

const randint = (max: number) => Math.floor(Math.random() * max);

const nextIndex = (usedIndexes: number[], max: number) => {
    let i;
    do {
        i = randint(max);
    } while (usedIndexes.includes(i));
    return i;
}

type SlideProps = {
    images: string[];
    seconds: number;
    setSeconds: (val: number) => void;
    hasTransition: boolean;
    setHasTransition: (val: boolean) => void;
    setIsShowingSlides: (val: boolean) => void;
}

export default function Slide({ images, seconds, setSeconds, hasTransition, setHasTransition, setIsShowingSlides }: SlideProps) {

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const [curIndex, setCurIndex] = useState(randint(images.length - 1));
    const [usedIndexes, setUsedIndexes] = useState([curIndex]);

    // Animation
    const [isFading, setIsFading] = useState(false);

    // Change image after seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (usedIndexes.length === images.length - 2) {
                setUsedIndexes([]);
            }
            setIsFading(true);
        }, seconds * 1000);
        return () => clearInterval(interval);
    }, [usedIndexes, seconds, images.length]);

    useEffect(() => {
        if (isFading) {
            const i = nextIndex(usedIndexes, images.length - 1);
            setTimeout(() => {
                setCurIndex(i);
                setUsedIndexes(prev => [...prev, i]);
                setIsFading(false);
            }, 500); // Duration of fade-out animation
        }
    }, [isFading, usedIndexes, images.length]);

    const enterFullscreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            setIsFullscreen(true);
        }
    };

    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }

    const handleFullscreen = () => (isFullscreen) ? exitFullscreen() : enterFullscreen();
    
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isFullscreen) exitFullscreen();
        else if (e.key === "f" && !isFullscreen) enterFullscreen();
    }

    useEffect(() => {
        const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);

        document.addEventListener("fullscreenchange", onFullscreenChange);
        document.addEventListener("keydown", onKeyDown, false);

        return () => {
            document.removeEventListener("fullscreenchange", onFullscreenChange);
            document.removeEventListener("keydown", onKeyDown, false);
            document.body.style.cursor = 'default';
        };
    }, []);


    const handleMouseMove = () => {
        if (timeoutId) clearTimeout(timeoutId);
        setShowMenu(true);
        document.body.style.cursor = 'default'
        const newTimeoutId = setTimeout(() => {
            setShowMenu(false);
            document.body.style.cursor = 'none'
        }, 3000);
        setTimeoutId(newTimeoutId);
    };

    useEffect(() => {
        // Cleanup the timeout if the component unmounts
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    // Exit button
    const exit = () => {
        document.body.style.cursor = 'default';
        setIsShowingSlides(false);
        exitFullscreen();
    }

    return (
        <div className="z-20 absolute h-screen w-screen top-0 bg-black flex justify-center" onMouseMove={handleMouseMove}>
            <img src={images[curIndex]}
                className={cn("m-6 max-w-full max-h-full", hasTransition && (isFading ? " fade-out" : "fade-in"))}
            />

            {/* Menu */}
            <Menu showMenu={showMenu}
                seconds={seconds}
                setSeconds={setSeconds}
                hasTransition={hasTransition}
                setHasTransition={setHasTransition}
                isFullscreen={isFullscreen}
                handleFullscreen={handleFullscreen} 
                exit={exit}
            />
        </div>
    )
}